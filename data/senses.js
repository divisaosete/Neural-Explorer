const stage=(name,description,short)=>({name,description,short:short||name});
export const senses={
 vision:{name:'Visão',icon:'◉',stimulus:'Luz',receptor:'Bastonetes e cones da retina',note:'O quiasma cruza fibras das hemirretinas nasais, não todo o nervo. Cada hemisfério recebe sobretudo o hemicampo visual oposto. Outras projeções visuais foram omitidas.',steps:[
  stage('Retina','A luz altera pigmentos dos fotorreceptores e provoca hiperpolarização. Circuitos retinianos modulam células ganglionares, cujos axônios geram potenciais de ação.','Retina'),
  stage('Nervo óptico','Axônios das células ganglionares deixam cada olho pelo nervo óptico (II).','Nervo óptico'),
  stage('Quiasma e trato óptico','Parte das fibras cruza a linha mediana no quiasma. O trato óptico conduz informação de um hemicampo visual.','Quiasma'),
  stage('Corpo geniculado lateral','Núcleo talâmico que recebe a principal via da retina para o córtex visual e participa de sua modulação.','Tálamo'),
  stage('Córtex visual e redes associadas','As radiações ópticas chegam ao córtex occipital. Redes temporais e parietais participam do reconhecimento e da orientação de ações.','Córtex visual')
 ]},
 hearing:{name:'Audição',icon:'∿',stimulus:'Vibração sonora',receptor:'Células ciliadas da cóclea',note:'A via possui múltiplas estações e conexões dos dois lados. Este esquema resume a via ascendente; não mostra todos os cruzamentos ou núcleos.',steps:[
  stage('Cóclea','Vibrações transmitidas pelo ouvido médio movimentam líquidos e a membrana basilar. A deflexão dos estereocílios das células ciliadas abre canais mecanossensíveis.','Cóclea'),
  stage('Nervo coclear (VIII)','Células ciliadas liberam neurotransmissores para neurônios do gânglio espiral, cujos axônios compõem o ramo coclear do VIII nervo.','Nervo VIII'),
  stage('Tronco e colículo inferior','Núcleos cocleares e outros circuitos do tronco processam sinais. Conexões bilaterais contribuem para a localização sonora.','Tronco'),
  stage('Corpo geniculado medial','Núcleo do tálamo que retransmite e modula informação auditiva rumo ao córtex.','Tálamo'),
  stage('Córtex auditivo e redes associadas','Regiões temporais processam características sonoras. O reconhecimento de fala, música e contexto envolve outras áreas conectadas.','Córtex auditivo')
 ]},
 touch:{name:'Tato',icon:'⌁',stimulus:'Deformação mecânica da pele',receptor:'Mecanorreceptores cutâneos',note:'Percurso do tato discriminativo. Dor e temperatura seguem vias diferentes. Os lados e as sinapses estão resumidos; isto não é um mapa de dermátomos.',steps:[
  stage('Receptores da pele','A deformação da pele altera a atividade de terminações mecanossensíveis e pode iniciar sinais em fibras aferentes.','Pele'),
  stage('Aferência periférica','Fibras sensitivas levam informações da pele para o sistema nervoso central.','Nervo'),
  stage('Medula e bulbo','No tato discriminativo do corpo, fibras sobem pelas colunas dorsais; após sinapse no bulbo, a via cruza a linha mediana.','Medula / bulbo'),
  stage('Tálamo somatossensorial','O núcleo ventral posterolateral recebe informações do corpo; o ventral posteromedial recebe informação facial.','Tálamo'),
  stage('Córtex somatossensorial','O giro pós-central participa da representação do corpo. Percepção tátil integra atenção, experiência e outras redes.','Córtex')
 ]},
 smell:{name:'Olfato',icon:'≈',stimulus:'Moléculas odorantes',receptor:'Neurônios do epitélio olfatório',note:'O córtex olfatório recebe sinais antes de uma estação talâmica obrigatória. Conexões posteriores com tálamo e córtex orbitofrontal também participam da percepção.',steps:[
  stage('Epitélio olfatório','Moléculas no muco ativam receptores nas terminações de neurônios olfatórios, iniciando uma cascata de transdução.','Epitélio'),
  stage('Fibras olfatórias (I)','Axônios atravessam a lâmina crivosa do etmoide e chegam ao bulbo olfatório.','Fibras I'),
  stage('Bulbo olfatório','Glomérulos organizam entradas receptoras; circuitos locais modificam a atividade enviada por células de projeção.','Bulbo'),
  stage('Córtex olfatório','Projeções alcançam o córtex piriforme e outras regiões olfatórias. Não há aqui o retransmissor talâmico inicial típico de outros sentidos.','Córtex olfatório'),
  stage('Redes de memória e integração','Conexões com regiões límbicas e orbitofrontais participam da associação com experiências e da integração do sabor.','Integração')
 ]},
 taste:{name:'Paladar',icon:'⋮',stimulus:'Substâncias dissolvidas na saliva',receptor:'Células receptoras de botões gustativos',note:'Não existe um mapa rígido da língua para cada gosto. O sabor combina paladar, olfato e sensações como textura e temperatura.',steps:[
  stage('Botões gustativos','Células receptoras respondem a substâncias dissolvidas por canais iônicos ou receptores acoplados a proteínas G, conforme a qualidade gustativa.','Botões gustativos'),
  stage('Nervos VII, IX e X','Fibras desses nervos conduzem sinais de territórios gustativos da boca e da faringe.','VII · IX · X'),
  stage('Núcleo do trato solitário','A porção gustativa desse núcleo no bulbo recebe entradas que participam de vias perceptivas e reflexas.','Bulbo'),
  stage('Tálamo gustativo','A via ascendente alcança uma região do núcleo ventral posteromedial antes de projetar ao córtex.','Tálamo'),
  stage('Ínsula, opérculo e integração','Córtex insular e opérculo frontal participam do processamento gustativo; redes orbitofrontais integram diferentes componentes do sabor.','Córtex gustativo')
 ]}
};
export const touchRoutes={hand:{name:'Mão',peripheral:'Fibras dos nervos da mão',central:'Colunas dorsais → bulbo',description:'A informação da mão entra por raízes cervicais e sobe pelo fascículo cuneiforme; a via cruza no bulbo.'},foot:{name:'Pé',peripheral:'Fibras dos nervos do pé',central:'Colunas dorsais → bulbo',description:'A informação do pé entra por raízes lombossacrais e sobe pelo fascículo grácil; a via cruza no bulbo.'},face:{name:'Face',peripheral:'Nervo trigêmeo (V)',central:'Núcleos do trigêmeo',description:'A sensibilidade tátil facial segue pelo trigêmeo para núcleos no tronco e depois para o tálamo; não sobe pelas colunas dorsais.'}};
