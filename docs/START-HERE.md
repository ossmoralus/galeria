> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 3 de janeiro de 2026

# 🎯 Comece Aqui: GitHub Stats Cards Funcionando

Você quer colocar os cards de GitHub Stats em produção? **5 minutos de trabalho.**

---

## ⚡ Quick Start (Passo a Passo)

### 1️⃣ Gerar Token do GitHub (2 min)

Abra: https://github.com/settings/tokens

```
1. Clique "Generate new token" → "Generate new token (classic)"
2. Preencha assim:
   • Token name: galeria-prod
   • Expiration: No expiration
   • Scopes: ☑️ public_repo (marque apenas esta)
3. Clique "Generate token"
4. Copie o valor (começa com ghp_)
   ⚠️ Será mostrado uma única vez!
```

### 2️⃣ Configurar no Vercel (2 min)

Abra: https://vercel.com/dashboard/seu-projeto/settings/environment-variables

```
1. Clique "Add New"
2. Preencha:
   • Name: GITHUB_TOKEN
   • Value: ghp_cole_o_token_aqui
   • Environments: ☑️ Production ☑️ Preview ☑️ Development
3. Clique "Save"
```

### 3️⃣ Deploy (1 min)

```bash
git push origin main
# ou via CLI: vercel --prod
```

✅ **Pronto!** Aguarde 5-10 minutos e os cards funcionarão.

---

## 🧪 Teste Rápido

Após deploy completar, execute:

```bash
curl -I "https://seu-dominio.com/api/github-stats/torvalds?theme=dark"

# Esperado: HTTP 200
# Errado: HTTP 429 (confira se token foi adicionado)
```

---

## ❌ Deu erro?

| Erro          | Solução                                                                       |
| ------------- | ----------------------------------------------------------------------------- |
| **HTTP 429**  | Token não foi salvo no Vercel. Verifique se aparece em Environment Variables. |
| **HTTP 403**  | Token expirou ou scope errado. Gere novo token em github.com/settings/tokens. |
| **undefined** | Falta `NEXT_PUBLIC_CANONICAL_URL`. Adicione no Vercel com seu domínio.        |

**Guia completo:** 👉 [docs/DEBUG-429-PRODUCAO.md](./docs/DEBUG-429-PRODUCAO.md)

---

## 📚 Documentação

**Dependendo do seu caso:**

```
├─ "Quero setup completo" → SETUP-PRODUCAO.md
├─ "Só checklist rápido" → CHECKLIST-PRODUCAO.md
├─ "Dá HTTP 429" → DEBUG-429-PRODUCAO.md
├─ "Quero diagramas" → VISUAL-GUIDE.md
└─ "Entender tudo" → RESUMO-DOCUMENTACAO.md
```

---

## 🎓 Entender o Problema

**Por que HTTP 429?**

```
Sem token:
  GitHub limita a 60 requisições/hora por IP
  Com 100 visitors: Atingido em ~30-60 minutos

Com token:
  GitHub permite 5.000 requisições/hora
  Com 1.000 visitors: Sem problemas
```

**Solução:** Configurar `GITHUB_TOKEN` leva 2 minutos.

---

## ✨ Exemplo Final

Depois de configurar, seu README fica assim:

```markdown
## 📊 Meus Stats no GitHub

![GitHub Stats](https://seu-dominio.com/api/github-stats/seu-usuario?theme=dark)

![Top Languages](https://seu-dominio.com/api/github-langs/seu-usuario?theme=dark)
```

E os cards renderizam com dados reais! 🎉

---

## 🆘 Precisa de Ajuda?

1. **Erro específico?** → [docs/DEBUG-429-PRODUCAO.md](./docs/DEBUG-429-PRODUCAO.md)
2. **Setup completo?** → [docs/SETUP-PRODUCAO.md](./docs/SETUP-PRODUCAO.md)
3. **Checklist?** → [docs/CHECKLIST-PRODUCAO.md](./docs/CHECKLIST-PRODUCAO.md)
4. **WhatsApp** → https://wa.me/5537998553430

---

**Status:** ✅ Tudo funcionando. Só precisa de token em produção.

**Tempo:** ~5 minutos de configuração.

**Próximo passo:** 👉 Abra https://github.com/settings/tokens e comece!
