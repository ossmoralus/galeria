> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# Convenções de pastas e nomes (PT-BR)

Este guia define um padrão de organização e nomeação em PT-BR para facilitar manutenção e escalabilidade.

## Objetivos

- Previsibilidade: achar coisas rápido.
- Baixo atrito: imports consistentes.
- Escalabilidade: separar por domínio (blog, galeria, api) sem “puxadinhos”.

## Regras gerais de nomeação

1. **Sem acentos e sem caracteres especiais** em nomes de pastas/arquivos.
   - Motivo: compatibilidade cross-platform + URLs.
   - Use: `politica-privacidade`, `termos-de-uso`, `compartilhar-link`.

2. **Pastas em `kebab-case`** (preferencialmente).
   - Ex.: `galeria`, `meus-badges`, `painel-admin`.

3. **Componentes React em `PascalCase`**.
   - Ex.: `Cabecalho.tsx`, `Rodape.tsx`, `CartaoSvg.tsx`.

4. **Funções/variáveis em `camelCase`**.
   - Ex.: `formatarData`, `normalizarTexto`, `criarSlug`.

5. **Hooks em `camelCase` com prefixo `use`**.
   - Ex.: `usePreferenciaTema`, `useFiltroGaleria`.

6. **Testes** (quando existirem) seguem o nome do arquivo.
   - Ex.: `normalizarTexto.test.ts`.

## Limitações importantes do Next.js (App Router)

Alguns nomes são “obrigatórios” e ficam em inglês por convenção do framework:

- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- `route.ts` em handlers de API

Ou seja: você pode ter **pastas/arquivos do seu domínio em PT-BR**, mas os _entrypoints_ do Next continuam com esses nomes.

## Pastas de rotas (URLs)

Na pasta `app/`, o nome da pasta vira parte da URL.

- Use **PT-BR sem acento** em `kebab-case`.
- Evite siglas ambíguas.

Exemplos:

- `app/galeria/` → `/galeria`
- `app/blog/` → `/blog`
- `app/politica-privacidade/` → `/politica-privacidade`

### Rotas dinâmicas

- Mantém o padrão do Next: `[slug]`, `[categoria]`, `[tag]`.
- Preferência: nome do parâmetro em PT-BR.

Exemplos:

- `app/blog/[slug]/page.tsx`
- `app/blog/categoria/[categoria]/page.tsx`
- `app/blog/tag/[tag]/page.tsx`

Observação: hoje o projeto usa `category/[category]`. Se quiser “portuguesar” isso, faça como migração controlada (quebra URLs).

### Route groups (não aparecem na URL)

Use `(...)` para agrupar sem mudar URL.

Exemplos:

- `app/(site)/...` para páginas públicas
- `app/(admin)/...` para área administrativa

## Componentes: onde colocar e como nomear

### Componentes compartilhados

Padrão recomendado:

- `app/components/` → componentes reutilizáveis do app
- `app/components/ui/` → design system (átomos/moléculas)

**Nome em PT-BR** (se essa for sua preferência no projeto):

- `Cabecalho.tsx` (em vez de `Header.tsx`)
- `Rodape.tsx` (em vez de `Footer.tsx`)
- `Cartao.tsx` (em vez de `Card.tsx`)

Se quiser reduzir risco de inconsistência com o ecossistema, uma alternativa comum é:

- **UI “genérica” em inglês** (`Button`, `Card`, `Badge`)
- **Domínio em PT-BR** (`CartaoSvg`, `AvisoGaleria`, `NavegacaoCategorias`)

O importante é: **escolha 1 regra e aplique sempre**.

### Componentes locais de uma rota

Para componentes usados só dentro de uma rota, mantenha perto dela.

Sugestão (mantendo seu padrão atual):

- `app/galeria/_componentes/` (ou `_components/` se quiser manter como está)

Em PT-BR:

- `app/galeria/_componentes/GradeGaleria.tsx`
- `app/galeria/_componentes/NavegacaoCategorias.tsx`

## `lib/`: separar por domínio

Hoje existe `lib/posts.ts`, `lib/svgGalleryData.ts` e `lib/gallery/*`.

Para escalar bem, a organização que tende a ficar mais clara é:

- `lib/blog/` (ex.: `posts.ts`, `mdx.ts`, `categorias.ts`)
- `lib/galeria/` (ex.: `dadosSvg.ts`, `categorias.ts`, `tipos.ts`)
- `lib/http/` ou `lib/api/` (ex.: `getBaseUrl.ts`)

Dica prática: migre aos poucos, sem “big bang”, criando o novo caminho e ajustando imports gradualmente.

## Dados, tipos e constantes

Recomendação:

- `tipos.ts` ou `types.ts`: escolha 1.
  - Se o objetivo é 100% PT-BR: use `tipos.ts`.
  - Se o objetivo é alinhar com o ecossistema TS: use `types.ts`.

- Constantes: `constantes.ts` ou arquivo específico.
  - Ex.: `rotulosCategoria.ts`, `configSeo.ts`.

## Aliases de import

O projeto já usa `@/lib/...`. Para deixar consistente com componentes e estilos:

- `@/components/*` → `app/components/*`
- `@/styles/*` → `app/style/*`

Isso reduz imports relativos longos e ajuda manutenção.

## Checklist rápido (para PRs)

- Pastas novas em `kebab-case`, sem acento.
- Componentes em `PascalCase`.
- Funções/hooks em `camelCase` (`use...`).
- Nada de “misc”, “utils” genérico sem motivo (prefira domínio).
- Imports preferem `@/...` quando fizer sentido.
