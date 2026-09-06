# Logo real extraída do vídeo + fundo vermelho + pão mostarda

O usuário rejeitou o letreiro redesenhado em SVG. Quer usar a logo verdadeira do vídeo de referência (sem o fundo de parede de tijolos), fundo vermelho no lugar do fundo escuro, e o pão do hot dog da logo em cor mostarda.

## 1. Extrair e tratar a logo do vídeo

- Recortar do quadro do vídeo a região do letreiro (coroa + hot dog + "DIVINO DOGUERIA"), excluindo a marca d'água "Luma AI" do canto.
- Com edição de imagem: remover o fundo de tijolos gerando PNG com fundo transparente e trocar a cor do pão do hot dog de branco/creme para amarelo mostarda, preservando o traço de neon, a coroa vermelha e os textos "DIVINO" (vermelho) e "DOGUERIA" (claro).
- Guardar como asset CDN (`src/assets/logos/divino-logo.png.asset.json`) e, se a fidelidade ficar ruim por causa da resolução do vídeo, avisar e pedir o arquivo original da logo.

## 2. Fundo vermelho (sem parede de tijolos)

- Remover a imagem `src/assets/tijolos.jpg` e todo uso.
- Seções que usavam o fundo escuro de tijolos (bloco do letreiro na home, abertura do Sobre) passam a fundo vermelho plano `bg-primary`, combinando com a identidade.
- Tokens neon mantidos só se ainda forem usados; brilho de neon passa a ser efeito da própria imagem da logo.

## 3. Substituir o componente NeonLogo pela imagem real

- `NeonLogo` (SVG desenhado em código) sai de cena: o site passa a usar a imagem PNG da logo extraída em `site-shell` (cabeçalho — com altura ajustada para nav de 64px — e rodapé), home e Sobre.
- No cabeçalho claro, a logo (traços claros) pode precisar de contraste: avaliar e, se necessário, cabeçalho com fundo vermelho `bg-primary` ou bloco escuro atrás da logo. Decisão tomada visualmente com screenshot.
- Manter ou remover o componente `NeonLogo` da biblioteca conforme uso restante (se nada mais usar, remover do barrel `src/index.ts` e apagar o arquivo).

## 4. Verificação

- Typecheck (`bunx tsgo --noEmit`).
- Playwright: screenshots das 5 rotas `/site*`, conferindo logo nítida, fundo vermelho e contraste dos textos.

## Detalhes técnicos

- Sem backend. Apenas assets, CSS e componentes.
- A logo é material de marca do próprio usuário (extraída de vídeo que ele enviou) — uso autorizado.
