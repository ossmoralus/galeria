> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# 🎨 Galeria de SVGs - Catálogo Completo e Uso da API

Galeria completa de badges e banners disponíveis para uso em perfis do GitHub e projetos open source.

## 🔗 URL Base

```
https://galeria-drab.vercel.app/api/svg/
```

## 🛠️ Uso da API e Customização de Tamanho

Você pode usar os SVGs diretamente no seu README do GitHub com links customizáveis.

### 📌 Formato Básico

```markdown
![Badge](https://galeria-drab.vercel.app/api/svg/NOME_DO_ARQUIVO.svg)
```

### 📏 Customização de Tamanho

A API suporta parâmetros de largura (`width` ou `w`) e altura (`height` ou `h`) para redimensionamento dinâmico.

| Parâmetro | Alias | Descrição                         | Exemplo                   |
| --------- | ----- | --------------------------------- | ------------------------- |
| `width`   | `w`   | Define a largura em pixels ou `%` | `?width=300` ou `?w=100%` |
| `height`  | `h`   | Define a altura em pixels         | `?height=50` ou `?h=50`   |

**Comportamento Inteligente:**

- Se apenas um parâmetro for fornecido, a **proporção original é mantida**.
- Se `width=100%` for usado, o SVG ocupará toda a largura disponível, mantendo a proporção.
- Se ambos forem fornecidos, o SVG usará as dimensões exatas, podendo distorcer a proporção.

### Exemplos com Tamanho Personalizado

```markdown
# Badge com largura customizada (proporção mantida)

![Badge](https://galeria-drab.vercel.app/api/svg/badge-devops.svg?width=200)

# Banner responsivo (100% de largura)

![Banner](https://galeria-drab.vercel.app/api/svg/capa-4.svg?width=100%)

# Dimensões explícitas (proporção alterada)

![Badge](https://galeria-drab.vercel.app/api/svg/badge-full-stack.svg?width=300&height=50)
```

---

## 🏅 Badges (Desenvolvimento)

### Build Passing

![Build Passing](https://galeria-drab.vercel.app/api/svg/badge-build-passing.svg)

```markdown
![Build Passing](https://galeria-drab.vercel.app/api/svg/badge-build-passing.svg)
```

### Tests Passing

![Tests Passing](https://galeria-drab.vercel.app/api/svg/badge-tests-passing.svg)

```markdown
![Tests Passing](https://galeria-drab.vercel.app/api/svg/badge-tests-passing.svg)
```

### Coverage 98%

![Coverage](https://galeria-drab.vercel.app/api/svg/badge-coverage-98.svg)

```markdown
![Coverage](https://galeria-drab.vercel.app/api/svg/badge-coverage-98.svg)
```

### Version 2.1.0

![Version](https://galeria-drab.vercel.app/api/svg/badge-version-2.1.0.svg)

```markdown
![Version](https://galeria-drab.vercel.app/api/svg/badge-version-2.1.0.svg)
```

### License MIT

![License MIT](https://galeria-drab.vercel.app/api/svg/badge-license-mit.svg)

```markdown
![License MIT](https://galeria-drab.vercel.app/api/svg/badge-license-mit.svg)
```

### Stack: Next.js + React

![Stack](https://galeria-drab.vercel.app/api/svg/badge-stack-nextjs-react.svg)

```markdown
![Stack](https://galeria-drab.vercel.app/api/svg/badge-stack-nextjs-react.svg)
```

### 100% TypeScript

![TypeScript](https://galeria-drab.vercel.app/api/svg/badge-typescript-100.svg)

```markdown
![TypeScript](https://galeria-drab.vercel.app/api/svg/badge-typescript-100.svg)
```

---

## 👤 Badges (Perfil)

### Entusiasta

![Entusiasta](https://galeria-drab.vercel.app/api/svg/badge-entusiasta.svg)

```markdown
![Entusiasta](https://galeria-drab.vercel.app/api/svg/badge-entusiasta.svg)
```

### DevOps Engineer

![DevOps](https://galeria-drab.vercel.app/api/svg/badge-devops.svg)

```markdown
![DevOps](https://galeria-drab.vercel.app/api/svg/badge-devops.svg)
```

### Data Analyst

![Data Analyst](https://galeria-drab.vercel.app/api/svg/badge-data-analyst.svg)

```markdown
![Data Analyst](https://galeria-drab.vercel.app/api/svg/badge-data-analyst.svg)
```

### Full Stack Developer

![Full Stack](https://galeria-drab.vercel.app/api/svg/badge-full-stack.svg)

```markdown
![Full Stack](https://galeria-drab.vercel.app/api/svg/badge-full-stack.svg)
```

### Cloud Architect

![Cloud Architect](https://galeria-drab.vercel.app/api/svg/badge-cloud-architect.svg)

```markdown
![Cloud Architect](https://galeria-drab.vercel.app/api/svg/badge-cloud-architect.svg)
```

### Machine Learning Engineer

![Machine Learning](https://galeria-drab.vercel.app/api/svg/badge-machine-learning.svg)

```markdown
![Machine Learning](https://galeria-drab.vercel.app/api/svg/badge-machine-learning.svg)
```

### Security Expert

![Security](https://galeria-drab.vercel.app/api/svg/badge-security.svg)

```markdown
![Security](https://galeria-drab.vercel.app/api/svg/badge-security.svg)
```

### UI/UX Designer

![UI/UX](https://galeria-drab.vercel.app/api/svg/badge-ui-ux.svg)

```markdown
![UI/UX](https://galeria-drab.vercel.app/api/svg/badge-ui-ux.svg)
```

---

## 🎭 Banners

### Banner 1

![Banner 1](https://galeria-drab.vercel.app/api/svg/capa-1.svg)

```markdown
![Banner 1](https://galeria-drab.vercel.app/api/svg/capa-1.svg)
```

### Banner 2

![Banner 2](https://galeria-drab.vercel.app/api/svg/capa-2.svg)

```markdown
![Banner 2](https://galeria-drab.vercel.app/api/svg/capa-2.svg)
```

### Banner 3

![Banner 3](https://galeria-drab.vercel.app/api/svg/capa-3.svg)

```markdown
![Banner 3](https://galeria-drab.vercel.app/api/svg/capa-3.svg)
```

### Banner 4

![Banner 4](https://galeria-drab.vercel.app/api/svg/capa-4.svg)

```markdown
![Banner 4](https://galeria-drab.vercel.app/api/svg/capa-4.svg)
```

### Banner 5

![Banner 5](https://galeria-drab.vercel.app/api/svg/capa-5.svg)

```markdown
![Banner 5](https://galeria-drab.vercel.app/api/svg/capa-5.svg)
```

### Banner 6

![Banner 6](https://galeria-drab.vercel.app/api/svg/capa-6.svg)

```markdown
![Banner 6](https://galeria-drab.vercel.app/api/svg/capa-6.svg)
```

---

## 🎯 Logo Morallus

![Moralus OSS](https://galeria-drab.vercel.app/api/svg/morallus.svg)

```markdown
![Moralus OSS](https://galeria-drab.vercel.app/api/svg/morallus.svg)
```

---

## 📖 Mais Informações

- 🏠 [Home](https://galeria-drab.vercel.app)
- 🖼️ [Galeria Completa](https://galeria-drab.vercel.app/galeria)
- 🧩 [Skills - Langs](https://galeria-drab.vercel.app/galeria/langs)
- 🧰 [Skills - Ferramentas](https://galeria-drab.vercel.app/galeria/ferramentas)
- 🧠 [Skills - Tecnologias](https://galeria-drab.vercel.app/galeria/tecnologias)
- ✍️ [Blog](https://galeria-drab.vercel.app/blog)
- 📜 [Termos de Uso](https://galeria-drab.vercel.app/termos-de-uso)
- 🔒 [Política de Privacidade](https://galeria-drab.vercel.app/politica-de-privacidade)
- 📝 [Como Criar Posts](./CRIAR-POSTS-BLOG.md)

---

**Desenvolvido por [Moralus OSS](https://github.com/ossmoralus)**
