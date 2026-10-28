import {imageStructures,planes} from '../data/imaging.js';
import {imagingSVG} from './imaging-svg.js';
import {$,layout,infoPanel,showInfo,selectionButtons,bindSelection,highlight,viewerControls,bindViewer} from './ui.js';
const state={plane:'axial',level:1,selected:'thalamus'};
export function imagingView(){
 const plane=planes[state.plane],level=plane.levels[state.level],visible=level.structures.map(id=>imageStructures[id]);
 if(!level.structures.includes(state.selected))state.selected=level.structures[0];
 layout(`${viewerControls()}<div class="view-switch" aria-label="Plano anatômico">${Object.entries(planes).map(([id,p])=>`<button data-plane="${id}" aria-pressed="${id===state.plane}">${p.name}</button>`).join('')}<span class="illustration-badge">ILUSTRAÇÃO · NÃO É EXAME</span></div><div class="atlas-stage imaging-stage">${imagingSVG(state.plane,state.level)}</div><div class="slice-control"><button id="slice-prev" aria-label="Nível esquemático anterior" ${state.level===0?'disabled':''}>←</button><label for="slice-level"><span>${level.name}</span><input type="range" id="slice-level" min="0" max="2" step="1" value="${state.level}" aria-valuetext="${level.name}"></label><button id="slice-next" aria-label="Próximo nível esquemático" ${state.level===2?'disabled':''}>→</button><output>${state.level+1} / 3</output></div><div class="caption"><span>${plane.definition}</span></div>`,infoPanel({eyebrow:'LEITURA ANATÔMICA',list:selectionButtons(visible),note:`${plane.orientation} D/E: direita/esquerda; A/P: anterior/posterior; S/I: superior/inferior.`}),{title:'Explorador de neuroimagem',tag:'CORTES ESQUEMÁTICOS'});
 const select=id=>{if(!level.structures.includes(id))return;state.selected=id;showInfo({...imageStructures[id],location:level.name,fact:level.note});highlight($('#workspace'),id);};bindSelection($('#workspace'),select);select(state.selected);bindViewer();
 document.querySelectorAll('[data-plane]').forEach(b=>b.onclick=()=>{state.plane=b.dataset.plane;imagingView();});
 $('#slice-prev').onclick=()=>{state.level=Math.max(0,state.level-1);imagingView();};$('#slice-next').onclick=()=>{state.level=Math.min(2,state.level+1);imagingView();};
 $('#slice-level').oninput=e=>{state.level=Number(e.target.value);const focused=e.target.id;imagingView();$('#'+focused).focus();};
}
