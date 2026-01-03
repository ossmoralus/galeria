> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 3 de janeiro de 2026

# 📚 Documentação (Índice)

Guias técnicos e referências do projeto, organizados por tema.

## � Estrutura de Documentação

```
docs/
├── README.md                          # Este arquivo
├── ARQUITETURA.md                     # Estrutura técnica
├── CONVENCOES-PASTAS-E-NOMES.md      # Padrões do projeto
├── AUDITORIA-LICENCAS.md             # Licenças e conformidade
├── RECOMENDACOES.md                  # Best practices
├── RELATORIO-MELHORIAS-2026-01-02.md # Changelog
├── BACKLOG.md                        # Ideias futuras
│
├── cards/                             # 📊 Cards GitHub
│   └── CUSTOMIZACAO.md               # Guia completo (consolidado)
│
├── github/                            # 🔐 APIs & GitHub
│   ├── TOKEN-SETUP.md                # Autenticação
│   ├── MIGRACAO-APIS.md              # Detalhes técnicos
│   └── ANALISE-SEGURANCA.md          # Segurança
│
├── svg/                               # 🖼️ SVGs & Badges
│   ├── GALERIA.md                    # Catálogo
│   ├── OTIMIZACAO.md                 # Boas práticas
│   ├── ANALISE-ESTILOS.md            # Análise técnica
│   └── BADGE-STANDARD.md             # Padrões
│
├── blog/                              # ✍️ Blog
│   └── CRIAR-POSTS.md                # Como criar posts MDX
│
└── docs-oraculo/                      # 📖 Histórico & releases
    └── (documentação gerencial)
```

## �🔗 Links rápidos

- Site: https://galeria-drab.vercel.app
- Galeria: https://galeria-drab.vercel.app/galeria
- Blog: https://galeria-drab.vercel.app/blog
- Termos de uso: https://galeria-drab.vercel.app/termos-de-uso
- Política de privacidade: https://galeria-drab.vercel.app/politica-de-privacidade

## 📦 Estatísticas do Projeto

- Total: **204 SVGs** em `public/svg/`
- **189 badges** em `public/svg/badges/`
- **15 banners** em `public/svg/banner/`

## 🧭 Navegação no Site

- Categorias principais: `/galeria`, `/galeria/banners`, `/galeria/skills`, `/galeria/decorativos`, `/galeria/info`, `/galeria/visitors`
- Subcategorias de skills: `/galeria/langs`, `/galeria/ferramentas`, `/galeria/tecnologias`

---

## 🚀 Deploy & Produção

**🎯 Começar rápido?** [START-HERE.md](./START-HERE.md) — 5 minutos ⚡

**📖 Guia completo:** [SETUP-PRODUCAO.md](./SETUP-PRODUCAO.md)

Inclui:

- Variáveis de ambiente obrigatórias (`NEXT_PUBLIC_CANONICAL_URL`)
- Configuração de GitHub Token (rate limits: 60 vs 5.000 req/hora)
- Passo a passo para setup no Vercel
- Troubleshooting de erros HTTP 429, undefined, etc.

**✅ Checklist rápido:** [CHECKLIST-PRODUCAO.md](./CHECKLIST-PRODUCAO.md)

---

## 🧱 Arquitetura & Convenções

- [ARQUITETURA.md](./ARQUITETURA.md) - Estrutura técnica do projeto
- [CONVENCOES-PASTAS-E-NOMES.md](./CONVENCOES-PASTAS-E-NOMES.md) - Padrões de nomenclatura

---

## 📊 Cards GitHub Customizáveis

**Documentação consolidada:** [cards/CUSTOMIZACAO.md](./cards/CUSTOMIZACAO.md)

Guia completo sobre os endpoints de GitHub Stats e Languages, incluindo:

- Parâmetros de customização (name, theme, width, height, etc.)
- Exemplos de uso
- Configuração de token (opcional)
- Temas disponíveis

**Para testar:** https://galeria-drab.vercel.app/cards-showcase.html

---

## 🔐 APIs & GitHub

📁 **Pasta:** [github/](./github/)

- [TOKEN-SETUP.md](./github/TOKEN-SETUP.md) - Guia de autenticação
- [MIGRACAO-APIS.md](./github/MIGRACAO-APIS.md) - Detalhes técnicos da migração
- [ANALISE-SEGURANCA.md](./github/ANALISE-SEGURANCA.md) - Análise de segurança

---

## 🖼️ Galeria & SVGs

📁 **Pasta:** [svg/](./svg/)

- [GALERIA.md](./svg/GALERIA.md) - Catálogo + exemplos da API
- [OTIMIZACAO.md](./svg/OTIMIZACAO.md) - Boas práticas de SVG
- [ANALISE-ESTILOS.md](./svg/ANALISE-ESTILOS.md) - Análise de estilos inline
- [BADGE-STANDARD.md](./svg/BADGE-STANDARD.md) - Padrão dos badges

---

## ✍️ Blog

📁 **Pasta:** [blog/](./blog/)

- [CRIAR-POSTS.md](./blog/CRIAR-POSTS.md) - Como criar posts em MDX

---

## 🔒 Qualidade & Licenças

- [AUDITORIA-LICENCAS.md](./AUDITORIA-LICENCAS.md) - Auditoria de licenças
- [RECOMENDACOES.md](./RECOMENDACOES.md) - Recomendações gerais
- [RELATORIO-MELHORIAS-2026-01-02.md](./RELATORIO-MELHORIAS-2026-01-02.md) - Melhorias implementadas

---

## 📖 Documentação do Oracle

📁 **Pasta:** [docs-oraculo/](./docs-oraculo/)

Guias históricos, releases e feedback do projeto.
