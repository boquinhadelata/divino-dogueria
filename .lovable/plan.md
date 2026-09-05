# Fotos reais dos produtos no site da Divino Dogueria

Aplicar as fotos enviadas (prints do cardápio original) no site `/site`, separando a foto da descrição, tratando cada imagem individualmente em alta resolução.

## Produtos com foto recebida (30)

- **Hot dogs**: Tradicional, Duplo, Divino Junior, Calabresa, Carne de Panela e Cheddar, Costela Mostarda e Mel, Divino, Doritos, Vegetariano
- **Acompanhamentos**: Fritas, Batata Divina, Batata Cheddar e Bacon, Batata com Chocolate/Ovomaltine, Batata com Calabresa Acebolada
- **Molhos**: Maionese Caseira, Maionese com Cebolinha, Potinho Catchup, Potinho Mostarda, Sachê Hemmer/Heinz
- **Docinhos**: Pudinzim, Cookie Nutella, Mini Churros com MUMU
- **Milkshakes**: Doce de Leite, Choco com Oreo
- **Bebidas**: Coca lata, Guaraná lata, Guaraná Zero lata, Sprite lata, Suco de Uva Cavichion, Coca 2L, Coca 2L Zero, Água sem gás, Água com gás, Heineken Long Neck

## Como será feito

### 1. Separar a foto da descrição — uma a uma
- Cada print tem a foto em cima e um painel escuro com nome/descrição embaixo; alguns têm ainda botões de voltar/compartilhar sobrepostos no topo
- Para cada imagem: detectar onde começa o painel escuro, recortar somente a área da foto e remover as bordas com botões sobrepostos
- Conferência visual imagem por imagem — nenhum texto sobra dentro da foto
- A imagem do print com 5 molhos em lista (`image-30`) é fatiada em 5 fotos separadas, uma por molho

### 2. Tratamento profissional, foto a foto
- Cada foto passa por edição individual: aumento de resolução, nitidez, correção de iluminação e cor apetitosa, limpeza de ruído — sempre mantendo o produto real, sem inventar ingredientes
- Enquadramento padronizado (mesma proporção) para o cardápio ficar alinhado
- Salvas em `src/assets/produtos/` com nomes claros (`hotdog-divino.jpg`, `batata-cheddar-bacon.jpg`, ...)

### 3. Ligar as fotos ao cardápio
- Adicionar campo de imagem nos itens de `src/data/cardapio.ts`, associando cada foto ao produto correspondente
- Página `/site/cardapio`: card de cada item passa a exibir a foto real
- Página inicial `/site`: substituir as imagens temporárias geradas pelas fotos reais (destaque com o Hot Dog Divino, seções de acompanhamentos e milkshakes)
- Itens do cardápio ainda sem foto continuam apenas com texto, no mesmo estilo

### 4. Verificação
- Revisão de todas as páginas do site no navegador, conferindo cada foto no lugar certo e sem erros

## Detalhes técnicos
- Recorte com PIL (detecção da faixa escura + corte das barras de UI) e depois edição de IA por imagem
- Saída em JPG de alta qualidade dentro de `src/assets/produtos/`
- Nenhuma alteração no design system — apenas nos dados e nas páginas do site
