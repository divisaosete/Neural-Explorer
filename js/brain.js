import {brainRegions,brainViews} from '../data/brain.js';
import {brainSVG} from './brain-svg.js';
import {$,layout,infoPanel,showInfo,selectionButtons,bindSelection,highlight,viewerControls,bindViewer} from './ui.js';
const state={view:'lateral',selected:'frontal'};
export function brainView(){
 const visible=brainRegions.filter(r=>r.views.includes(state.view));
 if(!visible.some(r=>r.id===state.selected))state.selected=visible[0].id;
 layout(`${viewerControls()}<div class="view-switch" aria-label="Vista anatômica">${Object.entries(brainViews).map(([id,name])=>`<button data-view="${id}" aria-pressed="${state.view===id}">${name}</button>`).join('')}</div><div class="atlas-stage">${brainSVG(state.view)}</div><div class="caption"><span id="brain-position">${brainViews[state.view]}</span><span>Clique em uma região ou use a lista ao lado.</span></div>`,infoPanel({list:selectionButtons(visible),note:'As funções dependem de redes distribuídas. Estruturas profundas aparecem apenas nos cortes e no detalhe apropriado.'}),{title:'Atlas interativo do cérebro'});
 const select=id=>{const item=visible.find(r=>r.id===id);if(!item)return;state.selected=id;showInfo(item);highlight($('#workspace'),id);};
 $('#workspace').querySelectorAll('svg [data-id]').forEach(el=>el.setAttribute('aria-label',visible.find(r=>r.id===el.dataset.id)?.name||el.dataset.id));
 bindSelection($('#workspace'),select);select(state.selected);bindViewer();
 document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{state.view=b.dataset.view;brainView();});
}
