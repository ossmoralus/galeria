> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 3 de janeiro de 2026

# ✅ Checklist: Verificar Setup de Produção

Use este checklist antes de fazer deploy.

## 📋 Pré-Deploy (Obrigatório)

- [ ] `NEXT_PUBLIC_CANONICAL_URL` está configurada com seu domínio?

  ```bash
  echo "export NEXT_PUBLIC_CANONICAL_URL=https://seu-dominio.com" >> .env.production
  ```

- [ ] Build passa sem erros?

  ```bash
  npm run build
  ```

- [ ] ESLint/Lint sem avisos?

  ```bash
  npm run lint
  ```

- [ ] TypeScript sem erros?
  ```bash
  npm run type-check
  ```

## 🔑 GitHub Token (Fortemente Recomendado)

- [ ] Token gerado em https://github.com/settings/tokens?
  - ✅ Token (classic)
  - ✅ Scope: `public_repo`
  - ✅ Expiration: No expiration (ou 90 dias)

- [ ] Token configurado no Vercel?
  - [ ] Acesse: https://vercel.com/dashboard/project-name/settings/environment-variables
  - [ ] Adicione: `GITHUB_TOKEN` = `ghp_seu_token...`
  - [ ] Marque para: Production, Preview, Development
  - [ ] Clique "Save"

## 🚀 Deploy

- [ ] Commit das mudanças: `git add . && git commit -m "chore: setup produção"`
- [ ] Push para GitHub: `git push origin main`
- [ ] Deploy completado no Vercel (aguarde ~5 minutos)

## 🧪 Pós-Deploy (Verificação)

### 1. Testar com curl

```bash
# Substitua seu-usuario
curl -I "https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark" \
  -H "Accept: image/svg+xml"

# Esperado: HTTP 200
# Errado: HTTP 429, HTTP 403, HTTP 500
```

### 2. Testar no README

Adicione ao seu README.md do perfil:

```markdown
## 📊 Meus Stats no GitHub

![GitHub Stats](https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark)
![Top Languages](https://seu-dominio.com/api/github-langs/seu-usuario?theme=dark)
```

Commit e veja se os cards carregam (aguarde ~30s).

### 3. Verificar Logs (Vercel)

No [Vercel Dashboard](https://vercel.com/dashboard):

- Clique no projeto
- **Deployments** → últimas versão → **View Function Logs**
- Procure por:
  - ✅ `✓ Stats retrieved via GraphQL` (token funcionando)
  - ✅ `✓ Stats calculated` (dados retornados)
  - ❌ `❌ GitHub GraphQL API error: 403` (rate limit!)

## 🐛 Troubleshooting Rápido

| Erro              | Causa               | Solução                               |
| ----------------- | ------------------- | ------------------------------------- |
| **HTTP 429**      | Rate limit atingido | Adicione `GITHUB_TOKEN` no Vercel     |
| **HTTP 403**      | GitHub rejeitou     | Verifique se token expirou            |
| **undefined**     | Base URL inválida   | Configure `NEXT_PUBLIC_CANONICAL_URL` |
| **HTTP 500**      | Erro no servidor    | Veja logs no Vercel                   |
| **Dados zerados** | Usuário não existe  | Verifique o username do GitHub        |

## 💾 Referências

- [docs/SETUP-PRODUCAO.md](./SETUP-PRODUCAO.md) - Guia completo
- [docs/BUGFIX-GITHUB-API.md](./BUGFIX-GITHUB-API.md) - Histórico de correções
- [Vercel Docs](https://vercel.com/docs) - Documentação do Vercel

---

✅ **Quando todos os itens estiverem marcados, seu setup está pronto para produção!**
