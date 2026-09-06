# Logo em neon animado + dados reais da loja — Divino Dogueria

Duas entregas no mesmo passo: recriar no site o letreiro de neon do vídeo de referência e substituir os dados de contato de exemplo pelos reais da loja.

## 1. Logo em neon animado

O vídeo enviado é a referência visual (letreiro de neon aceso em parede de tijolos), mas tem marca d'água "Luma AI" e só 5 segundos — por isso o letreiro será recriado em código (SVG animado), nítido em qualquer tela, rápido e reutilizável. O arquivo de vídeo fica só como referência, não entra no site.

- **Componente `NeonLogo`** (`src/components/ui/neon-logo.tsx`): "DIVINO DOGUERIA" com o cachorro-quente e a coroa em traço de neon — vermelho no "DIVINO" e branco/azulado no "DOGUERIA", como na referência. Variações `variant` (red/white/off) e `size` (sm/md/lg) via CVA, exportado em `src/index.ts`.
- **Animação**: brilho pulsante suave e um leve "piscar" de tubo de neon ao entrar na tela; desativada para quem prefere menos movimento (`prefers-reduced-motion`).
- **Fundo**: textura escura de parede de tijolos gerada como imagem, no tom da referência.
- **Tokens novos** em `src/styles/theme.css`: brilhos neon (`--glow-neon-red`, `--glow-neon-white`) e keyframes de flicker.

### Onde aparece

- **Página inicial**: bloco de destaque com fundo de parede escura, o letreiro aceso e o botão de pedido, logo abaixo do topo.
- **Topo do site**: versão pequena do letreiro no lugar do nome em texto.
- **Rodapé**: versão pequena, apagada, que acende ao passar o mouse.
- **Página "Sobre"**: letreiro grande como abertura.

## 2. Dados reais da loja (do print enviado)

Atualizar `src/data/cardapio.ts` (`CONTATO`) e as páginas que o usam:

- **WhatsApp / telefone**: (54) 99689-9316 (links `wa.me/5554996899316` e `tel:` para o botão de ligar).
- **Endereço**: Av das Hortênsias, nº 577 - Loja 06, Bavária, CEP 95670-000, Gramado - RS.
- **Horários**: todos os dias 18:00–23:59; feriados fechado.
- **Mapa** em "Onde estamos": embutir Google Maps apontando o endereço real.
- **Botão de e-mail**: adicionar opção "Enviar e-mail" na página de contato — pendente do e-mail real; fica pronto com placeholder até a confirmação.
- **Instagram**: mantém o atual até receber o link certo.

## Detalhes técnicos

- Sem backend: só dados estáticos em `src/data/cardapio.ts`, componentes e CSS.
- Mapa via iframe do Google Maps com `loading="lazy"`.
- `NeonLogo` segue o contrato de componentes da biblioteca: tokens, variantes nomeadas, acessível (rótulo oculto para leitores de tela), export no barrel.
- Remover o aviso "conteúdo ainda em confirmação" do rodapé após aplicar os dados reais (e-mail continua marcado como pendente).
