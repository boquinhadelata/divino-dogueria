# THE BOLD ONE — System Rules

Design system com linguagem gráfica e editorial inspirada em sites premiados de food/burger: vermelho vibrante sobre papel off-white, tipografia gigante em caixa alta, cantos 100% retos, bordas grossas. Ousado, direto, lúdico.

## Filosofia

- **Tipografia é o layout.** Títulos enormes (`text-display`, `text-h1`) em caixa alta carregam a página. Prefira uma headline gigante a um bloco de texto.
- **Blocos, não cartões flutuantes.** Superfícies são blocos retos com bordas grossas (2–4px) e, quando houver profundidade, sombra sólida deslocada (`shadow-hard`), nunca blur.
- **Vermelho é ação.** `primary` (vermelho) aparece em CTAs, destaques e seleção. Não diluir com gradientes.
- **Microcopy com personalidade.** Textos curtos, diretos, com tom lúdico.

## Restrições duras (nunca violar)

1. **Sempre tokens, nunca valores crus.** Proibido hex/rgb/px inline para cor, espaçamento, radius, sombra ou tipografia — use as classes geradas dos tokens (`bg-primary`, `text-muted-foreground`, `shadow-hard`). Ver `design-tokens.md`.
2. **Cantos retos.** Nunca usar `rounded-*` exceto `rounded-full` para badges/pills. O padrão do sistema é radius 0.
3. **Sem sombras suaves.** Apenas `shadow-hard` / `shadow-hard-lg` (sombras sólidas). Nunca `shadow-md`, `shadow-lg` etc.
4. **Sem gradientes.** Cor plana sempre.
5. **Sem estilos inline ad-hoc.** Variação visual vem de props de variante dos componentes.
6. **Caixa alta para títulos.** Headings usam `uppercase tracking-tight` com `font-display` peso 800–900.

## Stack

- React 19 + TanStack Start, Tailwind CSS v4 (tokens em `src/styles/theme.css`, mapeados via `@theme inline`).
- Componentes em `src/components/ui/`, variantes com CVA, merge de classes com `cn()` de `src/lib/utils.ts`.
- Fonte display: Archivo (Google Fonts), pesos 400–900 com eixo de largura.
- Ícones: `lucide-react`, stroke 2.

## Padrões de código

```tsx
// Variantes via CVA — nunca booleans de estilo
const buttonVariants = cva("...", {
  variants: { variant: { primary: "...", secondary: "...", ghost: "..." },
              size: { sm: "...", md: "...", lg: "..." } },
  defaultVariants: { variant: "primary", size: "md" },
});
```

- Componentes aceitam e mergeiam `className`, fazem forward de `ref` e spread das props do elemento.
- Conteúdo via `children`, nunca texto hardcoded.

## Acessibilidade

- Elemento semântico correto: `<button>` para ações, `<a>` para navegação, `<label>` ligada ao input.
- Foco sempre visível: `focus-visible:outline-2 focus-visible:outline-ring outline-offset-2`.
- Controles só-ícone exigem `aria-label`.
- Contraste: texto sobre `primary` usa `primary-foreground`; nunca cinza sobre cinza.

## O que NÃO fazer

- Não criar um componente novo por estilo — estenda o mapa de variantes.
- Não usar outra família de fontes sem registrar token.
- Não adicionar radius, sombra suave ou gradiente "só nesse caso".
- Não copiar textos/marca da referência (THE ONE.) — o sistema é original.

Consulte `design-tokens.md` para a paleta e escalas completas e `components.md` para o catálogo.
