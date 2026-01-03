# 🐛 Correção: API GitHub não estava buscando dados reais

**Data:** 3 de janeiro de 2026  
**Status:** ✅ RESOLVIDO

## Problema

A API de GitHub Stats e GitHub Languages estava retornando valores zerados (0) nos cards, mesmo quando consultada com usuários válidos. O nome do usuário também aparecia como `@@undefined`.

### Sintomas

- Todos os valores de stats apareciam como 0 (commits, PRs, contribuições, repositórios)
- Nome do usuário aparecia como `@@undefined` ao invés de `@username`
- As languagens eram buscadas mas retornavam fallback values

## Causa Raiz

No **Next.js 16**, os parâmetros dinâmicos de rotas (`params`) retornam uma **Promise** e devem ser acessados com `await`. Os handlers não estavam aguardando o resolve da Promise antes de acessar `params.username`.

### Arquivos afetados

1. **[lib/api/githubStatsHandlers.ts](lib/api/githubStatsHandlers.ts)**
   - `handleGitHubStatsRequest()`: Parâmetro `params` não tinha `await`
   - `handleGitHubStatsPreviewRequest()`: Mesmo problema

2. **[lib/api/githubLangsHandlers.ts](lib/api/githubLangsHandlers.ts)**
   - `handleGitHubLangsRequest()`: Parâmetro `params` não tinha `await`
   - `handleGitHubLangsPreviewRequest()`: Mesmo problema

## Solução Implementada

### 1. Atualizar type signature de `params`

**Antes:**

```typescript
{ params }: { params: { username: string } }
```

**Depois:**

```typescript
{ params }: { params: Promise<{ username: string }> }
```

### 2. Adicionar `await` ao acessar `params`

**Antes:**

```typescript
const { username } = params;
```

**Depois:**

```typescript
const { username } = await params;
```

### 3. Tornar handlers assíncronos

**Antes:**

```typescript
export function handleGitHubStatsPreviewRequest(...)
```

**Depois:**

```typescript
export async function handleGitHubStatsPreviewRequest(...)
```

### 4. Melhorar logging para diagnóstico

Adicionados logs detalhados em [lib/github-stats.ts](lib/github-stats.ts):

- ✓ `fetchGitHubStats()`: Mostra se está usando GraphQL ou REST, logs de sucesso
- ✓ `fetchGitHubStatsRest()`: Detalhes de usuários encontrados e repositórios
- ✓ `fetchGitHubTopLanguages()`: Mostra repositories processados e linguagens encontradas

## Resultados

### Teste com `octocat`

```
📡 Fetching GitHub stats for octocat...
⚠ No GitHub token available - using unauthenticated requests (60 req/hour limit)
❌ GitHub GraphQL API error: 403  (fallback para REST)
✓ User data retrieved: octocat has 8 public repos and 21384 followers
✓ Found 8 repositories for octocat
✓ Stats calculated: {
  totalCommits: 672,
  totalPullRequests: 6,
  totalContributions: 80,
  followers: 21384,
  publicRepos: 8
}
```

### Linguagens recuperadas

```
✓ Top languages retrieved: Ruby (91%), CSS (6.6%), HTML (1.9%), Shell (0.4%), JavaScript (0%)
```

## Comportamento do Rate Limit

⚠️ **Observação importante:** Sem um `GITHUB_TOKEN` configurado, a GraphQL API retorna erro 403 (rate limit). O código implementa fallback automático para REST API que consegue recuperar todos os dados com sucesso.

### Em Produção (Vercel/Servidor)

**Problema descoberto:** A produção retorna HTTP 429 quando trata mais de ~60 requisições/hora porque:

1. Sem `GITHUB_TOKEN`: Limite de **60 requisições/hora** por IP
2. Com tráfego: Limite é atingido rapidamente
3. GitHub bloqueia a requisição: HTTP 429

**Solução:** Configurar `GITHUB_TOKEN` no Vercel

👉 **[docs/SETUP-PRODUCAO.md](./SETUP-PRODUCAO.md)** - Guia completo de setup

### Recomendação

Para melhor performance, **configure obrigatoriamente em produção**:

```bash
GITHUB_TOKEN=seu_token_aqui
```

Isso permite:

- GraphQL: 5.000 requisições/hora (ao invés de 60 unauthenticated)
- Dados mais precisos de commits
- Sem HTTP 429 em produção

**Rate Limits:**
| Cenário | Limite | 
|---------|--------|
| Sem token (unauthenticated) | 60/hora | 
| Com token (authenticated) | 5.000/hora |

## Arquivos Modificados

- [lib/api/githubStatsHandlers.ts](lib/api/githubStatsHandlers.ts) - ✅
- [lib/api/githubLangsHandlers.ts](lib/api/githubLangsHandlers.ts) - ✅
- [lib/github-stats.ts](lib/github-stats.ts) - ✅ (adicionados logs)

## Próximas Steps (Opcional)

1. **Adicionar configuração de GITHUB_TOKEN** no `.env.local` ou `.env.production`
2. **Implementar cache** mais agressivo para evitar rate limit
3. **Adicionar retry logic** com backoff exponencial para requisições que falham por rate limit
