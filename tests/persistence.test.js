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

  toggle(name, force) {
    const shouldAdd = force === undefined ? !this.values.has(name) : Boolean(force);
    if (shouldAdd) this.values.add(name);
    else this.values.delete(name);
    return shouldAdd;
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
      "totalQuestions",
      "correctAnswers",
      "incorrectAnswers",
      "liveStats",
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

test("shows correct and incorrect counters outside exam mode only", () => {
  const expectedTotals = { leg: 55, atm: 367, nav: 136, fernando: 250 };

  for (const [kind, total] of Object.entries(expectedTotals)) {
    const mount = loadApp(new FakeStorage());
    vm.runInContext(`startSession('${kind}', 'practice'); answer(state.questions[0].a); move(1); answer((state.questions[1].a + 1) % state.questions[1].opts.length)`, mount.context);

    assert.equal(String(mount.document.getElementById("totalQuestions").textContent), String(total));
    assert.equal(String(mount.document.getElementById("correctAnswers").textContent), "1");
    assert.equal(String(mount.document.getElementById("incorrectAnswers").textContent), "1");
    assert.equal(mount.document.getElementById("liveStats").classList.contains("hidden"), false);
  }

  const examMount = loadApp(new FakeStorage());
  vm.runInContext("startSession('nav', 'exam'); answer(state.questions[0].a)", examMount.context);
  assert.equal(examMount.document.getElementById("liveStats").classList.contains("hidden"), true);
  assert.equal(examMount.document.getElementById("totalQuestions").textContent, "");
  assert.equal(examMount.document.getElementById("correctAnswers").textContent, "");
  assert.equal(examMount.document.getElementById("incorrectAnswers").textContent, "");
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
  const practiceFeedback = mount.document.getElementById("practiceFeedback").innerHTML;
  assert.match(practiceFeedback, /Contexto general del tema/);
  assert.ok(practiceFeedback.indexOf("Por qué la correcta es correcta") < practiceFeedback.indexOf("Contexto general del tema"));
  vm.runInContext("finishSession()", mount.context);
  const results = mount.document.getElementById("results").innerHTML;
  assert.match(results, /Contexto general del tema/);
  assert.ok(results.indexOf("Por qué la correcta es correcta") < results.indexOf("Contexto general del tema"));
});

test("every acronym in every deepExp has its literal expansion inline", () => {
  const mount = loadApp(new FakeStorage());
  const questions = [
    ...vm.runInContext("BANKS.leg", mount.context),
    ...vm.runInContext("BANKS.atm", mount.context),
    ...vm.runInContext("BANKS.fernando", mount.context),
    ...vm.runInContext("BANKS.nav", mount.context),
  ];
  const expected = {
    OACI: "Organización de Aviación Civil Internacional",
    AESA: "Agencia Estatal de Seguridad Aérea",
    EASA: "European Union Aviation Safety Agency",
    ATC: "Air Traffic Control",
    ATS: "Air Traffic Services",
    DME: "Distance Measuring Equipment",
    VOR: "VHF Omnidirectional Range",
    NDB: "Non-Directional Beacon",
    ADF: "Automatic Direction Finder",
    ILS: "Instrument Landing System",
    TACAN: "Tactical Air Navigation",
    RNAV: "Area Navigation",
    RNP: "Required Navigation Performance",
    PBN: "Performance-Based Navigation",
    GNSS: "Global Navigation Satellite System",
    GPS: "Global Positioning System",
    INS: "Inertial Navigation System",
    IRS: "Inertial Reference System",
    SID: "Standard Instrument Departure",
    STAR: "Standard Instrument Arrival",
    "PANS-ATM": "Procedures for Air Navigation Services — Air Traffic Management",
    ACAS: "Airborne Collision Avoidance System",
    TCAS: "Traffic Alert and Collision Avoidance System",
    RA: "Resolution Advisory",
    TAWS: "Terrain Awareness and Warning System",
    GPWS: "Ground Proximity Warning System",
    QNH: "Altimeter Setting to Mean Sea Level",
    QFE: "Atmospheric Pressure at Aerodrome Elevation",
    QNE: "Standard Pressure Setting 1013.25 hPa",
    RVR: "Runway Visual Range",
    FL: "Flight Level",
    AIP: "Aeronautical Information Publication",
    IFPS: "Initial Integrated Flight Plan Processing System",
    ATFM: "Air Traffic Flow Management",
    ATFCM: "Air Traffic Flow and Capacity Management",
    CTOT: "Calculated Take-Off Time",
    AUP: "Airspace Use Plan",
    UUP: "Updated Airspace Use Plan",
    CDR: "Conditional Route",
    FIS: "Flight Information Service",
    SDP: "Servicio de Dirección de Plataforma",
  };
  const ignored = new Set([
    "PAN", "MAYDAY", "SOS", "MEDIA", "PESADA", "LIGERA", "SÚPER", "SUPER",
    "ROGER", "ACKNOWLEDGE", "CORRECTION", "COMA", "SAY", "AGAIN", "MEDICAL",
    "XXX", "ONE", "THOUSAND", "FOR", "STAND", "BY", "LLEGADAS", "ARRIVAL",
    "CLEAR", "OF", "CONFLICT", "BREAK", "RADIO", "DISTRESS", "EMERGENCY",
    "CLIMB", "TO", "FLIGHT", "LEVEL", "TRANSMITIENDO", "CIEGAS", "DEBIDO",
    "FALLA", "RECEPTOR", "IDENT", "INFO", "REVISAR", "RESPUESTA", "MARCADA",
    "CIENTOS", "NUEVA", "AUTORIZACIÓN", "RECLEARED", "APROXIMACIÓN", "RADAR",
    "CONTROL", "TRÁNSITO", "SOCORRO", "TERMINADO", "TRAFFIC", "ENDED", "CHECK",
    "VERIFICACIÓN", "REPITO", "AFIRMO", "NEGATIVO", "SIETE", "CERO", "DOS", "UNO", "CORRECCIÓN",
    "ENAIRE", "SLOT", "ALT", "MIL", "II", "III", "IIIA", "IIIB", "TBATC", "WILCO", "DE",
  ]);
  const tokenRe = /(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9_])[A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑ0-9]*(?:[-/][A-ZÁÉÍÓÚÜÑ0-9]+)*(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9_])/g;
  const maskParentheticalContents = (text) => {
    const chars = [...text]; let depth = 0;
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === "(") { depth++; continue; }
      if (chars[i] === ")") { depth--; continue; }
      if (depth > 0) chars[i] = " ";
    }
    return chars.join("");
  };
  const readParenthetical = (text, index) => {
    let p = index; while (/\s/.test(text[p] || "")) p++;
    if (text[p] !== "(") return null;
    let depth = 0;
    for (let i = p; i < text.length; i++) {
      if (text[i] === "(") depth++;
      if (text[i] === ")" && --depth === 0) return text.slice(p + 1, i);
    }
    return null;
  };

  for (const question of questions) {
    const text = question.deepExp || "";
    for (const match of maskParentheticalContents(text).matchAll(tokenRe)) {
      const token = match[0];
      if (token.length < 2 || ignored.has(token) || token.split(/[/-]/).every((part) => part.length < 2 || ignored.has(part)) || /^[A-Z]{2}-[A-Z]{3}$/.test(token) || /^[A-Z]{3}\d/.test(token)) continue;
      const expansion = readParenthetical(text, match.index + token.length);
      assert.ok(expansion !== null, `${question.q}: ${token} lacks an inline parenthetical expansion`);
    }
  }

  for (const [token, expansion] of Object.entries(expected)) {
    const re = new RegExp(`(?<![A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9_])${token.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9_])`, "g");
    for (const question of questions) {
      const text = question.deepExp || "";
      for (const match of text.matchAll(re)) {
        if (text[match.index - 1] === "-") continue;
        const actual = readParenthetical(text, match.index + token.length);
        if (actual !== null) assert.equal(actual, expansion, `${question.q}: wrong expansion for ${token}`);
      }
    }
  }
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
