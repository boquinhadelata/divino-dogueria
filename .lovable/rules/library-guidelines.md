# Cozy Code Library — Guidelines

## Components

The design system exports these components — import them from `@ws-25216fdb9cf288274e1e/7285df04-8c92-496f-ab86-ddde3d3004af` and compose them before building anything from scratch:

`Badge`, `Button`, `CardContent`, `CardFooter`, `CardHeader`, `CardTitle`, `Card`, `FooterHeading`, `FooterLegal`, `FooterLink`, `FooterNav`, `Footer`, `Heading`, `Input`, `Marquee`, `NavbarBrand`, `NavbarLink`, `NavbarNav`, `Navbar`, `Select`, `Text`, `Textarea`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-25216fdb9cf288274e1e/7285df04-8c92-496f-ab86-ddde3d3004af/styles/theme.css` (source — preferred import)
- `@ws-25216fdb9cf288274e1e/7285df04-8c92-496f-ab86-ddde3d3004af/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

