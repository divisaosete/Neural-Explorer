import {anatomyView} from './neuron.js';
import {brainView} from './brain.js';
import {nervousView} from './nervous.js';
import {sensesView} from './senses.js';
import {imagingView} from './imaging.js';
const modules={
 neurons:{render:anatomyView,title:'A unidade da comunicação',description:'Explore as oito estruturas de um neurônio multipolar. Selecione uma região no desenho ou na lista para conhecer sua função.',number:'01',question:'Como a forma de um neurônio se relaciona com sua função?',hint:'Explore dendritos, soma e axônio. A informação é recebida, integrada e transmitida por estruturas especializadas.'},
 brain:{render:brainView,title:'Um cérebro. Muitas conexões.',description:'Da superfície aos circuitos profundos, descubra a anatomia que sustenta percepção, movimento, memória e comportamento.',number:'02',question:'Onde estão as estruturas que não vemos na superfície?',hint:'Alterne para o corte medial e para o detalhe temporal. Estruturas profundas precisam de uma vista apropriada.'},
 nervous:{render:nervousView,title:'Um corpo inteiro em conexão',description:'Explore a continuidade entre encéfalo, medula e nervos. Descubra como os sistemas central e periférico trabalham juntos.',number:'03',question:'Qual é a diferença entre medula e nervos espinhais?',hint:'Selecione cada estrutura. A medula pertence ao sistema central; raízes e nervos conectam esse sistema ao corpo.'},
 senses:{render:sensesView,title:'Do mundo à percepção',description:'Acompanhe cinco caminhos sensoriais e descubra como luz, vibrações, contato e moléculas se tornam sinais nervosos.',number:'04',question:'Todos os sentidos seguem o mesmo caminho?',hint:'Compare visão e olfato. Observe a presença do tálamo na via visual e a organização distinta da via olfatória inicial.'},
 imaging:{render:imagingView,title:'Novos planos para olhar o cérebro',description:'Aprenda a se orientar nos planos axial, coronal e sagital com cortes anatômicos ilustrativos, selecionáveis e comentados.',number:'05',question:'Por que uma estrutura muda de forma entre cortes?',hint:'Alterne o plano e percorra os três níveis esquemáticos. A aparência depende de onde e como o plano atravessa a estrutura.'}
};
let active='neurons';
function navigate(id,{focus=false}={}){
 if(!modules[id])id='neurons';active=id;const current=modules[id];
 document.querySelectorAll('[data-module]').forEach(button=>{const selected=button.dataset.module===id;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));if(selected)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
 document.querySelector('#module-title').textContent=current.title;document.querySelector('#module-description').textContent=current.description;document.querySelector('#module-number').textContent=current.number;
 document.querySelector('#question').textContent=current.question;document.querySelector('#challenge').textContent=current.hint;
 current.render();document.querySelector('#progress-label').textContent=`Módulo ${current.number} de 05`;document.title=`${document.querySelector(`[data-module="${id}"] .nav-name`).textContent} · Neural Explorer 2.0`;
 history.replaceState(null,'',`#${id}`);if(focus)document.querySelector('#workspace').focus({preventScroll:true});
}
document.querySelectorAll('[data-module]').forEach(button=>button.onclick=()=>navigate(button.dataset.module));
document.querySelector('#next-module').onclick=()=>{const keys=Object.keys(modules);navigate(keys[(keys.indexOf(active)+1)%keys.length],{focus:true});};
window.addEventListener('hashchange',()=>navigate(location.hash.slice(1)));
navigate(location.hash.slice(1)||'neurons');
