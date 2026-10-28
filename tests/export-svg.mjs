// Exporta as variantes para inspeção XML, sem navegador e sem dependências.
import {brainSVG} from '../js/brain-svg.js';
import {bodySVG} from '../js/body-svg.js';
import {sensesSVG} from '../js/senses-svg.js';
import {imagingSVG} from '../js/imaging-svg.js';
import {brainViews} from '../data/brain.js';
import {senses} from '../data/senses.js';
import {planes} from '../data/imaging.js';
const drawings=[];
for(const key of Object.keys(brainViews))drawings.push({name:`brain-${key}`,svg:brainSVG(key)});
for(const key of ['all','central','peripheral'])drawings.push({name:`body-${key}`,svg:bodySVG(key)});
for(const [key,sense] of Object.entries(senses))for(let step=0;step<5;step++)drawings.push({name:`sense-${key}-${step}`,svg:sensesSVG(key,sense,step)});
for(const key of Object.keys(planes))for(let level=0;level<3;level++)drawings.push({name:`slice-${key}-${level}`,svg:imagingSVG(key,level)});
console.log(JSON.stringify(drawings));
