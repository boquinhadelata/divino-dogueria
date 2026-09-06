# Logo em neon animado na Divino Dogueria

Usar o vídeo enviado como referência visual (letreiro de neon aceso em parede de tijolos) e recriar esse efeito no site, animado, sem depender do arquivo de vídeo.

## Por que recriar em vez de usar o vídeo

O vídeo tem a marca d'água "Luma AI" no canto e apenas 5 segundos em qualidade média. Recriando o letreiro em código, o brilho fica nítido em qualquer tela, carrega rápido e pode ser reutilizado no topo, no rodapé e na página "Sobre".

## O que será feito

1. **Logo em neon (novo componente `NeonLogo`)**
   - Letreiro "DIVINO DOGUERIA" com o cachorro-quente e a coroa, em traço de neon: vermelho no "DIVINO" e branco/azulado no "DOGUERIA", como na referência.
   - Brilho pulsante suave e um leve "piscar" de tubo de neon ao entrar na tela, feito com animação de código (sem vídeo).
   - Respeita quem prefere menos animação no sistema (a animação para).

2. **Onde aparece**
   - **Página inicial**: bloco de destaque com fundo escuro de parede, o letreiro aceso e o botão de pedido — logo abaixo do topo.
   - **Topo do site**: versão pequena do letreiro no lugar do nome em texto.
   - **Rodapé**: versão pequena, apagada, acendendo ao passar o mouse.
   - **Página "Sobre"**: o letreiro grande como abertura.

3. **Fundo de parede**
   - Textura escura de parede de tijolos gerada como imagem de fundo do bloco do letreiro, no tom da referência.

4. **No design system**
   - `NeonLogo` entra na biblioteca (com variações de tamanho e de cor) e é exportado para reuso em outros projetos, junto de um token de brilho neon.

## Detalhes técnicos

- Componente SVG em `src/components/ui/neon-logo.tsx`, com `variant` (red/white/off) e `size` (sm/md/lg) via CVA, exportado em `src/index.ts`.
- Glow por `filter: drop-shadow` em camadas + `text-shadow`, tokens novos (`--glow-neon-red`, `--glow-neon-white`) e keyframes de flicker em `src/styles/theme.css`.
- Animação desativada em `prefers-reduced-motion`.
- Fundo de tijolos gerado como imagem em `src/assets/`.
- O arquivo de vídeo enviado fica só como referência, não entra no site.
