# Refazer a logo fiel ao vídeo de referência

Comparando a logo atual com o vídeo original, dois problemas confirmados:

1. **Pão cortado**: a ponta direita do pão (parte de baixo, mostarda) termina reta, cortada no finalzinho — no original ela é arredondada e fechada.
2. **"DOGUERIA" pequeno demais**: no original a palavra "DOGUERIA" é praticamente tão larga quanto "DIVINO" (ocupa quase toda a largura do letreiro). Na logo atual ela ficou bem menor e mais estreita.

## O que será feito

- Reextrair a logo direto do vídeo original, num quadro nítido e sem o brilho exagerado, mantendo a composição inteira: coroa, pão de cima, salsicha com ketchup, pão de baixo com a pontinha direita completa, "DIVINO" em vermelho e "DOGUERIA" em branco.
- Remover totalmente a parede de tijolos e a marca d'água, deixando fundo transparente.
- Corrigir as proporções para bater com a referência: "DOGUERIA" volta ao tamanho original (mesma largura de "DIVINO"), e o pão de baixo fica na cor mostarda, inteiro e arredondado.
- Enquadramento com margens iguais nos quatro lados, nada encostando na borda.
- Atualizar a imagem usada no site (`src/assets/logos/divino-logo.png`) e o ícone da aba do navegador.

## Verificação

- Conferir a logo ampliada lado a lado com o quadro do vídeo.
- Abrir as cinco páginas do site (início, cardápio, sobre, onde estamos, contato) no computador e no celular e checar cabeçalho, rodapé e destaque da página inicial, sem cortes e sem erros.

## Detalhes técnicos

Extração de frame com ffmpeg, remoção de fundo e recolorização controlada por máscara (PIL/numpy), preservando a linha neon e os interiores transparentes. Sem alteração de layout ou de código de componentes além do arquivo da imagem e do favicon.
