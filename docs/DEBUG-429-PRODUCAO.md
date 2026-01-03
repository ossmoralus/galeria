# 🔍 Debug: HTTP 429 em Produção

Se seu card de GitHub Stats retorna HTTP 429 em produção, siga este guia.

## 🚨 Sintomas

```
HTTP 429: Too Many Requests

Headers:
- cache-control: private, no-store, max-age=0
- x-vercel-mitigated: challenge
```

Ou no README do GitHub: Card não carrega, mostra erro ou fica em branco.

## 🔎 Diagnóstico

### 1. Teste a URL localmente

```bash
# Terminal local (funciona?)
curl "http://localhost:3000/api/github-stats/torvalds?theme=dark" \
  -H "Accept: image/svg+xml" -i

# Esperado: HTTP 200
```

**Se retornar 200 localmente** → Problema está em produção (veja passo 3)

### 2. Teste a URL de produção

```bash
# Terminal (qualquer máquina)
curl "https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark" \
  -H "Accept: image/svg+xml" -i

# Verifica status HTTP
```

**Se retornar 429** → Continue no passo 3

### 3. Verificar Vercel Environment Variables

No [Vercel Dashboard](https://vercel.com/dashboard):

1. Clique no seu projeto
2. **Settings** → **Environment Variables**
3. Procure por:
   - ✅ `GITHUB_TOKEN` = `ghp_...`?
   - ✅ `NEXT_PUBLIC_CANONICAL_URL` = seu domínio?

**Se falta `GITHUB_TOKEN`:**

```
⚠️ Sem token, GitHub limita a 60 requisições/hora por IP
```

**Solução rápida:**

```bash
# 1. Gere um token
# Vá a https://github.com/settings/tokens
# Crie novo token (classic) com scope: public_repo

# 2. Configure no Vercel
# Settings → Environment Variables
# Adicione: GITHUB_TOKEN=ghp_seu_token

# 3. Deploy novamente
git push origin main  # Ou via Vercel CLI: vercel --prod
```

### 4. Verificar Logs no Vercel

No [Vercel Dashboard](https://vercel.com/dashboard):

1. Seu projeto → **Deployments** → Última versão
2. Clique em **View Function Logs**
3. Procure por:

```
✓ Stats retrieved via GraphQL
✓ Stats calculated
✓ Language analysis complete
```

**Ou:**

```
❌ GitHub GraphQL API error: 403
❌ Rate limit exceeded
```

Se vir `403` → Seu token pode estar:

- Inválido
- Expirado
- Com scope errado

## 📊 Rate Limit Comparison

| Cenário       | Limite     | Requisições/dia |
| ------------- | ---------- | --------------- |
| **Sem token** | 60/hora    | ~1.440/dia      |
| **Com token** | 5.000/hora | ~120k/dia       |
| Recomendado   | Com token  | ✅ Com token    |

## 🔧 Soluções por Erro

### ❌ HTTP 429 (Rate Limit)

```
Causa: Sem GITHUB_TOKEN ou token inválido
Solução: Adicione GITHUB_TOKEN válido no Vercel
```

**Passo a passo:**

1. Gere token em https://github.com/settings/tokens
   - [ ] Token name: `galeria-prod`
   - [ ] Scope: `public_repo`
   - [ ] Expiration: No expiration
   - [ ] Copie: `ghp_...`

2. Configure no Vercel

   ```bash
   # Via Vercel CLI (fácil)
   vercel env add GITHUB_TOKEN
   # Cole o token quando solicitado

   # Ou via web:
   # https://vercel.com/dashboard/seu-projeto/settings/environment-variables
   # Adicione: GITHUB_TOKEN = ghp_seu_token
   # Clique Save
   ```

3. Deploy

   ```bash
   git push origin main
   # ou
   vercel --prod
   ```

4. Aguarde 5-10 minutos e teste novamente

### ❌ HTTP 403 (Forbidden)

```
Causa: Token inválido, expirado ou scope insuficiente
Solução: Regenere o token com scope correto
```

Verifique em https://github.com/settings/tokens:

- Token não expirou?
- Scope `public_repo` está selecionado?
- Token foi revogado? (gere novo)

### ❌ HTTP 500 (Server Error)

```
Causa: Erro na aplicação ou variável não configurada
Solução: Verificar logs do Vercel e console.error()
```

No Vercel:

1. Deployments → View Function Logs
2. Procure por linhas com `ERROR` ou `error`
3. Verifique a mensagem de erro

### ❌ "undefined" no Card

```
Causa: NEXT_PUBLIC_CANONICAL_URL não está configurada
Solução: Configure a variável com seu domínio
```

```bash
# Vercel
# Environment Variables → NEXT_PUBLIC_CANONICAL_URL
# Value: https://seu-dominio.com (sem / no final)
```

## ✅ Validação Final

Depois de configurar `GITHUB_TOKEN`, teste:

```bash
# 1. Verificar status
curl "https://seu-dominio.com/api/github-stats/torvalds?theme=dark" -I

# Esperado: HTTP 200

# 2. Verificar logs
# Vercel Dashboard → Deployments → View Function Logs
# Procure por: ✓ Stats retrieved

# 3. Testar no README
# Adicione ao README do GitHub:
# ![Stats](https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark)
# Commit e veja se carrega
```

## 🆘 Ainda não funciona?

1. **Verificou que token foi adicionado?**
   - [ ] Vai em https://vercel.com/dashboard/seu-projeto/settings/environment-variables
   - [ ] Vê `GITHUB_TOKEN` listado?

2. **Fez deploy novamente após adicionar token?**
   - [ ] `git push origin main` (auto-deploy do GitHub)
   - [ ] Ou `vercel --prod`

3. **Aguardou tempo suficiente?**
   - [ ] Deploy leva ~2-3 minutos
   - [ ] Token pode levar ~5-10 minutos para funcionar

4. **Token está correto?**
   - [ ] Começamento com `ghp_`?
   - [ ] Sem espaços antes/depois?
   - [ ] Token `public_repo` scope?

5. **Verificou logs?**
   - [ ] Vercel → Seu projeto → Deployments → View Function Logs
   - [ ] Procura por linhas com `error` ou `429`?

## 📚 Documentação Completa

- [docs/SETUP-PRODUCAO.md](./SETUP-PRODUCAO.md) - Setup completo
- [docs/CHECKLIST-PRODUCAO.md](./CHECKLIST-PRODUCAO.md) - Checklist pré-deploy
- [docs/BUGFIX-GITHUB-API.md](./BUGFIX-GITHUB-API.md) - Histórico de correções

---

**Ainda com dúvidas?** [Entre em contato](https://wa.me/5537998553430)
