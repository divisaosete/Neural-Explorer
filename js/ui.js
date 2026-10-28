export const $ = (selector, scope = document) => scope.querySelector(selector);
export function layout(body, side, {title='Explorador de neurônios',tag='ATLAS INTERATIVO'}={}) {
 $('#workspace').innerHTML=`<div class="lab-grid"><section class="panel visualization"><div class="panel-head"><div><span class="small-label">SELECIONE PARA DESCOBRIR</span><h2>${title}</h2></div><span class="tag">${tag}</span></div>${body}</section><aside class="panel sidebar">${side}</aside></div>`;
}
export function infoPanel({eyebrow='ESTRUTURA SELECIONADA',list='',note='' }={}) {
 return `<span class="small-label">${eyebrow}</span><div id="info" aria-live="polite" aria-atomic="true"></div><div class="structure-list">${list}</div><p class="side-note">${note}</p>`;
}
export function showInfo(item) {
 $('#info').innerHTML=`<h3>${item.name}</h3>${item.location?`<p class="location">↳ ${item.location}</p>`:''}<p>${item.description}</p>${item.relation?`<div class="info-block"><span class="small-label">EM CONEXÃO</span><p>${item.relation}</p></div>`:''}${item.fact?`<div class="fact"><span>VOCÊ SABIA?</span><p>${item.fact}</p></div>`:''}`;
}
// SVGs and the equivalent HTML list share the same selection and keyboard action.
export function bindSelection(scope, onSelect) {
 scope.querySelectorAll('[data-id]').forEach(el=>{
  if(el.tagName.toLowerCase()!=='button') {el.setAttribute('role','button');el.setAttribute('tabindex','0');el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onSelect(el.dataset.id);}};}
  el.onclick=()=>onSelect(el.dataset.id);
 });
}
export function highlight(scope,id) {scope.querySelectorAll('[data-id]').forEach(el=>{const active=el.dataset.id===id;el.classList.toggle('selected',active);el.setAttribute('aria-pressed',String(active));});}
export const selectionButtons = (items) => items.map(item=>`<button data-id="${item.id}"><i style="--swatch:${item.color||'#64d8e7'}"></i>${item.name}</button>`).join('');
export function viewerControls(extra='') {return `<div class="toolbar"><div class="zoom-group"><button id="zoom-out" aria-label="Reduzir ampliação">−</button><output id="zoom-value" aria-live="polite">100%</output><button id="zoom-in" aria-label="Ampliar">+</button><button id="zoom-reset">Restaurar</button></div><span class="spacer"></span>${extra}<label><input type="checkbox" id="show-labels" checked> Rótulos</label></div>`;}
export function bindViewer({target='#drawing',labels='.diagram-labels'}={}) {let zoom=1;const apply=()=>{const el=$(target);if(el){el.style.transform=`scale(${zoom})`;el.style.transformOrigin='center';}$('#zoom-value').textContent=`${Math.round(zoom*100)}%`;};$('#zoom-in').onclick=()=>{zoom=Math.min(1.6,zoom+.2);apply();};$('#zoom-out').onclick=()=>{zoom=Math.max(.6,zoom-.2);apply();};$('#zoom-reset').onclick=()=>{zoom=1;apply();};$('#show-labels').onchange=e=>document.querySelectorAll(labels).forEach(el=>el.classList.toggle('labels-hidden',!e.target.checked));}
