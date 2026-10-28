export const imageStructures={
 cortex:{id:'cortex',name:'Substância cinzenta cortical',color:'#93b9c6',description:'Camada superficial dos hemisférios, rica em corpos celulares, dendritos e sinapses.',relation:'Interage com outras áreas corticais e estruturas profundas por feixes de substância branca.'},
 white:{id:'white',name:'Substância branca',color:'#435f73',description:'Regiões com muitos axônios, frequentemente mielinizados, que conectam circuitos.',relation:'A distribuição no desenho é aproximada; não são identificados feixes individuais.'},
 ventricles:{id:'ventricles',name:'Ventrículos',color:'#091524',description:'Cavidades preenchidas por líquido cerebrospinal. Sua aparência muda conforme o plano e o nível do corte.',relation:'Os ventrículos laterais comunicam-se com o terceiro ventrículo; o sistema continua até o quarto.'},
 thalamus:{id:'thalamus',name:'Tálamo',color:'#a6a0cf',description:'Estrutura par e profunda do diencéfalo. Seus núcleos participam de circuitos com o córtex.',relation:'No corte axial intermediário, as duas massas talâmicas ficam de cada lado do terceiro ventrículo.'},
 callosum:{id:'callosum',name:'Corpo caloso',color:'#e1d6ae',description:'Feixe de substância branca que cruza a linha mediana e conecta os hemisférios.',relation:'Seu arco é particularmente reconhecível em cortes sagitais medianos.'},
 cerebellum:{id:'cerebellum',name:'Cerebelo',color:'#b38e83',description:'Estrutura da fossa posterior, com córtex pregueado e substância branca interna.',relation:'Situa-se posteriormente ao tronco encefálico e abaixo dos hemisférios cerebrais.'},
 brainstem:{id:'brainstem',name:'Tronco encefálico',color:'#8baeb7',description:'Região de continuidade entre diencéfalo e medula, formada por mesencéfalo, ponte e bulbo.',relation:'É anterior ao cerebelo no plano sagital.'},
 hippocampus:{id:'hippocampus',name:'Hipocampo',color:'#95b99a',description:'Estrutura temporal medial envolvida em circuitos de memória.',relation:'No corte coronal, aparece inferiormente à região do corno temporal do ventrículo lateral.'}
};
export const planes={
 axial:{name:'Axial',definition:'Plano horizontal: separa porções superior e inferior.',orientation:'Convenção radiológica: direita da pessoa à esquerda da imagem; anterior acima.',levels:[
  {name:'Inferior · fossa posterior',structures:['cortex','white','cerebellum','brainstem'],note:'Nível ilustrativo do tronco e cerebelo. O contorno anterior representa porções temporais.'},
  {name:'Intermediário · tálamos',structures:['cortex','white','ventricles','thalamus'],note:'Nível ilustrativo dos tálamos e cavidades ventriculares. Núcleos da base e cápsulas não foram delimitados.'},
  {name:'Superior · hemisférios',structures:['cortex','white'],note:'Nível acima das principais cavidades ventriculares mostradas aqui; predominam córtex e substância branca.'}
 ]},
 coronal:{name:'Coronal',definition:'Plano frontal: separa porções anterior e posterior.',orientation:'Vista de frente: direita da pessoa à esquerda da imagem; superior acima.',levels:[
  {name:'Anterior · regiões frontais',structures:['cortex','white','ventricles'],note:'Corte ilustrativo dos hemisférios frontais e cornos anteriores dos ventrículos laterais.'},
  {name:'Intermediário · temporal medial',structures:['cortex','white','ventricles','thalamus','hippocampus'],note:'Esquema da relação entre tálamos, cavidades ventriculares e hipocampos. Pequenas estruturas foram omitidas.'},
  {name:'Posterior · regiões occipitais',structures:['cortex','white','ventricles','cerebellum'],note:'Porções occipitais e cerebelo aparecem em níveis posteriores. As formas são aproximadas.'}
 ]},
 sagittal:{name:'Sagital',definition:'Plano longitudinal: separa porções direita e esquerda.',orientation:'Vista do lado esquerdo: anterior à esquerda, posterior à direita; superior acima.',levels:[
  {name:'Mediano · linha média',structures:['cortex','white','ventricles','callosum','brainstem','cerebellum'],note:'O plano mediano revela o arco do corpo caloso, terceiro e quarto ventrículos e estruturas do tronco.'},
  {name:'Parassagital · temporal medial',structures:['cortex','white','ventricles','hippocampus'],note:'Detalhe ilustrativo fora da linha média, escolhido para destacar a região temporal medial. Não corresponde a uma distância calibrada.'},
  {name:'Lateral · hemisfério',structures:['cortex','white'],note:'Corte ilustrativo mais lateral, com substância branca e contorno cortical. Estruturas medianas não foram sobrepostas.'}
 ]}
};
