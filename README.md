<div align="center">

# 🎨 Galeria Moralus OSS

[![CI](https://github.com/ossmoralus/galeria/actions/workflows/ci.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/ci.yml)
[![CodeQL](https://github.com/ossmoralus/galeria/actions/workflows/codeql.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/codeql.yml)
[![Deploy on Vercel](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)](https://galeria-drab.vercel.app)
[![License MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)
[![TypeScript Strict](https://img.shields.io/badge/typescript-strict-blue?style=for-the-badge)](https://www.typescriptlang.org)

Uma plataforma completa para gerenciar **badges, SVGs e banners** para perfis do GitHub. Com gerador interativo, blog educativo e API dinâmica.

**Construído com [Next.js 16](https://nextjs.org) • [React 19](https://react.dev) • [TypeScript](https://www.typescriptlang.org) • [TailwindCSS](https://tailwindcss.com)**

<br/>

[🌐 **Visitar Site**](https://galeria-drab.vercel.app) • [🖼️ **Galeria**](https://galeria-drab.vercel.app/galeria) • [✍️ **Blog**](https://galeria-drab.vercel.app/blog) • [📚 **Docs**](./docs/) • [💬 **Discord**](https://discord.gg/RpqNZpVn)

</div>

---

## 🎯 Principais Funcionalidades

- 🖼️ **Galeria completa de SVGs** (badges, banners, ícones) organizada por categorias
- ✍️ **Blog educativo em MDX** com categorias/tags e SEO
- ⚙️ **API de SVGs** para servir assets via URL com parâmetros de dimensão
- 👀 **API de visitantes** para contador (JSON + badge SVG)

## 🏷️ Badges do projeto (para usar no seu README)

Alguns exemplos prontos (servidos pela API do próprio projeto):

![Build Passing](https://galeria-drab.vercel.app/api/svg/badges/info/badge-build-passing.svg)
![License MIT](https://galeria-drab.vercel.app/api/svg/badges/info/badge-license-mit.svg)
![TypeScript](https://galeria-drab.vercel.app/api/svg/badges/skills/langs/badge-typescript.svg)
![React](https://galeria-drab.vercel.app/api/svg/badges/skills/tecnologias/badge-react.svg)

Guia completo + catálogo: [docs/GALERIA-SVG.md](docs/GALERIA-SVG.md)

---

## 🧩 Como adicionar no GitHub

### 1) No perfil (README do usuário)

O GitHub permite um README “especial” no perfil:

1. Crie um repositório com o **mesmo nome do seu usuário** (ex.: `seu-usuario/seu-usuario`)
2. Marque a opção **Public**
3. Adicione/edite o `README.md` desse repositório
4. Cole um badge (exemplos abaixo)

Exemplo com contador de visitantes (badge SVG):

```md
![visitors](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg)
```

Se quiser trocar o texto do lado esquerdo:

```md
![views](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg?label=views)
```

### 2) Em qualquer repositório

Basta adicionar no `README.md` do repositório:

```md
![visitors](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg)
```

> Observação: o GitHub pode cachear imagens; então o número pode demorar a refletir o valor mais recente.

### 🖼️ Galeria Completa

- 📦 **SVGs Organizados** - Badges, banners e ícones categorizados
- 🔗 **URLs Permanentes** - Links diretos e confiáveis para cada asset
- 📋 **Copy-Paste** - Copiar código Markdown com um clique
- ⬇️ **Download** - Baixar SVGs individuais facilmente
- 📐 **Dimensões Dinâmicas** - Parâmetros `?width=` e `?height=` suportados

### ✍️ Blog Educativo

- 📝 **Posts em MDX** - Suporta React components + Markdown
- 🏷️ **Categorias & Tags** - Sistema de filtros intuitivo
- ⏱️ **Tempo de Leitura** - Estimativa automática
- 🎨 **Syntax Highlighting** - Destaque de código incluído
- 🔍 **SEO Otimizado** - Meta tags dinâmicas e sitemaps

### ⚙️ API de SVGs

- 🚀 **Dinâmica** - Servir SVGs com parâmetros na URL
- 🔄 **Responsiva** - Suporta dimensões em pixels ou porcentagem
- ⚡ **Otimizada** - Cache e compressão automáticos
- 📊 **Escalável** - Route handlers Next.js modernos

## 🛠️ Stack Tecnológico

### Frontend & Framework

- **[Next.js 16.0.7](https://nextjs.org)** - App Router + Turbopack
- **[React 19.2.1](https://react.dev)** - Biblioteca UI moderna
- **[TypeScript 5.6.0](https://www.typescriptlang.org)** - Tipagem estática (strict mode 100%)
- **[TailwindCSS](https://tailwindcss.com)** - Utilitários CSS
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Plugin para tipografia

### Content & MDX

- **[@next/mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx)** - Integração MDX nativa
- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - Renderização segura de MDX
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Parse de frontmatter YAML
- **[reading-time](https://github.com/ngryman/reading-time)** - Cálculo de tempo de leitura
- **[rehype-highlight](https://github.com/rehypejs/rehype-highlight)** - Syntax highlighting (código)

### Qualidade de Código

- **[ESLint 9.39.1](https://eslint.org)** - 40+ regras customizadas
- **[Stylelint 16.26.1](https://stylelint.io)** - Ordenação alfabética CSS
- **[Prettier 3.7.3](https://prettier.io)** - Formatação automática
- **[SVGO 3.x](https://github.com/svg/svgo)** - Otimização de SVGs

### Validação & Segurança

- **TypeScript Strict** - Todas as 27 verificações habilitadas
- **License Checker** - Auditoria de conformidade de licenças
- **YAML Lint** - Validação de workflows e configs
- **Actionlint** - Validação de workflows GitHub Actions

### Desenvolvimento & Deployment

- **[Node.js 24.x](https://nodejs.org)** - Runtime JavaScript/TypeScript
- **[Vercel](https://vercel.com)** - Hosting & deployment automático
- **GitHub Actions** - CI/CD pipelines

## 🗂️ Estrutura do Projeto

```
galeria/
├── 📱 app/                           # App Router do Next.js
│   ├── api/
│   │   ├── svg/[...filename]/        # 🔗 API dinâmica de SVGs com parâmetros
│   │   └── visitors/[id]/            # 👀 API de visitantes (JSON + badge.svg)
│   ├── blog/                         # 📚 Sistema de blog com MDX
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # Índice de posts
│   │   ├── [slug]/                   # Posts individuais
│   │   ├── category/[category]/      # Filtrar por categoria
│   │   └── tag/[tag]/                # Filtrar por tag
│   ├── galeria/                      # 🖼️ Galeria de SVGs
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── _components/              # Componentes internos
│   │       ├── CategoryNav.tsx
│   │       └── GalleryGrid.tsx
│   ├── components/                   # 🧩 Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── VideoEmbed.tsx
│   │   └── ui/                       # Design system
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── CodeModal.tsx
│   │       └── ... (10+ componentes)
│   ├── style/                        # 🎨 Estilos centralizados
│   │   ├── globals.css               # Reset + CSS custom properties
│   │   ├── components.css            # Classes reutilizáveis
│   │   └── responsive.css            # Media queries organizadas
│   ├── layout.tsx                    # Root layout com metadata
│   ├── page.tsx                      # Home page
│   ├── error.tsx, not-found.tsx      # Error boundaries
│   └── ...
├── 📄 content/
│   └── posts/                        # 📝 Posts do blog em MDX
├── 📚 docs/                          # 📖 Documentação
│   ├── CRIAR-POSTS-BLOG.md          # Guia de posts
│   ├── GALERIA-SVG.md               # Índice de SVGs
│   ├── AUDITORIA-LICENCAS.md        # Análise de dependências
│   ├── OTIMIZACAO-SVG.md            # Guia de otimização
│   ├── RECOMENDACOES.md             # Boas práticas
│   └── BADGE_STANDARD.md            # Padrão de badges
├── 🔧 lib/
│   ├── posts.ts                      # Utilitários do blog
│   ├── svgGalleryData.ts             # Dados da galeria
│   └── getBaseUrl.ts                 # Helper de URLs
│   └── visitors.ts                    # Contador de visitantes (Upstash)
├── 🎁 public/
│   ├── icons/                        # Favicons e PWA
│   ├── svg/                          # 🖼️ Assets de SVG
│   │   ├── badges/                   # Badges customizados
│   │   │   ├── info/                 # 15+ badges
│   │   │   ├── decorativos/          # 8+ badges
│   │   │   └── skills/               # 20+ badges de skills
│   │   ├── banner/                   # Banners e covers
│   │   └── mim/                      # Logo animado
├── 🔧 scripts/                       # Utilitários de build
│   ├── n-badges.cjs                  # Normalizar badges
│   ├── license-audit.mjs             # Auditoria de licenças
│   └── ...
├── 📋 package.json                   # Dependências e scripts
├── 📝 README.md                      # Este arquivo
├── 📜 LICENSE                        # MIT
└── 🎛️ Config files
    ├── next.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    └── ...
```

## 🎨 Design System

### Paleta de Cores

Sincronizada com a identidade visual da **Moralus OSS**:

```css
/* Tons Primários - Petróleo/Verde-Água */
--accent-blue: #1a4d5c; /* Azul-petróleo escuro */
--accent-green: #2d7d6e; /* Verde-água profundo */
--accent-teal: #1f5f5a; /* Cerceta escuro */
--accent-cyan: #3a8a7f; /* Ciano intermediário */
--accent-light: #4ea89a; /* Verde-água claro */

/* Background */
--bg-primary: #0a0a0a; /* Preto profundo */
--bg-secondary: #171717;
--bg-tertiary: #262626;

/* Text */
--text-primary: #e5e5e5;
--text-secondary: #a3a3a3;
--text-bright: #ffffff;
```

### Componentes UI

- ✅ **Button** - Com variantes (primary, secondary, ghost)
- ✅ **Card** - Base para todos os containers
- ✅ **Badge** - Para tags e status
- ✅ **Input** - Com validação automática
- ✅ **Panel** - Container com bordas
- ✅ **CodeModal** - Exibidor de código
- ✅ **SVGCard** - Card especializado para SVGs
- ✅ **Container** - Wrapper responsivo

### Estilos Centralizados

- 📐 **Dimensões** - Max-width e heights reutilizáveis
- 🎬 **Animações** - Fade in, slide in, com suporte a delay dinâmico
- 📱 **Responsividade** - Mobile-first com breakpoints claros
- 🌗 **Modo escuro** - Dark theme nativo

## 🚀 Começando Rápido

### Pré-requisitos

- **Node.js** 24.x
- **npm** ou **yarn**

### Instalação & Setup

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/ossmoralus/galeria.git
cd galeria

# 2️⃣ Instale as dependências
npm install

# 3️⃣ Configure o ambiente (se necessário)
cp .env.example .env.local

# 4️⃣ Inicie o servidor de desenvolvimento
npm run dev
```

> Para habilitar a API de contagem de visitantes (abaixo), configure também as variáveis do Upstash em `.env.local`.

Abra [http://localhost:3000](http://localhost:3000) no seu navegador. 🎉

### 📋 Scripts Disponíveis

#### 🚀 Desenvolvimento & Build

```bash
npm run dev              # Servidor dev com hot reload (localhost:3000)
npm run build            # Build otimizado para produção
npm start                # Inicia servidor de produção
```

#### 🔍 Linting & Qualidade de Código

```bash
# Verificar
npm run lint             # ✓ ESLint (JavaScript/TypeScript)
npm run lint:css         # ✓ Stylelint (CSS)
npm run lint:svg         # ✓ SVGO (otimização de SVGs)
npm run type-check       # ✓ TypeScript type checking

# Corrigir automaticamente
npm run lint:fix         # 🔧 ESLint auto-fix
npm run lint:css:fix     # 🔧 Stylelint auto-fix
npm run format           # 🔧 Prettier formatter
npm run otimize:svg      # 🔧 SVGO otimizar SVGs
npm run fix:all          # 🔧 Todos os lints + format
```

#### 📦 Dependências & Licenças

```bash
npm run license:audit       # ✓ Auditoria de licenças (JSON)
npm run license:report      # 📄 Relatório de licenças (texto)
npm run license:notices     # 📄 Gerar THIRD-PARTY-NOTICES.txt
npm run license:full        # 🔧 Rodar auditoria + relatórios
```

#### 🔧 Utilitários

```bash
npm run diagnosticar     # 🔍 Diagnóstico de problemas
npm run oraculo          # 🤖 Assistente IA interativo
npm run fix-types        # 🛠️ Corrigir issues de tipos
```

---

## 🔗 API de SVGs

### Endpoint Base

```
https://galeria-drab.vercel.app/api/svg/[filename]
```

### Exemplos de Uso

#### Badge Simples

```markdown
![Badge](https://galeria-drab.vercel.app/api/svg/badge-typescript.svg)
```

#### Com Largura Customizada

```markdown
![Badge Large](https://galeria-drab.vercel.app/api/svg/badge-nextjs.svg?width=200)
```

#### Banner Responsivo

```markdown
![Banner](https://galeria-drab.vercel.app/api/svg/capa-1.svg?width=100%)
```

### Parâmetros Suportados

| Parâmetro | Tipo   | Exemplo        | Descrição                        |
| --------- | ------ | -------------- | -------------------------------- |
| `width`   | string | `300` ou `80%` | Largura em pixels ou porcentagem |
| `height`  | string | `100`          | Altura em pixels                 |

> 💡 **Dica**: Defina apenas largura para manter proporções automáticas!

---

## 👀 API de Visitantes (contador)

Esta API incrementa e retorna um contador por `id` (por exemplo: seu usuário do GitHub). Ela foi feita para funcionar bem em Vercel/Edge usando Upstash Redis.

### Variáveis de ambiente (Upstash)

Configure em `.env.local` (dev) e nas variáveis do projeto (produção):

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Também aceitamos (fallback):

- `UPSTASH_REDIS_URL`
- `UPSTASH_REDIS_TOKEN`

Checklist na Vercel (quando “parece configurado” mas não funciona):

1. Confirme que as variáveis estão no **mesmo projeto** do deploy
2. Marque o ambiente correto: **Production** (e Preview/Development se precisar)
3. Depois de alterar variáveis, faça um **Redeploy** do último deployment

### Endpoint JSON

- `GET /api/visitors/:id` → incrementa e retorna `{ id, count }`
- `GET /api/visitors/:id?increment=0` → apenas lê (não incrementa)

Exemplo:

`https://galeria-drab.vercel.app/api/visitors/seu-usuario`

### Badge SVG (para README do GitHub)

- `GET /api/visitors/:id/badge.svg` → retorna um SVG com o número
- Parâmetros:
  - `label` (opcional): texto do lado esquerdo (default: `visitors`)
  - `increment=0` (opcional): não incrementa

Exemplos:

```md
![visitors](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg)
![views](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg?label=views)
```

> Observação: o GitHub pode cachear imagens do README; então o número pode atualizar com atraso dependendo do cache.

---

## 📝 Criar Posts no Blog

Posts são arquivos MDX dentro de `content/posts/`. Suportam Markdown, React components e frontmatter YAML.

### Guia Rápido

1. **Crie um arquivo** em `content/posts/seu-titulo.mdx`
2. **Adicione o frontmatter**:

```yaml
---
title: 'Seu Título'
description: 'Descrição breve'
date: '2024-12-20'
author: 'Seu Nome'
category: 'Categoria'
tags: ['tag1', 'tag2']
published: true
---
```

3. **Escreva o conteúdo** em Markdown ou JSX
4. **Commit & Deploy** - O blog atualiza automaticamente!

📖 [**Documentação Completa →**](./docs/CRIAR-POSTS-BLOG.md)

---

## 🎯 Documentação Completa

| Documento                                                | Descrição                           |
| -------------------------------------------------------- | ----------------------------------- |
| [📚 CRIAR-POSTS-BLOG.md](./docs/CRIAR-POSTS-BLOG.md)     | Guia completo para criar posts MDX  |
| [🖼️ GALERIA-SVG.md](./docs/GALERIA-SVG.md)               | Índice de todos os SVGs disponíveis |
| [📋 AUDITORIA-LICENCAS.md](./docs/AUDITORIA-LICENCAS.md) | Análise de licenças de dependências |
| [✏️ OTIMIZACAO-SVG.md](./docs/OTIMIZACAO-SVG.md)         | Guia de otimização de SVGs          |
| [⭐ RECOMENDACOES.md](./docs/RECOMENDACOES.md)           | Boas práticas e recomendações       |
| [🎯 BADGE_STANDARD.md](./docs/BADGE_STANDARD.md)         | Padrão de normalização de badges    |

---

## 🌟 Destaques

### Badges Disponíveis

Temos 40+ badges prontos em categorias:

- **Informativo** - badges sobre status e informações
- **Decorativos** - badges visuais para customização
- **Skills** - badges de tecnologias (React, Next.js, TypeScript, etc)

### Banners

- 6+ banners customizáveis
- Logos animados
- Covers para repositórios

**Badges de Desenvolvimento:**

- ![Build](https://galeria-drab.vercel.app/api/svg/badge-build-passing.svg)
- ![Tests](https://galeria-drab.vercel.app/api/svg/badge-tests-passing.svg)
- ![Coverage](https://galeria-drab.vercel.app/api/svg/badge-coverage-98.svg)

**Badges de Perfil:**

- ![Full Stack](https://galeria-drab.vercel.app/api/svg/badge-full-stack.svg)
- ![DevOps](https://galeria-drab.vercel.app/api/svg/badge-devops.svg)
- ![Cloud](https://galeria-drab.vercel.app/api/svg/badge-cloud-architect.svg)

**Banners:**

![Banner 1](https://galeria-drab.vercel.app/api/svg/capa-1.svg?width=600)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! O projeto segue [CONTRIBUTING.md](./CONTRIBUTING.md).

### Como Contribuir

1. 🐛 **Reportar Bugs** - Abra uma issue com detalhes
2. 💡 **Sugerir Features** - Discuta antes em uma issue
3. 🎨 **Novos SVGs** - Veja [GALERIA-SVG.md](./docs/GALERIA-SVG.md)
4. 📝 **Documentação** - Melhore nossa docs
5. 🔧 **Código** - PRs são bem-vindas!

### Processo de Desenvolvimento

```bash
# 1. Fork e clone
git clone https://github.com/SEU-USERNAME/galeria.git

# 2. Crie uma branch com um nome descritivo
git checkout -b feature/minha-feature
# ou
git checkout -b fix/meu-bug

# 3. Faça suas mudanças e commit
git commit -m "feat: adiciona nova feature"

# 4. Verifique qualidade de código
npm run fix:all
npm run lint:all

# 5. Push e abra um Pull Request
git push origin feature/minha-feature
```

**Padrão de commits**: Usamos [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📜 Licença & Conformidade

Este projeto está sob a **[MIT License](./LICENSE)**.

### Conformidade de Dependências

- ✅ **MIT** (85.4%) - 736 pacotes
- ✅ **ISC** (5.2%) - 45 pacotes
- ✅ **Apache-2.0** (3.4%) - 29 pacotes
- ✅ **BSD** (3.6%) - 31 pacotes

Todas as licenças são **permissivas** e compatíveis comercialmente.

📄 [Auditoria Completa →](./docs/AUDITORIA-LICENCAS.md)

---

## 🎓 Projeto Educativo

Desenvolvido pela **[Moralus OSS](https://github.com/ossmoralus)** para ajudar a comunidade de desenvolvedores.

[![Discord](https://img.shields.io/badge/Discord-Junte--se-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/RpqNZpVn)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contato-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5537999022401)
[![GitHub](https://img.shields.io/badge/GitHub-Seguir-181717?style=for-the-badge&logo=github)](https://github.com/ossmoralus)

### Aprenda com este projeto

- ✅ **Frontend Moderno** - Next.js 16 + React 19 + TypeScript strict
- ✅ **Blog com MDX** - Sistema completo de posts com frontmatter
- ✅ **API Dinâmica** - Route handlers para servir assets com parâmetros
- ✅ **Design System** - Componentes reutilizáveis em TypeScript
- ✅ **Qualidade de Código** - ESLint, Stylelint, Prettier, Type Checking
- ✅ **CI/CD** - GitHub Actions + Deploy automático na Vercel
- ✅ **Documentação** - Guias e padrões bem estruturados

---

## 📊 Status do Projeto

| Aspecto        | Status                                                     |
| -------------- | ---------------------------------------------------------- |
| **Build**      | ![CI](https://img.shields.io/badge/passing-brightgreen)    |
| **TypeScript** | ![TS](https://img.shields.io/badge/strict-100%25-blue)     |
| **Linting**    | ![ESLint](https://img.shields.io/badge/ESLint-0-green)     |
| **Deploy**     | ![Vercel](https://img.shields.io/badge/Vercel-Live-black)  |
| **Licenças**   | ![Safe](https://img.shields.io/badge/All-Permissive-green) |

---

## 💬 Comunidade & Suporte

<div align="center">

**Junte-se à nossa comunidade!**

[🔗 Discord](https://discord.gg/RpqNZpVn) • [💬 WhatsApp](https://wa.me/5537999022401) • [⭐ GitHub](https://github.com/ossmoralus)

</div>

---

## 🌟 Apoie o Projeto

Se este projeto te ajudou, considere:

- ⭐ **Star no GitHub** - Ajuda muito a divulgar!
- 🐛 **Reportar Bugs** - Encontrou algo? Abra uma issue!
- 💡 **Sugerir Melhorias** - Suas ideias são valiosas
- 🎨 **Contribuir** - Envie um PR com sua feature
- 💬 **Participar** - Engage na comunidade Discord

---

<div align="center">

[![Logo](https://galeria-drab.vercel.app/api/svg/morallus.svg?width=150)](https://galeria-drab.vercel.app)

[🌐 Website](https://galeria-drab.vercel.app) • [🖼️ Galeria](https://galeria-drab.vercel.app/galeria) • [✍️ Blog](https://galeria-drab.vercel.app/blog) • [📚 Docs](./docs/)

---

<sub>De desenvolvedor para desenvolvedor</sub>

</div>
