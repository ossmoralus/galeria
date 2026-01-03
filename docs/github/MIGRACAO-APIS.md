> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 3 de janeiro de 2026

# 🚀 Migração para Consultas Reais das APIs do GitHub

## Resumo das Mudanças

### ✅ O que foi feito

1. **GitHub Stats API** - Implementada com GraphQL + Fallback REST
   - Usa GraphQL API para dados precisos quando possível
   - Fallback automático para REST API quando GraphQL indisponível (sem token)
   - **Funciona para QUALQUER usuário público** (com ou sem token)
   - Dados mais precisos: commits, PRs e contribuições reais

2. **GitHub Languages API** - Funcional com REST API Real
   - Já estava buscando dados reais dos repositórios
   - Testado com sucesso - retorna linguagens verdadeiras dos repos
   - Exemplo: Linus Torvalds = 98% C, 0.7% Assembly, etc.
   - Funciona para **qualquer usuário público**

3. **Autenticação Flexível**
   - Token `GITHUB_TOKEN` é **OPCIONAL**
   - **Sem token**: Usa rate limit público (60 req/hora) + fallback REST
   - **Com token**: Usa GraphQL com rate limit melhorado (5.000 req/hora)
   - APIs funcionam para **qualquer usuário público** em ambos os casos

4. **Script de Teste**
   - `scripts/test-github-apis.mjs` - Valida as APIs com dados reais
   - Testado com sucesso sem token
   - Suporta usuários customizados

### 📊 Dados Reais vs Mockados

**Antes (Mockado):**

```
- totalCommits: 250 (estimado)
- totalPullRequests: 75 (estimado)
- totalContributions: 500 (estimado)
```

**Agora (Real - com token):**

```
- totalCommits: valor real via GraphQL
- totalPullRequests: valor real via GraphQL
- totalContributions: valor real (últimos 12 meses)
```

### 📊 Fluxo de Dados

```
Sem Token:
┌─────────────────┐
│  GraphQL (60/h) │ → Erro 403 (rate limit)
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  REST Fallback  │ → ✅ Dados Reais
└─────────────────┘

Com Token:
┌──────────────────────┐
│ GraphQL (5000/h)     │ → ✅ Dados Mais Precisos
└──────────────────────┘
```

### 🎯 Funcionalidade

- ✅ **Sem Token**: Funciona para qualquer usuário (fallback REST)
- ✅ **Com Token**: Melhor performance (GraphQL, 5.000 req/hora)
- ✅ **Qualquer Usuário**: Funciona com username público qualquer
- ✅ **Dados Reais**: Não tem mais dados mockados

### 📦 Novos Arquivos

- [docs/GITHUB-TOKEN-SETUP.md](GITHUB-TOKEN-SETUP.md) - Guia de configuração (opcional)
- [scripts/test-github-apis.mjs](scripts/test-github-apis.mjs) - Script para testar

### 🧪 Teste de Funcionamento

**Sem token (fallback automático):**

```bash
node scripts/test-github-apis.mjs octocat
# Retorna linguagens reais via REST API
```

**Com token (GraphQL melhorado):**

```bash
GITHUB_TOKEN=ghp_... node scripts/test-github-apis.mjs octocat
# Retorna dados mais precisos via GraphQL
```

### ⚙️ Para Começar (Opcional)

**Desenvolvimento Local (se quiser token):**

```env
# Crie .env.local (já está no .gitignore)
GITHUB_TOKEN=ghp_seu_token_aqui
```

**Produção (se quiser token):**

- Settings → Environment Variables → Adicione `GITHUB_TOKEN`

Para gerar um token: https://github.com/settings/tokens

## 🔑 Resumo: Token é Opcional!

|                       | Sem Token              | Com Token         |
| --------------------- | ---------------------- | ----------------- |
| **Funciona?**         | ✅ Sim (REST fallback) | ✅ Sim (GraphQL)  |
| **Qualquer usuário?** | ✅ Sim                 | ✅ Sim            |
| **Rate limit**        | 60 req/hora            | 5.000 req/hora    |
| **Dados reais?**      | ✅ Sim                 | ✅ Sim            |
| **Setup necessário?** | ❌ Não                 | ✅ Sim (opcional) |

Tudo está pronto e testado! 🚀
