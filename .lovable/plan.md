# Design System inspirado em "THE ONE. Burger BCN"

Construir o design system do zero, aqui no Lovable, usando o site premiado do Awwwards (theoneburgerbcn.com) como referência de direção visual — sem copiar a marca, apenas a linguagem de design.

## Direção visual (extraída da referência)

- **Cores**: vermelho primário vibrante `#EF3205`, fundo off-white `#EFEFEF`, texto preto puro, com suporte a modo escuro (fundo quase preto, texto off-white)
- **Tipografia**: display bold condensada para títulos grandes (estilo "Kunst"), sans neutra para corpo — títulos sempre em caixa alta, tamanhos generosos
- **Forma**: cantos 100% retos (radius 0), sem sombras suaves — visual gráfico, editorial e "blocky"
- **Espaçamento**: base 4px, seções amplas com muito respiro
- **Tom**: ousado, direto, lúdico — microcopy com personalidade

## O que será construído

### 1. Configuração da biblioteca (`.lovable/`)
- `meta.yaml` — framework react, css tailwind, source_type local
- `system.md` — filosofia, restrições duras (sempre tokens, nunca valores crus, sem radius fora do token, acessibilidade)

### 2. Tokens (`src/styles/theme.css`)
- Paleta: `red` (primária), `paper` (fundo claro), `ink` (preto), escalas de cinza, semânticos (success/warning/error) na mesma família
- Tipografia: escala display/h1–h4/body/caption, pesos regular/medium/bold
- Espaçamento 4pt, radius (0 como padrão), bordas grossas como assinatura (2–4px)
- Tudo como CSS variables + mapeamento `@theme` do Tailwind v4

### 3. Componentes (cada um com variantes via props e export no barrel)
- **Button** — variantes primary (vermelho), secondary (outline grossa), ghost; tamanhos sm/md/lg; cantos retos
- **Badge / Tag**
- **Card** — bloco reto com borda grossa opcional
- **Input / Textarea / Select** — estilo editorial, bordas fortes
- **Typography helpers** (Heading, Text)
- **Marquee** (faixa de texto rolante, assinatura da referência)
- **Navbar e Footer** de exemplo como componentes compostos

### 4. Showcase
- Página inicial (`/`) como vitrine completa: paleta de cores, escala tipográfica, todos os componentes e variantes — desenhada no próprio estilo do sistema (hero com tipografia gigante, marquee vermelho, grid de blocos)

### 5. Barrel
- `src/index.ts` re-exportando todos os componentes para consumo após attach

## Detalhes técnicos
- Tailwind CSS v4 via `src/styles.css` + tema em `src/` para propagar no attach
- CVA para variantes de componentes
- Fonte display via Google Fonts (Archivo Black ou similar condensada bold) como substituta acessível da Kunst (fonte proprietária)
- Sem backend — biblioteca puramente visual
