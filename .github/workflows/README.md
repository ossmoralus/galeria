# 🤖 GitHub Actions Workflows

Este diretório contém todos os workflows automatizados do projeto.

## 📋 Workflows Disponíveis

### 1. 🔄 CI - Continuous Integration (`ci.yml`)

**Trigger:** Push e Pull Request para `main`, `develop`

**Jobs:**

- **Lint & Type Check**: Verifica qualidade do código
  - ESLint (JavaScript/TypeScript)
  - Stylelint (CSS)
  - SVG Optimization (opcional)
  - YAML Lint (opcional)
  - Actionlint (opcional)
  - Prettier
  - TypeScript Type Check
- **License Check**: Audita licenças das dependências
  - Gera `licenses.json`
  - Cria `LICENSES_SUMMARY.txt`
  - Upload de artefatos (30 dias)

- **Build**: Compila o projeto Next.js
  - Cache do Next.js build
  - Ambiente de produção

- **Security**: Auditoria de segurança
  - NPM Audit (nível moderado)
  - Relatório de vulnerabilidades

**Melhorias Recentes:**

- ✅ Cache de dependências npm
- ✅ Cache de build do Next.js
- ✅ Checks opcionais com `continue-on-error`
- ✅ Summaries detalhados para cada job

---

### 2. 🔒 CodeQL Security Analysis (`codeql.yml`)

**Trigger:**

- Push e Pull Request para `main`, `develop`
- Schedule: Segunda-feira às 00:00 UTC

**Funcionalidades:**

- Análise estática de segurança
- Detecção de vulnerabilidades
- Queries de segurança e qualidade
- Compatível com repositórios sem Code Scanning habilitado

**Melhorias Recentes:**

- ✅ `continue-on-error` para evitar falhas quando Code Scanning não está habilitado
- ✅ Status summary informativo
- ✅ Link para documentação

**Nota:** Se o Code Scanning não estiver habilitado, o workflow não falhará mas também não enviará resultados.

---

### 3. 🚀 Deploy Preview (`deploy-preview.yml`)

**Trigger:** Pull Request (opened, synchronize, reopened)

**Jobs:**

- **Deploy Preview**: Build do projeto para preview
  - Cache do Next.js
  - Build otimizado
  - Comentário automático no PR com URL de preview

- **Preview Checks**: Validações de qualidade
  - ESLint (crítico)
  - Stylelint (crítico)
  - TypeScript (crítico)
  - SVG Optimization (opcional)
  - Summary detalhado

**Melhorias Recentes:**

- ✅ Cache do Next.js para builds mais rápidos
- ✅ Checks críticos vs opcionais
- ✅ Comentários automáticos em PRs
- ✅ Build separado dos checks de qualidade

---

### 4. 📊 Status Check (`status.yml`)

**Trigger:** Push e Pull Request para `main`, `develop`, `developer`

**Funcionalidades:**

- Health check consolidado do projeto
- Estatísticas do projeto
- Status visual de todos os checks
- Informações de branch, commit e autor

**Checks Realizados:**

- ✅ ESLint
- ✅ TypeScript
- ✅ Stylelint
- ✅ Build
- 📊 Estatísticas de código
- 📦 Contagem de dependências

---

## 🎯 Estratégia de CI/CD

### Checks Críticos (bloqueiam merge)

- ✅ ESLint
- ✅ TypeScript Type Check
- ✅ Stylelint
- ✅ Build

### Checks Opcionais (não bloqueiam merge)

- 🟡 SVG Optimization
- 🟡 YAML Lint
- 🟡 Actionlint
- 🟡 NPM Audit (vulnerabilidades moderadas)
- 🟡 CodeQL (quando não habilitado)

### Cache Strategy

- **npm dependencies**: `actions/setup-node@v4` com `cache: 'npm'`
- **Next.js build**: `.next/cache` com hash de arquivos
- **Restore keys**: Fallback hierárquico

---

## 🚀 Como Usar

### Executar Localmente

```bash
# Todos os lints
npm run lint:all

# Lint individual
npm run lint           # ESLint
npm run lint:css       # Stylelint
npm run lint:svg       # SVG Optimization
npm run lint:yaml      # YAML Lint
npm run lint:actions   # Actionlint

# Type check
npm run type-check

# Build
npm run build

# Fix automático
npm run fix:all
```

### Debugging Workflows

1. **Ver logs detalhados**: Actions tab no GitHub
2. **Executar localmente**: Use [act](https://github.com/nektos/act)
3. **Step Summary**: Cada workflow gera um summary detalhado

### Habilitar Code Scanning

1. Vá em **Settings** > **Code security and analysis**
2. Clique em **Set up** em **Code scanning**
3. Escolha **CodeQL analysis**

---

## 📝 Notas Importantes

### Continue-on-error

Workflows usam `continue-on-error: true` para checks opcionais que não devem bloquear o pipeline.

### Concurrency

- `ci.yml` e `deploy-preview.yml` usam `cancel-in-progress: true`
- Cancela workflows redundantes automaticamente

### Permissions

- `codeql.yml` requer permissões específicas para security-events
- Outros workflows usam permissões padrão

### Vercel Integration

- Vercel faz deploy automático independentemente destes workflows
- Workflows do GitHub adicionam validações extras
- Preview URLs são geradas automaticamente pelo Vercel

---

## 🔧 Manutenção

### Atualizar Actions

```yaml
# Sempre use versões específicas
uses: actions/checkout@v4
uses: actions/setup-node@v4
uses: actions/cache@v4
```

### Adicionar Novo Check

1. Adicione script em `package.json`
2. Adicione step no `ci.yml`
3. Considere se deve ser crítico ou opcional
4. Atualize este README

### Troubleshooting

- **Workflow falha no CodeQL**: Normal se Code Scanning não estiver habilitado
- **Cache não funciona**: Verifique paths e keys
- **Build lento**: Cache pode estar invalidado, é normal ocasionalmente

---

## 📚 Recursos

- [GitHub Actions Docs](https://docs.github.com/actions)
- [Next.js CI Best Practices](https://nextjs.org/docs/pages/building-your-application/deploying/ci-build-caching)
- [CodeQL Documentation](https://docs.github.com/code-security/code-scanning)
- [Vercel GitHub Integration](https://vercel.com/docs/deployments/git/vercel-for-github)

---

**Última atualização:** 5 de dezembro de 2025
