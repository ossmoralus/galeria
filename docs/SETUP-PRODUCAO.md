# 🚀 Setup para Produção

Guia para configurar corretamente o projeto em produção (Vercel, AWS, etc).

## 📋 Variáveis de Ambiente Obrigatórias

### NEXT_PUBLIC_CANONICAL_URL (Obrigatório em Produção)

**Descrição:** URL canônica do seu site em produção.

```bash
NEXT_PUBLIC_CANONICAL_URL=https://galeria-drab.vercel.app
```

**Uso:** Geração de URLs absolutas para badges, cards e snippets de código que serão compartilhados em READMEs do GitHub.

**Onde configurar:**
- **Vercel:** Settings → Environment Variables
- **AWS/Self-hosted:** Arquivo `.env.production` ou variáveis de sistema

---

## 🔑 Variáveis de Ambiente Opcionais (Mas Recomendadas)

### GITHUB_TOKEN (Altamente Recomendado)

**Descrição:** Token de autenticação do GitHub para aumentar rate limits.

**Por que usar:**
- Sem token: **60 requisições/hora** ao GitHub (rate limit anônimo)
- Com token: **5.000 requisições/hora** (rate limit autenticado)

Se o seu site tiver tráfego, **sem token você atingirá o limite rapidamente** e os cards de GitHub Stats não renderizarão.

### Como Gerar um GitHub Token

1. Acesse [github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Configure assim:
   - **Token name:** `galeria-github-stats-prod`
   - **Expiration:** No expiration (ou 90 dias e renovar periodicamente)
   - **Scopes:** Selecione apenas `public_repo`
4. Copie o token (será mostrado apenas uma vez!)

### Configurar na Vercel

1. Vá para seu projeto no [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Settings** → **Environment Variables**
3. Adicione:
   - **Name:** `GITHUB_TOKEN`
   - **Value:** `ghp_seu_token_aqui`
   - **Environments:** Production, Preview, Development
4. Clique em **Save**
5. **Deploy** uma nova versão para aplicar as mudanças

### Exemplo de Configuração

```env
# .env.production (local ou CI/CD)
NEXT_PUBLIC_CANONICAL_URL=https://seu-dominio.com.br
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Opcional: URL base alternativa
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br

# Upstash Redis (para API de visitantes)
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxxxxxxx
```

---

## ✅ Checklist de Deploy

- [ ] Variável `NEXT_PUBLIC_CANONICAL_URL` configurada com seu domínio
- [ ] Variável `GITHUB_TOKEN` gerada e configurada (se possível)
- [ ] Build local testado: `npm run build`
- [ ] Deploy em staging/preview funcionando
- [ ] Cards de GitHub Stats renderizando com dados reais
- [ ] API de visitantes funcionando (se usar)
- [ ] SSL/HTTPS habilitado

---

## 🔍 Testando a Configuração

### Testar Cards GitHub Stats

```bash
# Substitua SEU_DOMINIO e SEU_USUARIO
curl "https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark" \
  -H "Accept: image/svg+xml"
```

Esperado: Resposta HTTP 200 com SVG contendo dados reais

### Testar Rate Limit

```bash
# Verificar rate limit do GitHub sem token
curl -H "Authorization: Bearer seu-token-aqui" \
  https://api.github.com/rate_limit | jq .
```

---

## 🚨 Troubleshooting

### Problema: HTTP 429 (Rate Limit)

**Causa:** Atingiu o limite de 60 requisições/hora sem token

**Solução:**
1. Gere um `GITHUB_TOKEN` seguindo os passos acima
2. Configure a variável no Vercel/seu host
3. Faça um novo deploy
4. Teste novamente após ~5 minutos

### Problema: "Base URL não configurada"

**Causa:** `NEXT_PUBLIC_CANONICAL_URL` não está definida em produção

**Solução:** Configure a variável com seu domínio:
```
NEXT_PUBLIC_CANONICAL_URL=https://seu-dominio.com
```

### Problema: Cards mostram "undefined"

**Causa:** Base URL incorreta ou não definida

**Solução:** Verifique se:
1. `NEXT_PUBLIC_CANONICAL_URL` está definida
2. Não tem `/` no final (será removido automaticamente)
3. Fez um novo deploy após a mudança

---

## 📚 Documentos Relacionados

- [docs/cards/CUSTOMIZACAO.md](./cards/CUSTOMIZACAO.md) - Guia de customização dos cards
- [BUGFIX-GITHUB-API.md](../BUGFIX-GITHUB-API.md) - Histórico de correções da API
- [docs/GUIA-RAPIDO.md](./GUIA-RAPIDO.md) - Guia rápido de uso
