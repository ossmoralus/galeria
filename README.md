> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

git clone https://github.com/ossmoralus/galeria.git
git commit -m "feat: adiciona nova feature"

<div align="center">

# 🎨 Galeria Moralus OSS

<!-- Status Panel - Variações disponíveis: ocean, sunset, forest, purple, dark, neon -->

![Project Status](https://galeria-drab.vercel.app/api/status-badge?theme=ocean)

[![CI](https://github.com/ossmoralus/galeria/actions/workflows/ci.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/ci.yml)
[![CodeQL](https://github.com/ossmoralus/galeria/actions/workflows/codeql.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/codeql.yml)
[![Deploy Preview](https://github.com/ossmoralus/galeria/actions/workflows/deploy-preview.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/deploy-preview.yml)
[![Status](https://github.com/ossmoralus/galeria/actions/workflows/status.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/status.yml)

Plataforma para gerenciar **badges, SVGs e banners** para perfis do GitHub, com galeria interativa, API e blog educativo.

**Next.js 16 • React 19 • TypeScript • TailwindCSS**

[🌐 Site](https://galeria-drab.vercel.app) • [🖼️ Galeria](https://galeria-drab.vercel.app/galeria) • [✍️ Blog](https://galeria-drab.vercel.app/blog) • [📚 Docs](./docs/) • [💬 WhatsApp](https://wa.me/5537998553430) • [⭐ GitHub](https://github.com/ossmoralus)

</div>

---

## 🗂️ Índice rápido

- [Visão geral](#-visão-geral)
- [Destaques](#-destaques)
- [Troubleshooting](#-troubleshooting)
- [Usando os SVGs](#-usando-os-svgs)
- [API de visitantes](#-api-de-visitantes)
- [Stack](#-stack)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Rodar localmente](#-rodar-localmente)
- [Scripts úteis](#-scripts-úteis)
- [Documentação](#-documentação)
- [Contribuição](#-contribuição)
- [Licença & conformidade](#-licença--conformidade)
- [Comunidade](#-comunidade)

---

## 🆘 Troubleshooting

### ❌ "Cards de GitHub Stats retornam HTTP 429 em produção"

**Causa:** Sem `GITHUB_TOKEN`, o GitHub limita a 60 requisições/hora.

**Solução rápida (5 min):**

```bash
# 1. Gere token em https://github.com/settings/tokens
# - Crie novo token (classic)
# - Scope: public_repo
# - Copie o token (será mostrado uma vez)

# 2. Configure no Vercel (Settings → Environment Variables)
# GITHUB_TOKEN=ghp_seu_token

# 3. Deploy novamente
git push origin main
```

**Documentação completa:** [docs/DEBUG-429-PRODUCAO.md](./docs/DEBUG-429-PRODUCAO.md)

---

## 👀 Visão geral

- Galeria de SVGs (badges, banners, ícones) organizada por categoria
- API de SVGs com parâmetros de tamanho e download direto
- Blog em MDX com categorias, tags e SEO
- Contador de visitantes (JSON + badge SVG)

---

## 🌟 Destaques

- 📦 **Catálogo completo**: badges, banners e ícones prontos para README
- 🔗 **Links estáveis**: URLs permanentes com `?width=`/`?height=`
- 🧩 **Design system**: componentes TS tipados e reutilizáveis
- 🔍 **Qualidade**: TypeScript strict, ESLint, Stylelint, Prettier
- 🚀 **Infra**: Next.js App Router, Vercel, GitHub Actions CI/CD

---

## 🖼️ Usando os SVGs

### Badges e banners no README

```md
![badge](https://galeria-drab.vercel.app/api/svg/badges/skills/langs/badge-typescript.svg)
![banner](https://galeria-drab.vercel.app/api/svg/banner/capa-1.svg?width=100%)
```

Principais categorias na galeria:

- Skills (langs, ferramentas, tecnologias)
- Decorativos e info
- Banners de capa para perfil/repo

📖 Catálogo completo: [docs/GALERIA-SVG.md](./docs/GALERIA-SVG.md)

### Parâmetros úteis

| Param  | Exemplo        | Descrição             |
| ------ | -------------- | --------------------- |
| width  | `300` ou `80%` | Largura em px ou %    |
| height | `120`          | Altura opcional em px |

---

## 👥 API de visitantes

Badge pronto para README:

```md
![visitors](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg)
```

Personalizar label (sem incrementar):

```md
![views](https://galeria-drab.vercel.app/api/visitors/seu-usuario/badge.svg?label=views&increment=0)
```

Endpoints principais:

- `GET /api/visitors/:id` → `{ id, count }` (incrementa)
- `GET /api/visitors/:id?increment=0` → somente leitura
- `GET /api/visitors/:id/badge.svg` → badge SVG

Variáveis necessárias (Upstash): `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`.

---

## 📊 GitHub Stats & Languages Cards

Cards SVG que mostram estatísticas reais do seu perfil GitHub! Atualizam automaticamente a cada hora.

### GitHub Stats

Mostra commits, PRs, contribuições e repositórios:

```md
![GitHub Stats](https://galeria-drab.vercel.app/api/github-stats/torvalds?theme=dark&width=600)
```

**Resultado:** ![GitHub Stats](https://galeria-drab.vercel.app/api/github-stats/torvalds?theme=dark&width=600)

Temas: `dark`, `light`, `neon`, `sunset`, `ocean`, `forest`

### GitHub Top Languages

Mostra as 5 linguagens mais usadas:

```md
![GitHub Languages](https://galeria-drab.vercel.app/api/github-langs/torvalds?theme=dark&width=600)
```

**Resultado:** ![GitHub Languages](https://galeria-drab.vercel.app/api/github-langs/torvalds?theme=dark&width=600)

**Como usar no seu README:**

1. Copie a URL de um dos exemplos acima
2. Substitua `torvalds` pelo seu username do GitHub
3. Personalize o tema e tamanho conforme desejado
4. Cole no seu README.md

**Parâmetros de customização:**

| Parâmetro | Exemplo | Descrição |
|-----------|---------|-----------|
| theme | `dark`, `neon` | Tema visual do card |
| width | `600` | Largura em px |
| height | `320` | Altura em px (stats only) |
| name | `João Silva` | Nome customizado (exibe junto ao @username) |

📖 Documentação completa: [docs/cards/CUSTOMIZACAO.md](./docs/cards/CUSTOMIZACAO.md)

⚠️ **Importante:** Para que os cards funcionem em produção sem rate limit, configure a variável `GITHUB_TOKEN` no seu deployment:

1. Crie um Personal Access Token em [github.com/settings/tokens](https://github.com/settings/tokens) com acesso `public_repo`
2. Configure em suas variáveis de ambiente do Vercel/seu host:
   ```
   GITHUB_TOKEN=ghp_seu_token_aqui
   ```
3. Sem o token, você atingirá o limite de 60 requisições/hora. Com token: 5.000 requisições/hora.

---

## 🧰 Stack

- **Next.js 16.0.7**, **React 19.2.1**, **TypeScript 5.6**
- **TailwindCSS 3.4** + **@tailwindcss/typography**
- **MDX**: @next/mdx, next-mdx-remote, gray-matter
- **Qualidade**: ESLint 9, Stylelint 16, Prettier 3, SVGO 4
- **Infra**: Node 24.x, Vercel, GitHub Actions

---

## 🗺️ Estrutura do projeto

```
galeria/
├── app/                # App Router, páginas, APIs (SVG, visitors)
├── content/posts/      # Posts MDX
├── docs/               # Guias e padrões
├── lib/                # Dados da galeria, helpers
├── public/svg/         # Badges, banners, ícones
└── scripts/            # Lints, auditorias, utilitários
```

---

## 🏃 Rodar localmente

```bash
git clone https://github.com/ossmoralus/galeria.git
cd galeria
npm install
cp .env.example .env.local    # se precisar de vars
npm run dev
```

Abrir http://localhost:3000.

---

## 🔧 Scripts úteis

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servir build
- `npm run lint` — ESLint (TS/JS)
- `npm run lint:css` — Stylelint
- `npm run lint:svg` — SVGO recursive
- `npm run type-check` — TypeScript sem emit
- `npm run fix:all` — format + lint fix + otimizar SVGs

Mais em package.json.

---

## 📚 Documentação

- [SETUP-PRODUCAO.md](./docs/SETUP-PRODUCAO.md) — **⚠️ Leia primeiro!** Variáveis de ambiente, GITHUB_TOKEN, troubleshooting
- [RESUMO-DOCUMENTACAO.md](./docs/RESUMO-DOCUMENTACAO.md) — Índice de tudo que foi documentado
- [GALERIA-SVG.md](./docs/GALERIA-SVG.md) — catálogo completo
- [CRIAR-POSTS-BLOG.md](./docs/CRIAR-POSTS-BLOG.md) — guia MDX
- [BADGE_STANDARD.md](./docs/BADGE_STANDARD.md) — padrão de badges
- [OTIMIZACAO-SVG.md](./docs/OTIMIZACAO-SVG.md) — otimização
- [AUDITORIA-LICENCAS.md](./docs/AUDITORIA-LICENCAS.md) — licenças
- [RECOMENDACOES.md](./docs/RECOMENDACOES.md) — boas práticas

---

## 🤝 Contribuição

- Leia [CONTRIBUTING.md](./CONTRIBUTING.md)
- Use Conventional Commits
- Antes do PR: `npm run fix:all` e `npm run lint:all`

Fluxo rápido:

```bash
git checkout -b feature/minha-feature
npm run fix:all
npm run lint:all
git commit -m "feat: descreva a mudança"
git push origin feature/minha-feature
```

---

## 📜 Licença & conformidade

- MIT License
- Auditoria de dependências: ver [docs/AUDITORIA-LICENCAS.md](./docs/AUDITORIA-LICENCAS.md)

---

## 💬 Comunidade

- [WhatsApp](https://wa.me/5537998553430)
- [GitHub](https://github.com/ossmoralus)

Se este projeto te ajudou: deixe uma ⭐, reporte bugs ou envie novos SVGs!

<div align="center">

[![Logo](https://galeria-drab.vercel.app/api/svg/morallus.svg?width=150)](https://galeria-drab.vercel.app)

[🌐 Site](https://galeria-drab.vercel.app) • [🖼️ Galeria](https://galeria-drab.vercel.app/galeria) • [✍️ Blog](https://galeria-drab.vercel.app/blog) • [📚 Docs](./docs/)

<sub>De desenvolvedor para desenvolvedor</sub>

</div>
