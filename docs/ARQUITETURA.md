# Arquitetura do projeto

Este documento descreve a arquitetura **atual** e o padrão recomendado para continuar escalando o projeto **sem mudar a nomenclatura existente**.

## Visão geral (camadas)

- `app/`: UI e rotas (Next.js App Router).
- `lib/`: domínio e regras de negócio (dados, parsing, helpers).
- `content/`: conteúdo (MDX) do blog.
- `public/`: assets públicos (SVGs, ícones).
- `scripts/`: scripts de automação/lint/licenças.
- `docs/`: documentação.

## `app/` (rotas e UI)

### Rotas

Cada pasta em `app/` representa uma rota (URL). Os arquivos abaixo são “entrypoints” do Next.js e ficam como estão:

- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- API: `route.ts`

### Componentes compartilhados

- `app/components/`: componentes reutilizáveis do site.
- `app/components/ui/`: design system (componentes básicos e reutilizáveis).

Regra prática:

- Se o componente é usado em **mais de uma rota** ou é “base UI” → `app/components` ou `app/components/ui`.
- Se o componente é usado **só dentro de uma rota** → manter perto da rota (ex.: `app/galeria/_components/`).

### Componentes locais de rota

O projeto já usa o padrão `*_components` dentro da rota (ex.: `app/galeria/_components`).

- Continue colocando ali componentes que não fazem sentido globalmente.
- Evita “inchaço” em `app/components`.

## `lib/` (domínio)

A regra de ouro: **`lib/` não conhece UI** (não importa componentes React).

### Organização por domínio (sem quebrar imports atuais)

O projeto já aplica isso bem em galeria:

- `lib/gallery/` → dados/tipos por categoria
- `lib/svgGalleryData.ts` → “facade” de compatibilidade que re-exporta e agrega dados

Para o blog, a arquitetura agora segue o mesmo padrão:

- `lib/blog/posts.ts` → implementação do domínio do blog
- `lib/posts.ts` → “facade” de compatibilidade que re-exporta `lib/blog/posts.ts`

Isso permite:

- Escalar `lib/blog/` com novos módulos (ex.: `mdx.ts`, `tags.ts`) sem bagunçar a raiz do `lib/`.
- Manter 100% compatibilidade com imports existentes.

### Sugestão de crescimento (quando precisar)

Sem obrigação de fazer agora — apenas direção:

- `lib/blog/` (posts, parsing MDX, metadata)
- `lib/gallery/` (categorias, tipos, agregadores)
- `lib/api/` ou `lib/http/` (helpers de URL, headers, etc.)

## `content/`

- `content/posts/`: MDX do blog.
- Regra prática: conteúdo não deve conter lógica de domínio; apenas MDX + frontmatter.

## `public/`

- `public/svg/`: SVGs servidos estaticamente.
- Observação: a API em `app/api/svg/...` pode ler/manipular e devolver SVG.

## `scripts/`

Scripts de auditoria e linting. Mantém automação fora da aplicação.

## Convenções de import (arquitetura)

- Prefira `@/lib/...` para domínio.
- Prefira `@/components/...` para UI compartilhada.
- Componentes locais devem importar por caminho relativo dentro da própria rota (ok), ou por alias se fizer sentido.

## Regras rápidas (para manter escalável)

- UI (React) fica em `app/`.
- Domínio e dados ficam em `lib/`.
- `lib/` não importa nada de `app/`.
- Módulos de domínio novos entram em subpastas (`lib/blog`, `lib/gallery`).
- Quando precisar manter compatibilidade, use um arquivo “facade” na raiz (ex.: `lib/posts.ts`, `lib/svgGalleryData.ts`).
