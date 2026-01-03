# 🔧 GitHub Token - Configuração Opcional

## 🎯 O Token é Opcional?

**SIM!** As APIs funcionam para **qualquer usuário público do GitHub** sem token.

O token serve **APENAS para aumentar o rate limit**, não para autenticação:

- **Sem token**: 60 requisições/hora (público)
- **Com token**: 5.000 requisições/hora (autenticado)

## 📊 Comparativo

| Aspecto                         | Sem Token            | Com Token            |
| ------------------------------- | -------------------- | -------------------- |
| Funciona para qualquer usuário? | ✅ Sim               | ✅ Sim               |
| Rate limit                      | 60 req/hora          | 5.000 req/hora       |
| Dados obtidos                   | Dados públicos reais | Dados públicos reais |
| Custo                           | Grátis               | Grátis               |
| Setup necessário?               | ❌ Não               | ✅ Sim (opcional)    |

## ⚡ Quando Usar Token?

- **Com token**: Site em alta demanda (muitos usuários consultando)
- **Sem token**: Teste local, baixo volume de requisições

## Como Criar um Token (Se Quiser)

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome significativo: `github-stats-api`
4. Selecione as permissões necessárias:
   - ✅ `public_repo` (para acessar dados públicos)
   - ✅ `read:user` (para dados do perfil)
5. Clique em "Generate token"
6. **Copie o token** (você não conseguirá vê-lo novamente!)

## Como Configurar (Opcional)

### Desenvolvimento Local

Crie um arquivo `.env.local` na raiz do projeto (já está no `.gitignore`):

```env
GITHUB_TOKEN=ghp_seu_token_super_secreto_aqui
```

### Produção (Vercel)

1. Acesse o painel de projeto na Vercel
2. Vá em "Settings" > "Environment Variables"
3. Adicione uma nova variável:
   - **Name**: `GITHUB_TOKEN`
   - **Value**: Cole seu token
   - **Environments**: Selecione os ambientes desejados

## 🧪 Testar Sem Token

```bash
# Funciona perfeitamente sem token!
node scripts/test-github-apis.mjs seu-usuario

# Mostrará rate limit reduzido, mas dados reais
```

## 🧪 Testar Com Token

```bash
# Configure o token no .env.local primeiro
node scripts/test-github-apis.mjs seu-usuario

# Ou passe na linha de comando
GITHUB_TOKEN=ghp_... node scripts/test-github-apis.mjs seu-usuario
```

## ⚠️ Segurança

- **Nunca** compartilhe seu token em repositórios públicos
- O `.gitignore` já ignora `.env.local`
- Se vazar, vá em https://github.com/settings/tokens e revogue imediatamente
- O token pode acessar repositórios privados seus (cuidado!)

## Troubleshooting

**"Usuário não encontrado"**

- Verifique se o username está correto
- O usuário precisa ter repositórios públicos

**Rate limit excedido**

- Configure um token para aumentar de 60 para 5.000 req/hora
- Ou aguarde 1 hora para resetar

**401 Unauthorized**

- Token inválido ou expirado
- Revogue e gere um novo

## Exemplos de Uso

```bash
# Testar API pública (sem token)
node scripts/test-github-apis.mjs torvalds
node scripts/test-github-apis.mjs octocat

# Com token (melhor rate limit)
GITHUB_TOKEN=ghp_abc123 node scripts/test-github-apis.mjs seu-usuario
```
