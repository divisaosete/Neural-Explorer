import {senses,touchRoutes} from '../data/senses.js';
import {sensesSVG} from './senses-svg.js';
import {$,layout,infoPanel,showInfo,bindSelection,highlight} from './ui.js';
const state={sense:'vision',step:0,region:'hand'};
export function sensesView(){
 const sense=senses[state.sense];
 layout(`<div class="sense-switch" aria-label="Sentido">${Object.entries(senses).map(([id,s])=>`<button data-sense="${id}" aria-pressed="${id===state.sense}"><span>${s.icon}</span>${s.name}</button>`).join('')}</div><div class="toolbar"><span class="stimulus-label">ESTÍMULO <b>${sense.stimulus}</b></span><span class="spacer"></span><label><input type="checkbox" id="sense-labels" checked> Rótulos</label></div>${state.sense==='touch'?`<div class="view-switch" aria-label="Região estimulada">${Object.entries(touchRoutes).map(([id,r])=>`<button data-touch="${id}" aria-pressed="${id===state.region}">${r.name}</button>`).join('')}</div>`:''}<div class="atlas-stage" id="sense-art"></div><div class="path-controls"><button id="previous-step">← Anterior</button><output id="step-counter" aria-live="polite"></output><button class="primary" id="next-step">Acompanhar sinal →</button><button id="restart-path">Recomeçar</button></div><div class="caption"><span>Via educativa simplificada · sem escala temporal</span><span>Clique nos pontos numerados para explorar.</span></div>`,infoPanel({eyebrow:'DO ESTÍMULO À PERCEPÇÃO',list:sense.steps.map((s,i)=>`<button data-id="${i}"><span class="step-chip">${i+1}</span>${s.name}</button>`).join(''),note:sense.note}),{title:'Laboratório dos sentidos'});
 const update=()=>{
  const steps=sense.steps.map(s=>({...s}));
  if(state.sense==='touch'){const route=touchRoutes[state.region];steps[1].name=route.peripheral;steps[2].name=route.central;steps[2].description=route.description;}
  $('#sense-art').innerHTML=sensesSVG(state.sense,{...sense,steps},state.step,state.region);
  showInfo({...steps[state.step],location:`${sense.receptor} · etapa ${state.step+1} de ${steps.length}`,relation:state.step===steps.length-1?'Percepção combina processamento sensorial, contexto e experiência. Não depende de um único ponto cerebral.':`Próxima estação: ${steps[state.step+1].name}.`});
  $('#step-counter').textContent=`${state.step+1} / ${steps.length}`;$('#previous-step').disabled=state.step===0;$('#next-step').disabled=state.step===steps.length-1;
  $('#sense-art').classList.toggle('labels-off',!$('#sense-labels').checked);
  bindSelection($('#workspace'),id=>{const fromDiagram=document.activeElement?.closest('#sense-art');state.step=Number(id);update();if(fromDiagram)$(`#sense-art [data-id="${id}"]`)?.focus();});highlight($('#workspace'),String(state.step));
 };
 $('#next-step').onclick=()=>{state.step=Math.min(sense.steps.length-1,state.step+1);update();};$('#previous-step').onclick=()=>{state.step=Math.max(0,state.step-1);update();};$('#restart-path').onclick=()=>{state.step=0;update();};$('#sense-labels').onchange=update;
 document.querySelectorAll('[data-sense]').forEach(b=>b.onclick=()=>{state.sense=b.dataset.sense;state.step=0;sensesView();});document.querySelectorAll('[data-touch]').forEach(b=>b.onclick=()=>{state.region=b.dataset.touch;state.step=0;sensesView();});update();
}
