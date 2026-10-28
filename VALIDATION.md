# Verificação da entrega 2.0

Data: 28 de outubro de 2026.

## Backup obrigatório

O diretório de trabalho confirmado foi `Neural-Explorer`. Antes da primeira modificação, todos os 12 arquivos originais foram incluídos em `Neural-Explorer-v1.0-BACKUP.zip`, salvo na área de artefatos da sessão, fora do projeto. A lista de arquivos e o SHA-256 de cada conteúdo foram comparados ao ZIP. O manifesto original está ao lado do backup. Nenhum outro projeto foi alterado.

## Verificações automatizadas

- Regressão do neurônio por SHA-256: funções de desenho, seleção e controles idênticas ao trecho da v1.0, salvo extração para módulo; conteúdo educativo original idêntico em bytes.
- Oito estruturas e cinco controles originais presentes, com teclado e estado de seleção.
- Onze regiões cerebrais: concordância entre lista e SVG em quatro vistas; estruturas profundas ausentes das superfícies.
- Sistema nervoso: elementos centrais e periféricos distinguíveis, seletores e modos de exibição.
- Cinco sentidos: desenhos distintos, percursos em cinco etapas e progressão gráfica. Variantes corporais do tato e via facial diferenciada.
- Neuroimagem: três planos × três níveis; estruturas da lista e do desenho coincidem em cada esquema.
- Cinco módulos na navegação, sem os quatro módulos retirados.
- Imports e links locais resolvidos por caminhos relativos, inclusive sob subdiretório de hospedagem.
- Sintaxe JavaScript e XML das 41 variantes SVG geradas; IDs de desenho únicos por variante.
- Pacote: CRC, lista e SHA-256 de todos os conteúdos; extração em pasta temporária isolada e repetição dos testes, análise XML e checagem de sintaxe sobre a cópia extraída.

`npm test` executa 26 testes automatizados de integridade e regressão. `python tools/package.py` cria o ZIP e repete essas verificações sobre a extração. Nenhuma dependência precisa ser instalada.

## Limitações de validação

Foi iniciado um servidor HTTP local e tentada a abertura no Microsoft Edge. A ferramenta de controle do navegador interrompeu a execução por não conseguir confirmar com segurança a URL atual. Não houve tentativa de contornar a restrição.

Foi realizada inspeção estática de uma prancha com seis desenhos SVG renderizados (cérebro lateral, medial e profundo, corpo, via visual e corte axial). Essa conferência é limitada às figuras e não certifica o layout da página.

**A inspeção visual em navegador, os cliques reais, a navegação real por teclado e a responsividade em aparelho móvel não foram concluídos.** Os testes automatizados verificam código, dados, desenhos e caminhos; não substituem esses testes de interação. Também não constituem revisão especializada da precisão anatômica.

Antes da publicação, recomenda-se conferir em navegador: oito seleções do neurônio, zoom/restauração, rótulos, visão funcional, onze regiões cerebrais e suas vistas, três modos corporais, percursos dos cinco sentidos, regiões táteis e os nove cortes. Conferir também Tab/Enter/Espaço, foco visível e tela de 390 px de largura. Os estilos responsivos e a redução de movimento estão implementados, mas não foram visualmente certificados.

Nenhuma publicação em GitHub Pages ou alteração no WordPress foi realizada.
