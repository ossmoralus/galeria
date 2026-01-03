# 🔧 Troubleshoot: Commits Mostrando 0 e Languages Erradas

**Seu problema:**

- ✅ Configurou GITHUB_TOKEN no Vercel
- ❌ Commits ainda aparecem como 0
- ❌ Languages mostrando dados incorretos

---

## 🔍 Diagn óstico

### Passo 1: Verificar se GITHUB_TOKEN está configurado

Acesse: https://vercel.com/dashboard/seu-projeto/settings/environment-variables

```
Procure por:
✅ GITHUB_TOKEN = ghp_...
```

Se NÃO estiver lá → Você não configurou, volte para START-HERE.md

Se ESTIVER lá → Prossiga para Passo 2

---

### Passo 2: Verificar se FEZ DEPLOY APÓS configurar

**Este é o erro mais comum!**

Quando você adiciona uma variável no Vercel, ela NÃO entra em vigor automaticamente. Você **PRECISA fazer um novo deploy** para que o código acesse a variável.

```bash
# Opção 1: Push no GitHub (vercel faz deploy automático)
git push origin main

# Opção 2: CLI do Vercel
vercel --prod

# Opção 3: No Vercel Dashboard
Deployments → "Redeploy" → Latest Commit
```

Aguarde 2-5 minutos para o deploy terminar.

---

### Passo 3: Teste novamente

Após deploy estar "Ready" no Vercel Dashboard:

```bash
curl -s "https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark" \
  -H "Accept: image/svg+xml" | grep -o "[0-9.]*K\|>0<\|>1<\|>2<\|>3<\|>4<\|>5<\|>6<\|>7<\|>8<\|>9<"
```

Deve aparecer os valores reais (ex: 122.7K para commits).

---

## 📊 Por que commits aparecem como 0?

### Causa 1: Sem Token (Mais Provável)

Se está vendo `0` commitss, a API está fazendo fallback para REST e **encontrando commits zerados**.

```
Logs mostram:
❌ GitHub GraphQL API error: 403
📡 Fetching GitHub stats via REST API
✓ Stats calculated: { totalCommits: 0, ... }
```

**Solução:** Configure GITHUB_TOKEN e faça deploy novo.

### Causa 2: Token Inválido/Expirado

Se configurou token mas ainda mostra 0:

```bash
# Verificar se token é válido
curl -H "Authorization: token ghp_seu_token" \
  https://api.github.com/user

# Deve retornar seus dados do GitHub, não erro 401
```

Se dá erro 401 → Seu token **expirou ou é inválido**.

**Solução:** Gere novo token em https://github.com/settings/tokens

### Causa 3: Usuário não existe no GitHub

```bash
# Testar com um usuário que existe
curl "https://seu-dominio.com/api/github-stats/torvalds?theme=dark" \
  -H "Accept: image/svg+xml"
```

Se funciona com `torvalds` mas não com seu usuário → Seu usuário pode não existir ou está privado.

---

## 🌐 Por que languages erradas?

### Possível Causa 1: Caching Antigo

O SVG é cacheado por 1 hora. Se você mudou seus repositórios, pode estar vendo dados antigos.

**Solução:** Aguarde 1 hora ou limpe cache:

```bash
# Com curl (ignora cache)
curl "https://seu-dominio.com/api/github-langs/seu-usuario?theme=dark" \
  -H "Cache-Control: no-cache" \
  -H "Accept: image/svg+xml"
```

### Possível Causa 2: Repositórios Privados

A API de "top languages" **SÓ vê repositórios públicos**. Se suas linguagens vêm de repos privados, elas não aparecerão.

**Solução:**

1. Torne alguns repos públicos
2. Ou use repositórios com mais linguagens públicas

### Possível Causa 3: Repositórios Fork Não Contam

Por padrão, repositórios fork **NÃO são contados** para evitar inflar os números.

Se sua maioria de repos são forks → Vai aparecer poucas linguagens.

---

## 🔧 Checklist Completo

```
[ ] 1. Acessei https://vercel.com/dashboard/seu-projeto/settings/environment-variables
[ ] 2. Confirmo que GITHUB_TOKEN está lá com valor ghp_...
[ ] 3. Fiz novo deploy (git push ou vercel --prod)
[ ] 4. Aguardei 2-5 minutos para deploy terminar
[ ] 5. No Vercel Dashboard, deployments mostra "Ready" ✓
[ ] 6. Testei curl e vejo números reais (não 0, não HTML)
[ ] 7. Testei com usuário conhecido (torvalds) e funcionou

Se tudo acima OK → Problema resolvido!
Se ainda não funciona → Continue abaixo
```

---

## 🆘 Ainda não funciona?

### Debugging: Verificar Logs no Vercel

1. Vá para: https://vercel.com/dashboard/seu-projeto
2. **Deployments** → Última versão
3. Clique em **Function Logs**
4. Procure por:

```
✓ Using GitHub token for authentication
✓ Stats retrieved via GraphQL
```

Se vir isso → Token está funcionando ✅

Se vir:

```
⚠ No GitHub token available
❌ GitHub GraphQL API error: 403
```

Seu token **NÃO foi configurado corretamente**.

---

### Debugging: Verificar Variáveis no Deploy

No mesmo Function Logs, procure por:

```
Token: ghp_...
```

Se não vê nada → Variável não foi propagada.

**Solução:**

1. Remova a variável no Vercel
2. Aguarde 1 minuto
3. Adicione novamente
4. Faça novo deploy

---

## 📝 Roteiro Completo de Ação

**Se commits aparecem como 0:**

```
1. ✅ Verifique se GITHUB_TOKEN está em Environment Variables
2. ✅ Se sim, faça novo deploy (git push origin main)
3. ✅ Aguarde 5 minutos
4. ✅ Teste: curl api/github-stats/seu-usuario
5. ✅ Se ainda 0, tente com usuário conhecido (torvalds)
6. ✅ Se torvalds funciona, seu usuário pode estar privado
7. ✅ Se torvalds NÃO funciona, token não foi propagado → refaça steps 1-3
```

**Se languages erradas:**

```
1. ✅ Aguarde 1 hora para cache expirar
2. ✅ Verifique se tem repos públicos com diversas linguagens
3. ✅ Se tudo privado/forks → não vai aparecer muito
4. ✅ Teste com outro usuário conhecido (torvalds)
```

---

## 🆗 Está funcionando?

Deveria ver algo assim:

```svg
<!-- Commits -->
<text x="35" y="160" ... >
  122.7K  ← Número real, não 0!
</text>

<!-- Languages -->
<text x="35" y="130" ... >
  JavaScript  ← Linguagens reais!
</text>
```

Se está vendo isso → **Problema resolvido!** ✅

---

## 📞 Precisa de Ajuda?

- [docs/START-HERE.md](./START-HERE.md) - Setup rápido
- [docs/DEBUG-429-PRODUCAO.md](./DEBUG-429-PRODUCAO.md) - HTTP 429
- WhatsApp: https://wa.me/5537998553430

---

**Última atualização:** 3 de janeiro de 2026
