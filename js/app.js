const BANKS = {
  leg: window.LEG_QUESTIONS || [],
  atm: window.ATM_QUESTIONS || [],
  fernando: window.FERNANDO_QUESTIONS || [],
  nav: window.NAVIGATION_QUESTIONS || []
};

// Los «cuadros azules de Fernando» también forman parte del banco general de ATM.
BANKS.atm = BANKS.atm.concat(BANKS.fernando);

const EXAM_SIZE={leg:25,atm:40,nav:40};
const LABEL={leg:"Legislación",atm:"ATM",fernando:"ATM · Cuadros azules de Fernando",nav:"Navegación"};
const letters=["A","B","C","D"];
const SESSION_STORAGE_KEY="atco-exam-trainer.session.v1";
const VALID_KINDS=new Set(Object.keys(BANKS));
const VALID_MODES=new Set(["practice","exam"]);
let state=null,tick=null,confirmAction=null;

function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}
function normQ(s){return (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")}

function updateSaveStatus(text){
  const el=document.getElementById("saveStatus");
  if(el)el.textContent=text;
}
function clearSavedSession(){
  try{localStorage.removeItem(SESSION_STORAGE_KEY)}catch(e){}
}
function saveSession(){
  if(!state)return;
  try{
    localStorage.setItem(SESSION_STORAGE_KEY,JSON.stringify({...state,savedAt:Date.now()}));
    updateSaveStatus("Guardado localmente");
  }catch(e){
    updateSaveStatus("No se pudo guardar localmente");
  }
}
function validSavedSession(candidate){
  if(!candidate||!VALID_KINDS.has(candidate.kind)||!VALID_MODES.has(candidate.mode))return false;
  if(!Array.isArray(candidate.questions)||candidate.questions.length===0)return false;
  if(!Array.isArray(candidate.answers)||candidate.answers.length!==candidate.questions.length)return false;
  if(!Array.isArray(candidate.locked)||candidate.locked.length!==candidate.questions.length)return false;
  if(!Number.isFinite(candidate.start)||typeof candidate.finished!=="boolean")return false;
  if(candidate.current<0||candidate.current>=candidate.questions.length)return false;
  if(candidate.finished&&!Number.isFinite(candidate.durationSec))return false;
  return candidate.questions.every(q=>q&&typeof q.q==="string"&&Array.isArray(q.opts)&&q.opts.length===4&&Number.isInteger(q.a)&&q.a>=0&&q.a<4&&Array.isArray(q.optionExp)&&q.optionExp.length===4)
    &&candidate.answers.every(a=>a===null||(Number.isInteger(a)&&a>=0&&a<4))
    &&candidate.locked.every(v=>typeof v==="boolean");
}
function hydrateSavedSession(saved){
  if(saved.kind!=="nav")return saved;
  const currentByQuestion=new Map(BANKS.nav.map(question=>[normQ(question.q),question]));
  return {...saved,questions:saved.questions.map(question=>{
    if(question.topicExp)return question;
    const current=currentByQuestion.get(normQ(question.q));
    return current?{...question,topic:current.topic,topicExp:current.topicExp}:question;
  })};
}
function restoreSession(){
  let saved=null;
  try{saved=JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY)||"null")}catch(e){clearSavedSession();return}
  if(!validSavedSession(saved)){if(saved)clearSavedSession();return}
  state=hydrateSavedSession(saved);
  document.body.classList.add("exam-active");
  document.getElementById("home").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  if(state.finished){renderResults();}
  else{
    document.getElementById("exam").classList.remove("hidden");
    clearInterval(tick);tick=setInterval(updateClock,1000);updateClock();render();
  }
  updateSaveStatus("Sesión restaurada");
}

function getPool(kind,mode){
  let pool=BANKS[kind].map((q,idx)=>({...q,origin:idx}));
  if(mode==="exam"){
    const seen=new Set();
    pool=pool.filter(q=>{const k=normQ(q.q);if(seen.has(k))return false;seen.add(k);return true});
    shuffle(pool);pool=pool.slice(0,EXAM_SIZE[kind]);
  }else shuffle(pool);
  return pool.map(q=>{
    const mapped=q.opts.map((text,i)=>({text,correct:i===q.a,note:q.optionExp[i]}));
    if(!q.preserveOptions)shuffle(mapped);
    return {...q,opts:mapped.map(x=>x.text),a:mapped.findIndex(x=>x.correct),optionExp:mapped.map(x=>x.note)};
  });
}

function showHome(){
  closeConfirm();
  clearSavedSession();
  clearInterval(tick);state=null;
  document.body.classList.remove("exam-active");
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("exam").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}

function startSession(kind,mode){
  document.body.classList.add("exam-active");
  clearInterval(tick);
  const questions=getPool(kind,mode);
  state={kind,mode,questions,answers:Array(questions.length).fill(null),locked:Array(questions.length).fill(false),current:0,start:Date.now(),finished:false};
  document.getElementById("home").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("exam").classList.remove("hidden");
  saveSession();
  tick=setInterval(updateClock,1000);updateClock();render();
  window.scrollTo({top:0});
}

function updateClock(){
 if(!state)return;
 const sec=Math.floor((Date.now()-state.start)/1000);
 const el=document.getElementById("clock");if(el)el.textContent=`${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`;
}
function escapeHtml(s){return String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}

function answer(i){
 if(!state||state.finished)return;
 if(state.mode==="practice" && state.locked[state.current])return;
 state.answers[state.current]=i;
 if(state.mode==="practice")state.locked[state.current]=true;
 if(state.mode==="exam"&&state.current<state.questions.length-1)state.current++;
 saveSession();
 render();
 if(state.mode==="exam")window.scrollTo({top:0,behavior:"smooth"});
}
function move(d){state.current=Math.max(0,Math.min(state.questions.length-1,state.current+d));saveSession();render();window.scrollTo({top:0,behavior:"smooth"})}
function gotoQ(i){state.current=i;saveSession();render();window.scrollTo({top:0,behavior:"smooth"})}

function sourceText(q){
  return q.sourceRef || `Fuente de estudio: ${q.manualName} · pág. ${q.manualPage}`;
}
function topicContextHtml(q){
  if(!q.topicExp)return "";
  return `<section class="topic-context">
    <div class="topic-context-title">Contexto general del tema</div>
    <div class="topic-context-name">${escapeHtml(q.topic||"Navegación")}</div>
    <div class="topic-context-body">${escapeHtml(q.topicExp)}</div>
  </section>`;
}

function feedbackHtml(q,ans){
 const ok=ans===q.a;
 if(ans===null)return "";
 const all=q.opts.map((o,j)=>`<div class="why-item ${j===q.a?"good":"bad"}"><strong>${letters[j]}. ${escapeHtml(o)}</strong><br>${escapeHtml(q.optionExp[j].replace(/^CORRECTA —\s*|^NO —\s*/,""))}</div>`).join("");
 return `<div class="feedback ${ok?"ok":"ko"}">
   <h4>${ok?"✓ Correcto":"✕ Incorrecto"}</h4>
   ${ok?"":`<p><strong>Respuesta correcta:</strong> ${letters[q.a]}. ${escapeHtml(q.opts[q.a])}</p>`}
   <div class="teach-title">Por qué la correcta es correcta</div>
   <div class="teach-body">${escapeHtml(q.deepExp)}</div>
   ${topicContextHtml(q)}
   <div class="teach-title">Por qué no son las otras</div>
   <div class="why-list">${all}</div>
   ${q.extra?`<div class="extra-box"><strong>Dato relacionado / clave de examen:</strong> ${escapeHtml(q.extra)}</div>`:""}
   <div class="source-ref">${escapeHtml(sourceText(q))}</div>
 </div>`;
}

function render(){
 if(!state)return;
 const q=state.questions[state.current],n=state.questions.length,ans=state.answers[state.current],locked=state.locked[state.current];
 document.getElementById("subject").textContent=LABEL[state.kind];
 document.getElementById("mode").textContent=state.kind==="fernando"?"Solo Fernando · feedback inmediato":(state.mode==="practice"?"Práctica con feedback":"Examen sin feedback");
 document.getElementById("qcount").textContent=`Pregunta ${state.current+1} de ${n}`;
 document.getElementById("qtitle").textContent=q.q;
 const box=document.getElementById("options");box.innerHTML="";
 q.opts.forEach((opt,i)=>{
   const b=document.createElement("button");b.type="button";b.className="option";
   if(ans===i)b.classList.add("selected");
   if(state.mode==="practice"&&locked){
     b.disabled=true;if(i===q.a)b.classList.add("correct");if(i===ans&&ans!==q.a)b.classList.add("wrong");
   }
   b.innerHTML=`<span class="letter">${letters[i]}</span><span>${escapeHtml(opt)}</span>`;
   b.onclick=event=>{event.preventDefault();event.stopPropagation();answer(i)};box.appendChild(b);
 });
 document.getElementById("practiceFeedback").innerHTML=(state.mode==="practice"&&locked)?feedbackHtml(q,ans):"";
 const previousButtons=[document.getElementById("prev"),document.getElementById("prevTop")];
 const nextButtons=[document.getElementById("next"),document.getElementById("nextTop")];
 const isLast=state.current===n-1;
 previousButtons.forEach(button=>{
   button.disabled=state.current===0;
   button.onclick=()=>move(-1);
 });
 nextButtons.forEach(button=>{
   button.textContent=isLast?"Entregar":"Siguiente";
   button.onclick=()=>isLast?requestFinish():move(1);
 });
 renderSide();
}

function renderSide(){
 const answered=state.answers.filter(x=>x!==null).length;
 const isPractice=state.mode==="practice";
 const correct=isPractice?state.questions.reduce((total,q,i)=>total+(state.answers[i]!==null&&state.answers[i]===q.a?1:0),0):0;
 const incorrect=isPractice?answered-correct:0;
 document.getElementById("answered").textContent=`${answered}/${state.questions.length}`;
 document.getElementById("totalQuestions").textContent=isPractice?state.questions.length:"";
 document.getElementById("correctAnswers").textContent=isPractice?correct:"";
 document.getElementById("incorrectAnswers").textContent=isPractice?incorrect:"";
 document.getElementById("liveStats").classList.toggle("hidden",!isPractice);
 document.getElementById("bankSize").textContent=BANKS[state.kind].length;
 const g=document.getElementById("grid");g.innerHTML="";
 state.questions.forEach((q,i)=>{
   const b=document.createElement("button");b.className="qdot";b.textContent=i+1;
   if(state.answers[i]!==null)b.classList.add("answered");
   if(i===state.current)b.classList.add("current");
   if(state.mode==="practice"&&state.locked[i])b.classList.add(state.answers[i]===q.a?"good":"bad");
   b.onclick=()=>gotoQ(i);g.appendChild(b);
 });
}

function requestFinish(){
 const pending=state.answers.filter(x=>x===null).length;
 const answered=state.questions.length-pending;
 const modeName=state.mode==="practice"?"la práctica":"el examen";
 openConfirm("Entregar "+modeName, pending?
 `Has respondido ${answered} de ${state.questions.length}. Las ${pending} preguntas en blanco contarán como incorrectas. Puedes entregar ahora.`:
 `Has respondido todas las preguntas. ¿Quieres entregar ahora?`,
 "Entregar ahora",finishSession,false);
}
function requestRestart(){
 openConfirm("Reiniciar intento","Se borrarán las respuestas de este intento y se generará un nuevo orden aleatorio.","Reiniciar",()=>startSession(state.kind,state.mode),true);
}
function requestExit(){
 openConfirm("Salir al menú","Se perderán las respuestas del intento actual.","Salir",showHome,true);
}

function finishSession(){
 closeConfirm();if(!state||state.finished)return;
 state.finished=true;state.finishedAt=Date.now();
 state.durationSec=Math.floor((state.finishedAt-state.start)/1000);
 clearInterval(tick);saveSession();renderResults();
}
function renderResults(){
 if(!state||!state.finished)return;
 document.body.classList.remove("exam-active");
 const sec=state.durationSec;
 let correct=0;state.questions.forEach((q,i)=>{if(state.answers[i]===q.a)correct++});
 const pct=Math.round(correct/state.questions.length*100),deg=Math.round(pct*3.6),pass=pct>=75;
 const reviews=state.questions.map((q,i)=>{
   const ans=state.answers[i],ok=ans===q.a;
   const opts=q.opts.map((o,j)=>`<div class="option-note ${j===q.a?"iscorrect":""}"><strong>${letters[j]}. ${escapeHtml(o)}</strong><br>${escapeHtml(q.optionExp[j].replace(/^CORRECTA —\s*|^NO —\s*/,""))}</div>`).join("");
   return `<article class="review ${ok?"ok":"ko"}">
    <h4>${i+1}. ${escapeHtml(q.q)}</h4>
    <p class="${ok?"correctText":"yourText"}"><strong>Tu respuesta:</strong> ${ans===null?"Sin responder":letters[ans]+". "+escapeHtml(q.opts[ans])}</p>
    ${ok?"":`<p class="correctText"><strong>Correcta:</strong> ${letters[q.a]}. ${escapeHtml(q.opts[q.a])}</p>`}
    <div class="teach-title">Por qué la correcta es correcta</div><div class="teach-body">${escapeHtml(q.deepExp)}</div>
    ${topicContextHtml(q)}
    <div class="teach-title">Análisis de las cuatro opciones</div><div class="option-review">${opts}</div>
    ${q.extra?`<div class="extra-box"><strong>Dato relacionado / clave de examen:</strong> ${escapeHtml(q.extra)}</div>`:""}
    <p class="source" style="color:var(--muted);font-size:12px">${escapeHtml(sourceText(q))}</p>
    <span class="topic">${escapeHtml(q.topic||"")}${q.sourceTag?" · "+escapeHtml(q.sourceTag):""}</span>
   </article>`;
 }).join("");
 document.getElementById("exam").classList.add("hidden");
 const r=document.getElementById("results");r.classList.remove("hidden");
 r.innerHTML=`<div class="result">
  <div class="eyebrow">Resultado · ${LABEL[state.kind]} · ${state.mode==="practice"?"Práctica":"Examen"}</div>
  <h2 style="font-size:36px;margin:7px 0">${state.mode==="practice"?"Práctica entregada":"Examen entregado"}</h2>
  <div class="score"><div class="score-ring" style="--deg:${deg}deg"><strong>${pct}%</strong></div>
   <div><div style="font-size:28px;font-weight:900">${correct}/${state.questions.length}</div>
   <div class="${pass?"pass":"fail"}">${pass?"APTO (≥75%)":"NO APTO (<75%)"}</div>
   <div style="color:var(--muted)">${state.questions.length-correct} incorrectas o en blanco · ${Math.floor(sec/60)} min ${sec%60} s</div></div></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="startSession('${state.kind}','${state.mode}')">Nuevo intento</button><button class="btn secondary" onclick="showHome()">Menú</button></div>
  <h3 style="margin-top:28px">Revisión completa</h3>
  <p style="color:var(--muted)">Se muestran todas las preguntas, tu respuesta, la correcta y la explicación de cada alternativa.</p>
  <div class="review-list">${reviews}</div></div>`;
 window.scrollTo({top:0,behavior:"smooth"});
}

function openConfirm(title,text,actionLabel,action,danger){
 confirmAction=action;
 document.getElementById("confirmTitle").textContent=title;
 document.getElementById("confirmText").textContent=text;
 const b=document.getElementById("confirmDo");b.textContent=actionLabel;b.className="btn "+(danger?"danger":"");
 document.getElementById("confirm").classList.remove("hidden");
}
function closeConfirm(){confirmAction=null;document.getElementById("confirm").classList.add("hidden")}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!document.getElementById("confirm").classList.contains("hidden"))closeConfirm()});
window.addEventListener("pagehide",saveSession);
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")saveSession()});
restoreSession();
