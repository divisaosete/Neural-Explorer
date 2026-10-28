import {nervousRegions} from '../data/nervous.js';
import {bodySVG} from './body-svg.js';
import {$,layout,infoPanel,showInfo,selectionButtons,bindSelection,highlight,viewerControls,bindViewer} from './ui.js';
const state={mode:'all',selected:'cns'};
export function nervousView(){
 const visible=nervousRegions.filter(r=>state.mode==='all'||r.system===state.mode);
 if(!visible.some(r=>r.id===state.selected))state.selected=visible[0].id;
 layout(`${viewerControls()}<div class="view-switch" aria-label="Divisão do sistema nervoso">${[['all','Visão geral'],['central','Sistema central'],['peripheral','Sistema periférico']].map(([id,name])=>`<button data-mode="${id}" aria-pressed="${state.mode===id}">${name}</button>`).join('')}</div><div class="atlas-stage body-stage">${bodySVG(state.mode)}</div><div class="caption"><span><i class="legend-dot cyan"></i> Central <i class="legend-dot gold"></i> Periférico</span><span>Distribuição representativa, não um mapa completo.</span></div>`,infoPanel({list:selectionButtons(visible),note:'Não estão representados todos os nervos, gânglios, raízes ou plexos. Divisões simpática, parassimpática e entérica não são mapeadas aqui.'}),{title:'Sistema nervoso humano'});
 const select=id=>{const item=visible.find(r=>r.id===id);if(!item)return;state.selected=id;showInfo(item);highlight($('#workspace'),id);document.querySelectorAll('[data-system]').forEach(g=>g.classList.toggle('whole-selected',(id==='cns'&&g.dataset.system==='central')||(id==='pns'&&g.dataset.system==='peripheral')));};
 if(state.mode!=='all')$('#workspace').querySelectorAll('.system-muted [data-id]').forEach(el=>{el.removeAttribute('data-id');el.setAttribute('aria-hidden','true');});
 bindSelection($('#workspace'),select);select(state.selected);bindViewer();
 document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{state.mode=b.dataset.mode;nervousView();});
}
