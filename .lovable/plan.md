# Deixar só o site da Divino Dogueria

Hoje o projeto abre numa vitrine do design system ("The Bold One") com abas de cores, componentes e tipografia, e o site da Divino fica escondido dentro de `/site`. Vamos remover tudo que não é a Divino e deixar o site dela como página principal.

## O que sai

- Página inicial da vitrine do design system
- Páginas de cores, componentes e tipografia
- Página de cardápio antiga (versão de demonstração, fora do site)
- Cabeçalho/menu da vitrine

## O que fica

- Início da Divino (passa a ser o endereço principal do site)
- Cardápio
- Sobre
- Onde estamos
- Contato

Os endereços ficam mais curtos: em vez de `/site/cardapio`, passa a ser `/cardapio`, e assim por diante.

Os componentes e as cores do design system continuam no projeto normalmente — só as páginas de demonstração deixam de existir, então a biblioteca segue reutilizável em outros projetos.

## Detalhes técnicos

- Excluir `src/routes/index.tsx` (showcase), `colors.tsx`, `components.tsx`, `typography.tsx`, `cardapio.tsx` e `src/components/showcase/`
- Renomear as rotas `site.*.tsx` para a raiz: `index.tsx`, `cardapio.tsx`, `sobre.tsx`, `onde-estamos.tsx`, `contato.tsx`; o layout `site.tsx` vira `__root`-level via `SiteShell` aplicado em `src/routes/__root.tsx` (ou um layout pathless)
- Atualizar todos os `Link to="/site/..."` para os novos caminhos
- Manter `src/index.ts` (barrel) e os componentes UI intactos; garantir que nada excluído seja re-exportado
- Rodar typecheck e verificar as cinco páginas no navegador (desktop e celular)
