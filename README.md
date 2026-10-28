# Neural Explorer 2.0

**Atlas Interativo de Neurociência — New Era Labs | Divisão 7.**

Uma plataforma estática em português para explorar a anatomia do sistema nervoso humano, selecionar estruturas e acompanhar percursos sensoriais. Sem backend, autenticação, serviços pagos, bibliotecas de execução ou chamadas a APIs externas.

## Cinco módulos

1. **Neurônios:** módulo aprovado da v1.0 preservado. Mesmo SVG e oito descrições; seleção por toque, clique ou teclado, destaques, zoom, restauração, rótulos e visão funcional.
2. **Cérebro:** onze estruturas distribuídas entre vista lateral esquerda, superior, corte medial e detalhe temporal medial. Seleção gráfica e lista equivalente; localização, função, relações e curiosidades. Estruturas profundas não aparecem nas vistas superficiais.
3. **Sistema Nervoso:** corpo em vista anterior com encéfalo, medula, trigêmeo e distribuição representativa dos nervos espinhais. Alternância entre visão geral, central e periférica; seleção e descrição das divisões e estruturas.
4. **Sentidos:** visão, audição, tato, olfato e paladar. Cada sentido possui desenho próprio e percurso selecionável de cinco etapas. Os controles avançam, retornam e reiniciam a progressão gráfica. No tato, mão, pé e face mudam a região e a via correspondente.
5. **Neuroimagem:** planos axial, coronal e sagital, cada um com três níveis esquemáticos. Seletor, navegação entre níveis, estruturas selecionáveis, zoom, rótulos e orientação anatômica. São **ilustrações, não exames reais**.

As interfaces anteriores de potencial de ação, sinapse, condução e rede foram retiradas, assim como seus arquivos exclusivos. O backup da versão original permanece separado.

## Executar localmente

Requer apenas Python 3 e navegador moderno:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Abra **http://127.0.0.1:8080**. Também é possível usar `npm start` com Node.js instalado. Abrir `index.html` diretamente com `file://` pode bloquear módulos ES; use um servidor HTTP. Não é necessário instalar pacotes.

Links para módulos: `#neurons`, `#brain`, `#nervous`, `#senses`, `#imaging`. Ao retornar a um módulo, suas últimas seleções são mantidas durante a sessão. Zoom e rótulos dos novos atlas são restaurados ao trocar de vista; não há armazenamento de dados pessoais.

## Publicar no GitHub Pages

1. Extraia `Neural-Explorer-v2.0.zip` em uma pasta própria.
2. Envie os arquivos para um repositório exclusivo do Neural Explorer.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, a branch escolhida e **/(root)**.
4. Acesse a URL fornecida pelo GitHub. Não é necessária compilação.

Os recursos e imports usam caminhos relativos, compatíveis com URLs como `/Neural-Explorer/`. Nenhuma publicação ou alteração em GitHub ou WordPress foi executada automaticamente.

## Tecnologias e estrutura

HTML5, CSS3, JavaScript com módulos ES e SVG original. Tipografia de sistema; nenhum recurso remoto é necessário para explorar o atlas.

```text
index.html                  Navegação, identidade e fontes
style.css                   Base visual e regras do neurônio aprovado
atlas.css                   Layout e desenhos dos novos atlas
assets/favicon.svg          Identidade gráfica local
data/content.js             Oito descrições originais do neurônio
data/brain.js               Conteúdo das onze regiões e vistas
data/nervous.js             Conteúdo do sistema nervoso
data/senses.js              Percursos sensoriais e regiões táteis
data/imaging.js             Planos, níveis e estruturas
js/app.js                   Estado de navegação e integração
js/ui.js                    Controles, seleção e painel compartilhados
js/neuron.js                Módulo aprovado, extraído sem reescrita
js/brain.js + brain-svg.js   Atlas cerebral e desenho
js/nervous.js + body-svg.js  Atlas corporal e desenho
js/senses.js + senses-svg.js Laboratório sensorial e desenho
js/imaging.js + imaging-svg.js Cortes esquemáticos e controles
tests/                      Regressão, integridade e exportação dos SVGs
CREDITS.md                  Fontes, autoria e limites anatômicos
VALIDATION.md               Testes executados e limitações de verificação
LICENSE                     Licença MIT
```

Estado específico de cada módulo fica junto ao seu controlador; dados científicos e desenho ficam separados. O módulo do neurônio mantém seus identificadores e funções originais. Não há dependências compartilhadas com os módulos matemáticos retirados.

## Acessibilidade e responsividade

Elementos SVG selecionáveis por Enter/Espaço, listas HTML equivalentes, indicadores de foco, estados `aria-pressed`, descrição da seleção e regiões de anúncio. Controles em layouts adaptáveis, com suporte a `prefers-reduced-motion`. No celular, o painel de informações passa para baixo da figura. A navegação horizontal permite alcançar os cinco módulos.

## Testes

Com Node.js 18 ou superior, execute:

```sh
npm test
```

Os testes verificam a preservação do código e conteúdo do neurônio por SHA-256, compatibilidade de estruturas com vistas, percursos dos cinco sentidos, variantes táteis, todos os nove cortes, navegação e resolução de caminhos locais. `node tests/export-svg.mjs` exporta as variantes de desenho em JSON para análise XML. Veja **VALIDATION.md** para o resultado desta entrega e as verificações não realizadas.

## Fontes, licença e limitações

Referências e créditos completos em **CREDITS.md**, incluindo OpenStax, BrainFacts / Society for Neuroscience, Queensland Brain Institute, AANS e NCBI Bookshelf. SVGs originais, sem imagens de terceiros ou pacientes. Código e recursos gráficos sob MIT; marcas pertencem aos seus titulares.

É um atlas educativo simplificado, não um atlas clínico completo. Proporções, giros, limites lobares, nervos e projeções são aproximados. A neuroimagem consiste em **nove esquemas independentes**, sem aquisição médica, volume 3D, escala ou coordenadas calibradas. Não oferece diagnóstico, detecção de doenças ou interpretação de exames. Funções complexas dependem de redes distribuídas.

## Backup e isolamento

Antes de qualquer alteração da v1.0, foi criado `Neural-Explorer-v1.0-BACKUP.zip` fora da pasta do projeto, com todos os 12 arquivos originais, inclusive o ZIP anterior. Cada arquivo foi conferido por SHA-256; o manifesto está ao lado do backup. O caminho exato consta do relatório de entrega. O pacote v2.0 não inclui backups, ZIPs antigos, caches, credenciais ou arquivos de outros projetos.

**Per Vitam, Ad Astra. Uma iniciativa da Divisão 7.**
