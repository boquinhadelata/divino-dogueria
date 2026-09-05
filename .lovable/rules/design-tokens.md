# Design Tokens

Token reference for **Cozy Code Library**. Use utility classes and CSS variables — never raw values.

## Colors

Apply with any color utility: `bg-<name>`, `text-<name>`, `border-<name>`, `ring-<name>`, `divide-<name>`, etc.

| Name | CSS variable |
|---|---|
| `red` | `--red` |
| `red-deep` | `--red-deep` |
| `paper` | `--paper` |
| `ink` | `--ink` |
| `ink-soft` | `--ink-soft` |
| `smoke` | `--smoke` |
| `white` | `--white` |
| `amber` | `--amber` |
| `green` | `--green` |
| `muted` | `--muted` |
| `muted-foreground` | `--muted-foreground` |
| `destructive` | `--destructive` |

## Typography

Typography classes (`font-*` for families, `text-*` for sizes):

| Class | CSS variable |
|---|---|
| — | `--line` |
| `font-display` | `--font-display` |
| `font-sans` | `--font-sans` |
| `text-caption` | `--text-caption` |
| `text-body` | `--text-body` |
| `text-lead` | `--text-lead` |
| `text-h4` | `--text-h4` |
| `text-h3` | `--text-h3` |
| `text-h2` | `--text-h2` |
| `text-h1` | `--text-h1` |
| `text-display` | `--text-display` |

## Spacing

Apply with any spacing utility: `p-<name>`, `m-<name>`, `gap-<name>`, `space-<name>`, `w-<name>`, `h-<name>`, etc.

| Name | CSS variable |
|---|---|
| — | `--border-width` |
| `unit` | `--spacing-unit` |

## Border Radius

Border-radius classes:

| Class | CSS variable |
|---|---|
| `rounded` | `--radius` |
| `rounded-pill` | `--radius-pill` |
| `rounded-xs` | `--radius-xs` |
| `rounded-sm` | `--radius-sm` |
| `rounded-md` | `--radius-md` |
| `rounded-lg` | `--radius-lg` |

## Shadows

Box-shadow classes:

| Class | CSS variable |
|---|---|
| `shadow-hard` | `--shadow-hard` |
| `shadow-hard-lg` | `--shadow-hard-lg` |

## Other

Reference via `var(--name)` in inline styles or CSS.

| CSS variable |
|---|
| `--animate-marquee` |

