# 📊 Guia Completo - Cards GitHub Customizáveis

> **Última atualização:** 3 de janeiro de 2026  
> **Status:** Produção ✅

## 📋 Visão Geral

Este documento consolida toda a informação sobre os cards GitHub Stats e GitHub Languages, incluindo:

- Parâmetros de customização disponíveis
- Exemplos práticos de uso
- Token de autenticação (opcional)
- Temas e estilos

---

## 🎯 Tipos de Cards

### 1️⃣ GitHub Stats Card

**Endpoint:** `/api/github-stats/{username}`

Exibe estatísticas do usuário GitHub:

- Total de commits
- Pull requests
- Issues
- Contribuições
- Seguidores
- Repositórios públicos

### 2️⃣ GitHub Languages Card

**Endpoint:** `/api/github-langs/{username}`

Exibe linguagens de programação mais usadas com percentual.

---

## 🔧 Parâmetros de Query

### GitHub Stats Card - `/api/github-stats/{username}`

| Parâmetro       | Tipo    | Padrão        | Descrição                                                         |
| --------------- | ------- | ------------- | ----------------------------------------------------------------- |
| `name`          | string  | `@{username}` | Nome customizado no card                                          |
| `theme`         | string  | `dark`        | Tema visual: `dark`, `light`, `neon`, `sunset`, `ocean`, `forest` |
| `width` / `w`   | number  | `500`         | Largura do card em pixels                                         |
| `height` / `h`  | number  | `400`         | Altura do card em pixels                                          |
| `border_radius` | number  | `8`           | Raio da borda em pixels                                           |
| `show_border`   | boolean | `true`        | Mostrar borda do card                                             |
| `border_width`  | number  | `2`           | Largura da borda em pixels                                        |

**Exemplo:**

```
/api/github-stats/torvalds?name=Linus%20Torvalds&theme=neon&width=600&height=450
```

### GitHub Languages Card - `/api/github-langs/{username}`

| Parâmetro      | Tipo   | Padrão        | Descrição                                                         |
| -------------- | ------ | ------------- | ----------------------------------------------------------------- |
| `name`         | string | `@{username}` | Nome customizado no card                                          |
| `theme`        | string | `dark`        | Tema visual: `dark`, `light`, `neon`, `sunset`, `ocean`, `forest` |
| `width` / `w`  | number | `500`         | Largura do card em pixels                                         |
| `height` / `h` | number | `400`         | Altura do card em pixels                                          |

---

## 🌈 Temas Disponíveis

- **dark** - Fundo escuro com textos claros (padrão)
- **light** - Fundo claro com textos escuros
- **neon** - Cores vibrantes cyberpunk
- **sunset** - Tons quentes laranja/vermelho
- **ocean** - Tons azuis/aquamarina
- **forest** - Tons verdes naturais

---

## 💡 Exemplos de Uso

### Markdown (README)

```markdown
## Estatísticas GitHub

![GitHub Stats](https://galeria-drab.vercel.app/api/github-stats/seu-usuario)

## Linguagens

![Languages](https://galeria-drab.vercel.app/api/github-langs/seu-usuario?theme=ocean)
```

### HTML

```html
<img
  src="https://galeria-drab.vercel.app/api/github-stats/seu-usuario?theme=neon&width=700"
  alt="GitHub Stats"
/>
```

### Com Customização Completa

```markdown
![Stats Customizado](https://galeria-drab.vercel.app/api/github-stats/octocat?name=GitHub%20Octocat&theme=sunset&width=600&height=450&border_radius=16)
```

---

## 🔐 Token de Autenticação (Opcional)

### Por que usar um token?

- **Sem token:** 60 requests/hora (suficiente para uso ocasional)
- **Com token:** 5.000 requests/hora (recomendado para uso em produção)

### ⚙️ Configuração

#### 1. Desenvolvimento Local

Crie um arquivo `.env.local` na raiz do projeto:

```bash
GITHUB_TOKEN=seu_token_github_aqui
```

#### 2. Produção (Vercel)

1. Acesse seu repositório no GitHub
2. Vá para **Settings → Secrets and variables → Actions**
3. Clique em **New repository secret**
4. Nome: `GITHUB_TOKEN`
5. Valor: Seu personal access token
6. Deploy novamente no Vercel

### 📌 Como Gerar um Personal Access Token

1. Acesse https://github.com/settings/tokens/new
2. Marque apenas `public_repo` (acesso somente leitura a repositórios públicos)
3. Defina expiração (sem limite recomendado)
4. Gere e copie o token
5. Guarde em local seguro (não compartilhe!)

---

## ✨ Principais Mudanças (2026)

### Novo Parâmetro: `name`

Permite customizar o nome exibido no card, independente do username.

```
/api/github-stats/torvalds?name=Linus%20Torvalds
```

### Dimensões Customizáveis

Ajuste width/height para se adequar ao seu layout.

```
/api/github-stats/seu-usuario?width=600&height=500
```

### Tema `neon`

Novo tema vibrante com cores RGB para designs modernos.

```
/api/github-stats/seu-usuario?theme=neon
```

### Estilo de Borda

Controle visibilidade e espessura da borda.

```
/api/github-stats/seu-usuario?show_border=true&border_width=3
```

---

## 🧪 Teste os Cards

Acesse: https://galeria-drab.vercel.app/cards-showcase.html

Uma página interativa para testar todas as combinações de parâmetros.

---

## 🐛 Problemas Comuns

### "Usuário não encontrado"

- Verifique se o username está correto
- O repositório/usuário é público

### Card em branco

- Verifique a console do navegador (DevTools → Network)
- Verifique rate limits: `curl -H "Authorization: token SEU_TOKEN" https://api.github.com/rate_limit`

### Imagem não carrega em README

- Use a URL completa (https://...)
- Verifique se o endpoint está respondendo

---

## 📚 Arquivos Relacionados

- [GITHUB-TOKEN-SETUP.md](../github/TOKEN-SETUP.md) - Guia detalhado de token
- [MIGRACAO-APIS-GITHUB.md](../github/MIGRACAO-APIS.md) - Detalhes técnicos da migração
- [github-stats.ts](../../lib/github-stats.ts) - Implementação do backend
