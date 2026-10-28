import {imageStructures} from '../data/imaging.js';
function part(id,shape){return `<g data-id="${id}" aria-label="${imageStructures[id].name}" class="slice-region" fill="${imageStructures[id].color}">${shape}</g>`;}
const path=d=>`<path d="${d}"/>`;
const ellipse=(x,y,rx,ry)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`;
const folds=(axial=true)=>`<g class="slice-folds" fill="none" stroke="#0a1725" stroke-opacity=".6" stroke-width="3">${[0,1,2,3,4,5,6].map(i=>`<path d="M${265-i%2*15} ${104+i*34}q36-15 43 7t38 2 M${535+i%2*15} ${104+i*34}q-36-15-43 7t-38 2"/>`).join('')}</g>`;
export function imagingSVG(plane,level){
 let art='',labels=[];
 if(plane==='axial'){
  const outline=level===0?'M275 84Q328 50 361 104L400 135L439 104Q472 50 525 84Q576 149 551 218Q556 304 508 351Q460 389 400 370Q340 389 292 351Q244 304 249 218Q224 149 275 84Z':'M400 58C280 42 223 141 244 230C226 307 297 399 400 381C503 399 574 307 556 230C577 141 520 42 400 58Z';
  art=part('cortex',path(outline))+part('white',path('M391 91Q300 70 274 153Q261 189 282 228Q264 300 318 343Q355 368 389 349L389 253Q368 221 389 189Z')+path('M409 91Q500 70 526 153Q539 189 518 228Q536 300 482 343Q445 368 411 349L411 253Q432 221 411 189Z'))+folds();
  if(level===0){art+=part('cerebellum',ellipse(348,303,49,52)+ellipse(452,303,49,52))+part('brainstem',ellipse(400,242,26,34));labels=[['Cerebelo',442,360],['Tronco',399,242],['Córtex',271,149]];}
  if(level===1){art+=part('ventricles',path('M386 149Q359 134 350 169Q345 194 372 215L380 251L393 244L384 203L391 177Z')+path('M414 149Q441 134 450 169Q455 194 428 215L420 251L407 244L416 203L409 177Z')+path('M396 214h8v53h-8Z'))+part('thalamus',ellipse(371,244,21,31)+ellipse(429,244,21,31));labels=[['Tálamo',449,265],['Ventrículos',445,151],['Substância branca',272,320]];}
  if(level===2){labels=[['Córtex',255,147],['Substância branca',316,240]];}
  art+='<path d="M400 65V375" stroke="#08111d" stroke-width="4" fill="none" pointer-events="none"/>';
 }
 if(plane==='coronal'){
  art=part('cortex',path('M398 69Q330 38 273 95Q232 125 245 187Q220 230 252 272Q241 324 289 347Q337 370 371 330L398 296L402 296L429 330Q463 370 511 347Q559 324 548 272Q580 230 555 187Q568 125 527 95Q470 38 402 69Z'))+part('white',path('M387 99Q324 75 288 127Q267 160 284 194Q256 231 281 269Q271 304 301 319Q336 331 356 294L388 258Z')+path('M413 99Q476 75 512 127Q533 160 516 194Q544 231 519 269Q529 304 499 319Q464 331 444 294L412 258Z'))+folds(false);
  art+=part('ventricles',level===0?path('M384 173Q350 151 341 182L365 211L386 205Z')+path('M416 173Q450 151 459 182L435 211L414 205Z'):path('M382 169L362 183L365 224L385 211Z')+path('M418 169L438 183L435 224L415 211Z'));
  if(level===1){art+=part('thalamus',ellipse(379,238,18,24)+ellipse(421,238,18,24))+part('hippocampus',path('M288 286Q317 272 341 287L333 305Q307 295 293 310Z')+path('M512 286Q483 272 459 287L467 305Q493 295 507 310Z'));labels=[['Tálamo',442,244],['Hipocampo',467,326],['Ventrículos',454,184]];}
  else if(level===2){art+=part('cerebellum',path('M300 337Q347 303 397 332L403 332Q453 303 500 337Q515 386 456 398Q422 402 400 383Q378 402 344 398Q285 386 300 337Z'));labels=[['Cerebelo',414,374],['Ventrículos',455,185]];}
  else labels=[['Córtex frontal',275,95],['Ventrículos',444,191]];
  art+='<path d="M400 65V275" stroke="#08111d" stroke-width="4" fill="none" pointer-events="none"/>';
 }
 if(plane==='sagittal'){
  art=part('cortex',path('M174 243Q143 198 181 160Q180 119 231 107Q252 64 308 72Q365 39 420 69Q476 51 516 91Q571 94 589 144Q633 171 606 220Q625 256 581 278Q565 310 524 302Q485 326 443 296Q401 310 371 287Q324 321 281 286Q231 302 214 272Q184 274 174 243Z'))+part('white',path('M201 226Q177 195 211 164Q209 137 251 135Q270 100 316 102Q365 72 415 99Q472 79 499 121Q547 117 560 156Q589 178 573 211Q592 241 558 254Q540 280 510 270Q473 296 444 265Q399 281 370 257Q328 292 292 258Q249 276 233 246Q212 249 201 226Z'))+`<g transform="translate(-30 12) scale(1 .8)">${folds()}</g>`;
  if(level===0){art+=part('callosum',path('M263 211Q252 151 336 133Q424 110 487 160Q516 184 501 213L479 208Q490 184 462 172Q391 140 320 166Q284 175 289 210Z'))+part('ventricles',path('M299 200Q315 170 354 173Q409 155 458 184L468 207Q419 188 374 199L365 241L349 240L350 209Z')+path('M473 295l15 28-25 2Z'))+part('brainstem',path('M405 253Q431 237 447 259L450 286Q478 306 455 324L460 364L437 373L425 328Q403 316 412 292Z'))+part('cerebellum',path('M490 282Q539 261 580 293Q610 323 578 351Q548 375 502 349L471 324Z'));labels=[['Corpo caloso',328,143],['Ventrículos',319,204],['Cerebelo',521,323],['Tronco',381,346]];}
  if(level===1){art+=part('ventricles',path('M330 182Q392 148 463 183L477 216Q438 195 382 210L375 234L355 225Z'))+part('hippocampus',path('M318 256Q348 232 382 249Q441 277 482 247L495 260Q453 305 394 278Q352 260 333 274Z'));labels=[['Hipocampo',354,297],['Ventrículo lateral',351,174]];}
  if(level===2)labels=[['Córtex',210,141],['Substância branca',315,216]];
 }
 const dirs=plane==='sagittal'?['A','P']:['D','E'];
 return `<svg viewBox="0 0 800 440" class="slice-svg" role="group" aria-label="Corte ${plane}, nível esquemático ${level+1}; ilustração, não exame real"><title>Corte anatômico esquemático, sem equivalência a uma imagem clínica</title><g id="drawing">${art}<g class="diagram-labels">${labels.map(([name,x,y])=>`<text x="${x}" y="${y}">${name}</text>`).join('')}</g></g><g class="direction-labels"><text x="180" y="225">${dirs[0]}</text><text x="620" y="225">${dirs[1]}</text><text x="400" y="31" text-anchor="middle">${plane==='axial'?'A':'S'}</text><text x="400" y="425" text-anchor="middle">${plane==='axial'?'P':'I'}</text></g></svg>`;
}
