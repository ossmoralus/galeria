> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# 📋 Recomendações e Próximos Passos

## ✅ O que foi configurado

### 1. **Package.json** ✓

- Scripts completos (dev, build, start, lint, format, type-check)
- Dependências corretas do Next.js 15 e React 19
- DevDependencies com TypeScript, ESLint e Prettier

### 2. **TypeScript Rigoroso** ✓

- `tsconfig.json` com **todas** as opções strict ativadas
- Configuração otimizada para Next.js
- Path mapping configurado (@/components, @/lib, etc)

### 3. **ESLint Ultra Rigoroso** ✓

- Formato flat config moderno (eslint.config.mjs)
- Regras TypeScript estritas:
  - Proíbe `any`
  - Exige tipagem explícita
  - Proíbe nullable checks implícitos
  - Exige nullish coalescing (??)
  - Exige optional chaining (?.)
- Regras React e React Hooks
- Integração com Prettier

### 4. **Prettier** ✓

- Configuração consistente com ESLint
- Tabs (1 espaço), aspas simples, sem trailing commas
- .prettierignore configurado

### 5. **Next.js 15** ✓

- Estrutura App Router moderna
- Páginas criadas:
  - `/` - Homepage
  - `/galeria` - Galeria de SVGs
  - `/blog` - Blog (estrutura pronta)
- Layouts configurados
- Metadata SEO

### 6. **Arquivos de Configuração** ✓

- next.config.mjs com segurança e otimizações
- vercel.json simplificado
- .gitignore completo
- .env.example

## 🎯 Próximos Passos Recomendados

### 1. **Blog - Escolher Sistema de Conteúdo**

Recomendo usar um destes readers open source:

#### Opção A: **MDX** (Mais simples)

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

- Markdown com React components
- Perfeito para blog simples
- [Documentação](https://nextjs.org/docs/app/guides/mdx)

#### Opção B: **Contentlayer** (Mais profissional)

```bash
npm install contentlayer next-contentlayer
```

- Type-safe, validação automática
- Suporta Markdown e MDX
- [Documentação](https://contentlayer.dev/)

#### Opção C: **Sanity** (CMS Headless)

```bash
npm install next-sanity @sanity/image-url
```

- CMS visual completo
- Editor WYSIWYG
- [Documentação](https://www.sanity.io/docs)

### 2. **Melhorias na Galeria SVG**

```typescript
// Criar componente SVGCard.tsx
'use client';

interface SVGCardProps {
  id: string;
  title: string;
  filename: string;
  alt: string;
  onCopy: (filename: string) => void;
  onDownload: (filename: string) => void;
  onView: (filename: string) => void;
}

export function SVGCard({ ... }: SVGCardProps) {
  // Componente reutilizável
}
```

### 3. **Adicionar Testes**

```bash
# Instalar Jest e Testing Library
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Instalar Playwright para E2E
npm install -D @playwright/test
```

### 4. **Analytics e SEO**

```bash
# Google Analytics
npm install @next/third-parties

# SEO avançado
npm install next-seo
```

### 5. **Acessibilidade**

```bash
# Linter de acessibilidade
npm install -D eslint-plugin-jsx-a11y
```

Adicionar ao `eslint.config.mjs`:

```javascript
import jsxA11y from 'eslint-plugin-jsx-a11y';

plugins: {
  'jsx-a11y': jsxA11y
}
```

### 6. **Dark Mode**

Criar context de tema:

```typescript
// app/providers.tsx
'use client';

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 7. **Otimização de Imagens**

Substituir `<img>` por `<Image>` do Next.js:

```tsx
import Image from 'next/image';

<Image
  src={`/svg/${item.filename}`}
  alt={item.alt}
  width={1200}
  height={630}
  priority={index < 2} // Primeiro SVG tem prioridade
/>;
```

### 8. **Sitemap Dinâmico**

Criar `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seu-dominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://seu-dominio.com/galeria',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: 'https://seu-dominio.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    }
  ];
}
```

### 9. **Robots.txt**

Criar `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/'
    },
    sitemap: 'https://seu-dominio.com/sitemap.xml'
  };
}
```

## 📚 Recursos Úteis

### Documentação

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [ESLint](https://eslint.org/docs/latest/)
- [React](https://react.dev/)

### Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start

# Linting
npm run lint        # Ver erros
npm run lint:fix    # Corrigir automaticamente

# Formatação
npm run format      # Formatar todos os arquivos

# Type checking
npm run type-check  # Verificar tipos sem compilar
```

## 🔥 Dicas Importantes

### 1. **Git Hooks com Husky** (Recomendado)

```bash
npm install -D husky lint-staged
npx husky init
```

Criar `.husky/pre-commit`:

```bash
#!/usr/bin/env sh
npx lint-staged
```

Adicionar ao `package.json`:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md}": [
    "prettier --write"
  ]
}
```

### 2. **Conventional Commits**

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

### 3. **Environment Variables**

Sempre use `NEXT_PUBLIC_` para variáveis client-side:

```env
# Server-side only
DATABASE_URL=...

# Client-side (exposto ao navegador)
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 4. **Performance**

- Use `loading.tsx` para estados de carregamento
- Use `error.tsx` para tratamento de erros
- Implemente Suspense Boundaries
- Lazy load componentes pesados

## 🎨 Melhorias de UI/UX

1. **Skeleton Loading** para SVGs
2. **Toast notifications** ao invés de alerts
3. **Keyboard shortcuts** (Ctrl+C para copiar, ESC para fechar modal)
4. **Drag and drop** para upload de SVGs futuros
5. **Busca e filtros** na galeria
6. **Tags e categorias** para organização
7. **Preview hover** dos SVGs
8. **Compartilhamento social**

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel login
vercel
```

### Outras Opções

- **Netlify**: Similar ao Vercel
- **Railway**: Bom para full-stack
- **Render**: Free tier generoso
- **CloudFlare Pages**: CDN global

## ⚠️ Observações

- O ESLint está **muito rigoroso** propositalmente
- Você pode relaxar algumas regras editando `eslint.config.mjs`
- O TypeScript strict pode parecer chato no início, mas evita muitos bugs
- Sempre rode `npm run type-check` antes de commitar

## 📝 Checklist Final

- [x] Package.json configurado
- [x] TypeScript strict
- [x] ESLint rigoroso
- [x] Prettier configurado
- [x] Next.js estruturado
- [x] Galeria funcional
- [ ] Blog com reader
- [ ] Testes
- [ ] CI/CD
- [ ] Deploy em produção

---

**Bom desenvolvimento! 🚀**
