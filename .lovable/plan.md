# Fotos reais dos produtos no site da Divino Dogueria

Aplicar as 10 fotos enviadas (prints do cardápio original) no site `/site`, separando a foto da descrição e melhorando a qualidade das imagens.

## O que será feito

### 1. Separar foto da descrição (recorte automático)
- Cada print tem a foto do produto na parte de cima e um painel escuro com nome/descrição embaixo
- Script (Python/PIL) detecta a linha onde começa o painel escuro e recorta apenas a foto do produto, descartando o painel de texto
- As descrições em texto já existem no cardápio (`src/data/cardapio.ts`) — nada de texto fica "grudado" na imagem

### 2. Melhorar as fotos
- Cada foto recortada passa por uma edição de IA: melhorar nitidez, cores vibrantes e iluminação apetitosa, mantendo o produto original fiel (sem inventar ingredientes nem mudar o prato)
- Resultado salvo em `src/assets/produtos/` (ex.: `tradicional.jpg`, `duplo.jpg`, `fritas.jpg`...)

### 3. Ligar as fotos ao cardápio
- Adicionar campo de imagem nos itens de `src/data/cardapio.ts` para os 10 produtos com foto real:
  - Tradicional, Duplo, Junior, Calabresa, Carne de Panela e Cheddar, Costela Mostarda e Mel, Divino, Doritos, Vegetariano, Fritas
- Página `/site/cardapio`: cada item com foto mostra a imagem real no card; itens sem foto seguem com o visual atual
- Página inicial `/site`: trocar as imagens temporárias geradas (hero, fritas etc.) pelas fotos reais dos produtos — hero passa a usar o Hot Dog Divino
- Demais itens do cardápio (docinhos, combos, milkshakes, bebidas) aguardam novas fotos que você enviar

### 4. Verificação
- Conferir no navegador todas as páginas do site com as fotos reais aplicadas, sem erros de console

## Detalhes técnicos
- Recorte com PIL (detecção da faixa escura) + edição via ferramenta de edição de imagem com IA
- Imagens finais em JPG otimizado dentro de `src/assets/produtos/`
- Nenhuma alteração no design system em si — apenas no site `/site`
