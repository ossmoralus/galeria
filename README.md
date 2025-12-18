<div align="center">

# 🎨 Galeria Moralus OSS

[![CI](https://github.com/ossmoralus/galeria/actions/workflows/ci.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/ci.yml)
[![CodeQL](https://github.com/ossmoralus/galeria/actions/workflows/codeql.yml/badge.svg)](https://github.com/ossmoralus/galeria/actions/workflows/codeql.yml)
[![Deploy on Vercel](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)](https://galeria-morallus.vercel.app)
[![License MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)

[![Next.js 16](https://img.shields.io/badge/next.js-16.0.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/react-19.2.0-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5.6.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

### Uma galeria moderna de SVGs, badges e banners para perfis do GitHub

**Com gerador interativo de badges, blog MDX integrado e API dinâmica de SVGs**

[🌐 Visitar Site](https://galeria-morallus.vercel.app) • [🖼️ Ver Galeria](https://galeria-morallus.vercel.app/galeria) • [✍️ Blog](https://galeria-morallus.vercel.app/blog) • [📚 Documentação](./docs/)

![Banner](https://galeria-morallus.vercel.app/api/svg/morallus.svg)

</div>

## 🚀 Acesso Rápido

- 🌐 **Site**: [galeria-morallus.vercel.app](https://galeria-morallus.vercel.app)
- 🖼️ **Galeria**: [/galeria](https://galeria-morallus.vercel.app/galeria)
- ✍️ **Blog**: [/blog](https://galeria-morallus.vercel.app/blog)

## ✨ Recursos

### 🎯 Galeria de SVGs

- **22 SVGs** prontos para usar (badges + banners)
- 📦 Organizado em categorias (desenvolvimento, perfil, banners)
- 🔗 URLs diretas e permanentes
- 📋 Copiar código Markdown com um clique
- ⬇️ Download individual de cada SVG
- 🎨 Suporte a parâmetros de dimensão (`?width=`, `?height=`)

### Blog MDX

- ✍️ Sistema completo de blog com MDX
- 🏷️ Suporte a categorias e tags
- ⏱️ Tempo de leitura estimado
- 🎨 Syntax highlighting para código
- 📊 Páginas de filtro por categoria/tag
- 🔍 SEO otimizado

## 🏗️ Stack Tecnológica

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.0-3178c6?style=flat-square&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=flat-square&logo=node.js)
![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4b32c3?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.7.3-f7b93e?style=flat-square&logo=prettier)

</div>

### Core

- **Next.js** 16.0.6 - App Router + Turbopack
- **React** 19.2.0 - Biblioteca UI
- **TypeScript** 5.6.0 - Tipagem estática ultra-strict
- **Node.js** 24.x - Runtime JavaScript

### Qualidade de Código

- **ESLint** 9.39.1 - Linting com flat config (40+ regras)
- **Stylelint** 16.26.1 - Linting CSS com ordenação alfabética
- **Prettier** 3.7.3 - Formatação automática
- **TypeScript Strict** - Todas as verificações habilitadas
- **License Checker** - Auditoria automática de licenças

npm run lint:yaml # YAML Lint: validar arquivos .yml/.yaml
npm run lint:actions # Actionlint: validar workflows GitHub Actions

### Bibliotecas MDX

- `@next/mdx` - Integração MDX com Next.js
- `next-mdx-remote` - Renderização de MDX remoto
- `gray-matter` - Parse de frontmatter
- `reading-time` - Cálculo de tempo de leitura
- `rehype-highlight` - Syntax highlighting
- **yaml-lint** 1.7.0 - Validação de arquivos YAML
- **actionlint** 1.7.x - Validação de workflows GitHub Actions

```
galeria/
├── app/
│   ├── api/
│   │   └── svg/[filename]/route.ts    # API dinâmica de SVGs
│   ├── blog/                          # Sistema de blog
│   │   ├── [slug]/                    # Posts individuais
│   │   ├── category/[category]/       # Filtro por categoria
│   │   └── tag/[tag]/                 # Filtro por tag
│   ├── components/                    # Componentes reutilizáveis
│   │   ├── Logo.tsx
│   │   └── MDXContent.tsx
│   ├── galeria/                       # Galeria de SVGs
│   │   └── page.tsx
│   ├── style/
│   │   ├── globals.css               # Estilos globais + paleta
│   │   └── responsive.css            # Centraliza lógica de responsividade
│   └── layout.tsx
├── content/
│   └── posts/                         # Posts do blog (MDX)
├── docs/                              # Documentação
│   ├── CRIAR-POSTS-BLOG.md           # Guia de posts
│   └── GALERIA-SVG.md                # Galeria completa
├── lib/
│   └── posts.ts                       # Utilitários do blog
├── public/
│   ├── icons/                         # Favicons
│   ├── images/                        # Logo
│   └── svg/                           # SVGs organizados
│       ├── badges/                    # Badges (15)
│       ├── banner/                    # Banners (6)
│       └── mim/                       # Logo animado (1)
└── package.json
```

## 🎨 Paleta de Cores

Sincronizada com o logo da empresa:

```css
--accent-blue: #1a4d5c; /* azul-petróleo escuro */
--accent-green: #2d7d6e; /* verde-água profundo */
--accent-teal: #1f5f5a; /* cerceta escuro */
--accent-cyan: #3a8a7f; /* ciano intermediário */
--accent-light: #4ea89a; /* verde-água claro */
--background: #0a0a0a; /* preto profundo */
```

## 🚀 Começando

### Pré-requisitos

- Node.js ≥22.0.0
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ossmoralus/galeria.git
cd galeria

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

Acesse em [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

#### Desenvolvimento

```bash
npm run dev              # Servidor de desenvolvimento (localhost:3000)
npm run build            # Build de produção otimizado
npm start                # Servidor de produção
```

#### Qualidade de Código

```bash
npm run lint             # ESLint: verificar erros JavaScript/TypeScript
npm run lint:fix         # ESLint: corrigir erros automaticamente
npm run lint:css         # Stylelint: verificar erros CSS
npm run lint:css:fix     # Stylelint: corrigir erros CSS automaticamente
npm run lint:svg         # SVGO: verificar otimização de SVGs
npm run optimize:svg     # SVGO: otimizar todos os SVGs (recursivo)
npm run lint:all         # Executar todos os lints + type-check
- **SVGO** 3.x - Otimização e validação de SVGs
npm run fix:all          # Formatar + corrigir todos os lints
npm run format           # Prettier: formatar código
npm run format:check     # Prettier: verificar formatação
npm run type-check       # TypeScript: verificar tipos
```

#### Licenças

```bash
npm run licenses:check   # Verificar licenças permitidas
npm run licenses:generate # Gerar LICENSES.txt
```

#### Utilitários

```bash
npm run oraculo          # Assistente de diagnóstico
npm run diagnosticar     # Diagnosticar problemas no projeto
npm run fix-types        # Corrigir problemas de tipos
```

## 📖 Uso da API de SVGs

### URL Base

```
https://galeria-morallus.vercel.app/api/svg/[filename]
```

### Exemplos

```markdown
# Badge básico

![Build](https://galeria-morallus.vercel.app/api/svg/badge-build-passing.svg)

# Com largura customizada

![Build](https://galeria-morallus.vercel.app/api/svg/badge-build-passing.svg?width=200)

# Banner responsivo

![Banner](https://galeria-morallus.vercel.app/api/svg/capa-1.svg?width=100%)

# Dimensões explícitas

![Badge](https://galeria-morallus.vercel.app/api/svg/badge-devops.svg?width=300&height=50)
```

### Parâmetros Suportados

| Parâmetro | Alias | Descrição              | Exemplo                       |
| --------- | ----- | ---------------------- | ----------------------------- |
| `width`   | `w`   | Largura em pixels ou % | `?width=300` ou `?width=100%` |
| `height`  | `h`   | Altura em pixels       | `?height=50`                  |

**Nota**: Se apenas um parâmetro for fornecido, a proporção original é mantida.

## 📝 Criar Posts no Blog

Veja o guia completo em [docs/CRIAR-POSTS-BLOG.md](./docs/CRIAR-POSTS-BLOG.md)

### Exemplo rápido

```mdx
---
title: 'Meu Primeiro Post'
description: 'Uma breve descrição'
date: '2024-12-01'
author: 'Seu Nome'
category: 'Tutorial'
tags: ['react', 'nextjs', 'typescript']
published: true
---

# Conteúdo do Post

Escreva seu conteúdo aqui usando Markdown ou componentes React!
```

Salve em `content/posts/meu-primeiro-post.mdx`

## 🖼️ Galeria Completa

Veja todos os SVGs disponíveis em [docs/GALERIA-SVG.md](./docs/GALERIA-SVG.md)

### Preview Rápido

**Badges de Desenvolvimento:**

- ![Build](https://galeria-morallus.vercel.app/api/svg/badge-build-passing.svg)
- ![Tests](https://galeria-morallus.vercel.app/api/svg/badge-tests-passing.svg)
- ![Coverage](https://galeria-morallus.vercel.app/api/svg/badge-coverage-98.svg)

**Badges de Perfil:**

- ![Full Stack](https://galeria-morallus.vercel.app/api/svg/badge-full-stack.svg)
- ![DevOps](https://galeria-morallus.vercel.app/api/svg/badge-devops.svg)
- ![Cloud](https://galeria-morallus.vercel.app/api/svg/badge-cloud-architect.svg)

**Banners:**

![Banner 1](https://galeria-morallus.vercel.app/api/svg/capa-1.svg?width=600)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. 🐛 Reportar bugs
2. 💡 Sugerir novos recursos
3. 🎨 Criar novos SVGs
4. 📝 Melhorar a documentação

### Processo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovoRecurso`)
3. Commit suas mudanças (`git commit -m 'Adiciona novo recurso'`)
4. Push para a branch (`git push origin feature/NovoRecurso`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 🎓 Projeto Educativo

Este é um projeto educativo desenvolvido pela **Moralus OSS** para ajudar desenvolvedores a:

- ✅ Personalizar perfis do GitHub
- ✅ Criar badges customizadas
- ✅ Aprender Next.js 16 + React 19
- ✅ Implementar blogs com MDX
- ✅ Trabalhar com TypeScript strict mode
- ✅ Servir assets dinâmicos via API

## 📊 Status do Projeto

| Aspecto          | Status                                                                         |
| ---------------- | ------------------------------------------------------------------------------ |
| Build            | ![Status](https://img.shields.io/badge/build-passing-brightgreen)              |
| Deploy           | ![Vercel](https://img.shields.io/badge/vercel-deployed-black)                  |
| Licenças         | ![Licenses](https://img.shields.io/badge/licenses-864%20OK-green)              |
| Vulnerabilidades | ![Vulnerabilities](https://img.shields.io/badge/vulnerabilities-0-brightgreen) |
| TypeScript       | ![TS](https://img.shields.io/badge/typescript-100%25-blue)                     |

## 🛡️ Licenças e Conformidade

Este projeto utiliza **apenas licenças permissivas**:

- ✅ **MIT** (85.4%) - 736 pacotes
- ✅ **ISC** (5.2%) - 45 pacotes
- ✅ **Apache-2.0** (3.4%) - 29 pacotes
- ✅ **BSD** (3.6%) - 31 pacotes
- ⚠️ **LGPL/MPL** (0.4%) - 4 pacotes (apenas linking, sem modificação)

Veja [docs/AUDITORIA-LICENCAS.md](./docs/AUDITORIA-LICENCAS.md) para detalhes completos.

## 📞 Contato e Comunidade

<div align="center">

[![Discord](https://img.shields.io/badge/Discord-Junte--se-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/RpqNZpVn)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contato-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5537999022401)
[![GitHub](https://img.shields.io/badge/GitHub-Seguir-181717?style=for-the-badge&logo=github)](https://github.com/ossmoralus)

**Comunidade ativa • Suporte rápido • Código aberto**

</div>

## 🌟 Apoie o Projeto

Se este projeto te ajudou, considere:

- ⭐ Dar uma estrela no GitHub
- 🐛 Reportar bugs ou sugerir melhorias
- 💡 Compartilhar com outros desenvolvedores
- 🎨 Contribuir com novos SVGs ou features
- 💬 Participar da comunidade no Discord

---

<div align="center">

**Feito com 💚 pela equipe Moralus OSS**

[![Morallus](https://galeria-morallus.vercel.app/api/svg/morallus.svg?width=200)](https://galeria-morallus.vercel.app)

[Website](https://galeria-morallus.vercel.app) • [Galeria](https://galeria-morallus.vercel.app/galeria) • [Blog](https://galeria-morallus.vercel.app/blog) • [Documentação](./docs/)

</div>
