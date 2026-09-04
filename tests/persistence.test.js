const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const projectRoot = path.resolve(__dirname, "..");
const dataFiles = [
  "data/legislacion.js",
  "data/atm.js",
  "data/fernando.js",
  "data/navigation.js",
];
const appSource = fs.readFileSync(path.join(projectRoot, "js/app.js"), "utf8");

class FakeStorage {
  constructor() {
    this.values = new Map();
  }

  getItem(key) {
    return this.values.has(key) ? this.values.get(key) : null;
  }

  setItem(key, value) {
    this.values.set(String(key), String(value));
  }

  removeItem(key) {
    this.values.delete(String(key));
  }
}

class FakeClassList {
  constructor(initial = []) {
    this.values = new Set(initial);
  }

  add(...names) {
    names.forEach((name) => this.values.add(name));
  }

  remove(...names) {
    names.forEach((name) => this.values.delete(name));
  }

  contains(name) {
    return this.values.has(name);
  }
}

class FakeElement {
  constructor(id, initialClasses = []) {
    this.id = id;
    this.classList = new FakeClassList(initialClasses);
    this.children = [];
    this.innerHTML = "";
    this.textContent = "";
    this.disabled = false;
    this.onclick = null;
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }
}

class FakeDocument {
  constructor() {
    this.visibilityState = "visible";
    this.body = new FakeElement("body");
    this.elements = new Map();
    const initiallyHidden = new Set(["exam", "results", "confirm"]);
    [
      "home",
      "exam",
      "results",
      "confirm",
      "subject",
      "mode",
      "qcount",
      "qtitle",
      "options",
      "practiceFeedback",
      "prev",
      "prevTop",
      "next",
      "nextTop",
      "answered",
      "bankSize",
      "clock",
      "grid",
      "saveStatus",
      "confirmTitle",
      "confirmText",
      "confirmDo",
    ].forEach((id) => {
      this.elements.set(id, new FakeElement(id, initiallyHidden.has(id) ? ["hidden"] : []));
    });
  }

  getElementById(id) {
    return this.elements.get(id) || null;
  }

  createElement(tagName) {
    return new FakeElement(tagName);
  }

  addEventListener() {}
}

function loadApp(storage) {
  const document = new FakeDocument();
  const window = {
    scrollTo() {},
    addEventListener() {},
  };
  let nextTimerId = 0;
  const activeTimers = new Set();
  const fakeSetInterval = () => {
    const timerId = ++nextTimerId;
    activeTimers.add(timerId);
    return timerId;
  };
  const fakeClearInterval = (timerId) => activeTimers.delete(timerId);
  const context = vm.createContext({
    console,
    Date,
    Math,
    JSON,
    Set,
    String,
    Number,
    Array,
    Object,
    document,
    localStorage: storage,
    setInterval: fakeSetInterval,
    clearInterval: fakeClearInterval,
    window,
  });

  for (const file of dataFiles) {
    vm.runInContext(fs.readFileSync(path.join(projectRoot, file), "utf8"), context, {
      filename: file,
    });
  }
  vm.runInContext(appSource, context, { filename: "js/app.js" });
  return { context, document };
}

function currentState(context) {
  return vm.runInContext("state", context);
}

function savedState(storage) {
  return JSON.parse(storage.getItem("atco-exam-trainer.session.v1"));
}

test("restores the active session, question order, answers and position after remount", () => {
  const storage = new FakeStorage();
  const firstMount = loadApp(storage);

  vm.runInContext("startSession('nav', 'practice')", firstMount.context);
  const firstQuestion = currentState(firstMount.context).questions[0];
  vm.runInContext(`answer(${firstQuestion.a})`, firstMount.context);
  vm.runInContext("move(3)", firstMount.context);

  const beforeRemount = savedState(storage);
  assert.equal(beforeRemount.kind, "nav");
  assert.equal(beforeRemount.mode, "practice");
  assert.equal(beforeRemount.questions.length, 136);
  assert.equal(beforeRemount.current, 3);
  assert.equal(beforeRemount.answers.filter((answer) => answer !== null).length, 1);
  assert.equal(beforeRemount.locked.filter(Boolean).length, 1);

  const secondMount = loadApp(storage);
  const afterRemount = savedState(storage);
  const restored = currentState(secondMount.context);

  assert.deepEqual(afterRemount, beforeRemount);
  assert.deepEqual(
    {
      kind: restored.kind,
      mode: restored.mode,
      questions: restored.questions,
      answers: restored.answers,
      locked: restored.locked,
      current: restored.current,
      finished: restored.finished,
      start: restored.start,
    },
    {
      kind: beforeRemount.kind,
      mode: beforeRemount.mode,
      questions: beforeRemount.questions,
      answers: beforeRemount.answers,
      locked: beforeRemount.locked,
      current: beforeRemount.current,
      finished: beforeRemount.finished,
      start: beforeRemount.start,
    },
  );
  assert.equal(secondMount.document.getElementById("qcount").textContent, "Pregunta 4 de 136");
  assert.equal(secondMount.document.getElementById("answered").textContent, "1/136");
  assert.equal(secondMount.document.getElementById("saveStatus").textContent, "Sesión restaurada");
  assert.equal(secondMount.document.getElementById("home").classList.contains("hidden"), true);
  assert.equal(secondMount.document.getElementById("exam").classList.contains("hidden"), false);

  vm.runInContext("showHome()", secondMount.context);
});

test("hydrates topic explanations in legacy saved navigation sessions", () => {
  const storage = new FakeStorage();
  const firstMount = loadApp(storage);
  vm.runInContext("startSession('nav', 'practice')", firstMount.context);
  const legacy = savedState(storage);
  legacy.questions = legacy.questions.map((question) => {
    const copy = { ...question };
    delete copy.topicExp;
    return copy;
  });
  storage.setItem("atco-exam-trainer.session.v1", JSON.stringify(legacy));

  const remounted = loadApp(storage);
  const restored = currentState(remounted.context);
  assert.equal(restored.questions.length, 136);
  assert.ok(restored.questions.every((question) => typeof question.topicExp === "string" && question.topicExp.length >= 120));
});

test("restores a session whose saved timestamp is one hour old", () => {
  const storage = new FakeStorage();
  const firstMount = loadApp(storage);

  vm.runInContext("startSession('nav', 'exam'); move(4)", firstMount.context);
  const beforeRemount = savedState(storage);
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  beforeRemount.start = oneHourAgo;
  beforeRemount.savedAt = oneHourAgo;
  storage.setItem("atco-exam-trainer.session.v1", JSON.stringify(beforeRemount));

  const secondMount = loadApp(storage);
  const restored = currentState(secondMount.context);
  assert.equal(restored.current, 4);
  assert.deepEqual(
    restored.questions.map((question) => question.q),
    beforeRemount.questions.map((question) => question.q),
  );
  assert.equal(restored.start, oneHourAgo);
  assert.equal(secondMount.document.getElementById("qcount").textContent, "Pregunta 5 de 40");
  assert.equal(secondMount.document.getElementById("clock").textContent, "60:00");

  vm.runInContext("showHome()", secondMount.context);
});

test("restores a completed exam and its result state after remount", () => {
  const storage = new FakeStorage();
  const firstMount = loadApp(storage);

  vm.runInContext("startSession('nav', 'exam'); finishSession()", firstMount.context);
  const beforeRemount = savedState(storage);
  assert.equal(beforeRemount.finished, true);
  assert.equal(beforeRemount.questions.length, 40);
  assert.equal(typeof beforeRemount.durationSec, "number");

  const secondMount = loadApp(storage);
  const restored = currentState(secondMount.context);
  assert.equal(restored.finished, true);
  assert.equal(restored.questions.length, 40);
  assert.equal(restored.current, beforeRemount.current);
  assert.deepEqual(restored.answers, beforeRemount.answers);
  assert.equal(secondMount.document.getElementById("results").classList.contains("hidden"), false);
  assert.equal(secondMount.document.getElementById("exam").classList.contains("hidden"), true);

  vm.runInContext("showHome()", secondMount.context);
});

test("keeps the normal home state when there is no persisted session", () => {
  const storage = new FakeStorage();
  const mount = loadApp(storage);

  assert.equal(currentState(mount.context), null);
  assert.equal(mount.document.getElementById("home").classList.contains("hidden"), false);
  assert.equal(mount.document.getElementById("exam").classList.contains("hidden"), true);
  assert.equal(storage.getItem("atco-exam-trainer.session.v1"), null);
});

test("an exam answer click advances to the next question without feedback", () => {
  for (const kind of ["leg", "atm", "nav"]) {
    const mount = loadApp(new FakeStorage());
    vm.runInContext(`startSession('${kind}', 'exam')`, mount.context);
    const option = mount.document.getElementById("options").children[0];

    option.onclick({
      preventDefault() {},
      stopPropagation() {},
    });

    const state = currentState(mount.context);
    assert.equal(state.current, 1, `${kind}: answering must advance`);
    assert.equal(state.answers.filter((answer) => answer !== null).length, 1);
    assert.equal(mount.document.getElementById("qcount").textContent, `Pregunta 2 de ${state.questions.length}`);
    assert.equal(mount.document.getElementById("practiceFeedback").innerHTML, "");
  }
});

test("an exam answer click prevents default submission and propagation", () => {
  const mount = loadApp(new FakeStorage());
  vm.runInContext("startSession('nav', 'exam')", mount.context);
  const option = mount.document.getElementById("options").children[0];
  let prevented = false;
  let stopped = false;

  option.onclick({
    preventDefault() {
      prevented = true;
    },
    stopPropagation() {
      stopped = true;
    },
  });

  assert.equal(prevented, true);
  assert.equal(stopped, true);
  assert.equal(currentState(mount.context).current, 1);
});

test("the last exam answer stays on the last question for manual delivery", () => {
  const mount = loadApp(new FakeStorage());
  vm.runInContext("startSession('nav', 'exam'); gotoQ(state.questions.length - 1)", mount.context);
  const option = mount.document.getElementById("options").children[0];

  option.onclick({
    preventDefault() {},
    stopPropagation() {},
  });

  const state = currentState(mount.context);
  assert.equal(state.current, state.questions.length - 1);
  assert.notEqual(state.answers[state.current], null);
  assert.equal(mount.document.getElementById("qcount").textContent, "Pregunta 40 de 40");
  assert.equal(mount.document.getElementById("next").textContent, "Entregar");
});

test("every navigation question has a general topic explanation and renders it", () => {
  const mount = loadApp(new FakeStorage());
  const questions = vm.runInContext("BANKS.nav", mount.context);

  assert.equal(questions.length, 136);
  for (const question of questions) {
    assert.equal(typeof question.topic, "string");
    assert.ok(question.topic.length > 0);
    assert.equal(typeof question.topicExp, "string");
    assert.ok(question.topicExp.length >= 120, `short topic explanation for ${question.navNo}`);
  }

  vm.runInContext("startSession('nav', 'practice'); answer(state.questions[0].a)", mount.context);
  assert.match(mount.document.getElementById("practiceFeedback").innerHTML, /Contexto general del tema/);
  vm.runInContext("finishSession()", mount.context);
  assert.match(mount.document.getElementById("results").innerHTML, /Contexto general del tema/);
});

test("removes malformed or incompatible persisted sessions without crashing", () => {
  for (const invalidValue of [
    "{not-json",
    JSON.stringify({ kind: "unknown", mode: "practice" }),
    JSON.stringify({
      kind: "nav",
      mode: "practice",
      questions: [{ q: "incomplete" }],
      answers: [null],
      locked: [false],
      current: 0,
      start: Date.now(),
      finished: false,
    }),
  ]) {
    const storage = new FakeStorage();
    storage.setItem("atco-exam-trainer.session.v1", invalidValue);
    const mount = loadApp(storage);

    assert.equal(storage.getItem("atco-exam-trainer.session.v1"), null);
    assert.equal(mount.document.getElementById("home").classList.contains("hidden"), false);
    assert.equal(mount.document.getElementById("exam").classList.contains("hidden"), true);
  }
});
