> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# 📝 Como Criar Posts para o Blog

Este guia explica como criar e gerenciar posts no blog da Galeria Moralus OSS.

## 📁 Estrutura de Arquivos

Os posts do blog ficam no diretório:

```
content/posts/
├── bem-vindo.mdx
├── como-usar-svgs-github.mdx
└── seu-novo-post.mdx
```

## ✍️ Formato dos Posts

Os posts são escritos em **MDX** (Markdown com suporte a JSX/React), com extensão `.mdx`.

### Estrutura Básica de um Post

````mdx
---
title: 'Título do Seu Post'
description: 'Descrição breve que aparece nos cards e meta tags'
date: '2025-12-01'
author: 'Seu Nome'
category: 'Tutorial'
tags: ['javascript', 'react', 'nextjs']
published: true
---

# Introdução

Conteúdo do seu post em Markdown...

## Seção 1

Texto com **negrito**, _itálico_ e `código inline`.

```javascript
// Exemplo de código
const exemplo = 'Hello World';
console.log(exemplo);
```
````

## Seção 2

- Lista item 1
- Lista item 2
- Lista item 3

### Subseção

> Citação importante ou destaque

[Link externo](https://exemplo.com)

![Descrição da imagem](/images/exemplo.jpg)

````

## 🏷️ Frontmatter (Metadados Obrigatórios)

Cada post **deve** ter um bloco de frontmatter no início do arquivo, delimitado por `---`:

| Campo         | Tipo      | Obrigatório | Descrição                                   |
| ------------- | --------- | ----------- | ------------------------------------------- |
| `title`       | `string`  | ✅ Sim      | Título do post (exibido no card e página)   |
| `description` | `string`  | ✅ Sim      | Resumo breve (max 160 caracteres)           |
| `date`        | `string`  | ✅ Sim      | Data no formato `YYYY-MM-DD`                |
| `author`      | `string`  | ✅ Sim      | Nome do autor                               |
| `category`    | `string`  | ✅ Sim      | Categoria (ex: Tutorial, Artigo, Dica)      |
| `tags`        | `array`   | ✅ Sim      | Array de tags (strings)                     |
| `published`   | `boolean` | Não         | `true` ou `false` (padrão: `true`)          |
| `image`       | `string`  | Não         | Caminho da imagem de capa (futuro)          |

### Exemplo de Frontmatter Completo

```yaml
---
title: 'Como Usar TypeScript no Next.js'
description: 'Aprenda a configurar e usar TypeScript em projetos Next.js com type-safety completo'
date: '2025-12-15'
author: 'Carlos Silva'
category: 'Tutorial'
tags: ['typescript', 'nextjs', 'react', 'javascript']
published: true
image: '/images/posts/typescript-nextjs.jpg'
---
````

## 📝 Dicas de Escrita

### 1. Nome do Arquivo

Use nomes descritivos em **kebab-case**:

- ✅ `como-criar-api-rest.mdx`
- ✅ `introducao-typescript.mdx`
- ❌ `post1.mdx`
- ❌ `Meu Post.mdx`

O nome do arquivo será usado como **slug** da URL:
`/blog/como-criar-api-rest`

### 2. Categorias Sugeridas

Para manter organização, use categorias consistentes:

- **Tutorial** - Guias passo a passo
- **Artigo** - Conteúdo analítico ou opinativo
- **Dica** - Dicas rápidas e práticas
- **Geral** - Anúncios, novidades

### 3. Tags Efetivas

Use tags descritivas e minúsculas:

- ✅ `['javascript', 'react', 'hooks']`
- ❌ `['JS', 'React.js', 'React Hooks']`

Limite-se a 3-5 tags relevantes por post.

### 4. Formatação de Código

Use blocos de código com linguagem especificada para syntax highlighting:

````markdown
```typescript
interface User {
  id: number;
  name: string;
}
```
````

Linguagens suportadas: `javascript`, `typescript`, `jsx`, `tsx`, `css`, `html`, `bash`, `json`, `yaml`, `markdown`.

### 5. Imagens

Coloque imagens em `public/images/posts/` e referencie com caminho absoluto:

```markdown
![Descrição alternativa](/images/posts/exemplo.jpg)
```

### 6. Links Internos

Para links entre posts use caminho relativo:

```markdown
[Veja nosso tutorial anterior](/blog/introducao-nextjs)
```

## 🔍 Recursos Markdown/MDX Suportados

### Elementos Básicos

- **Títulos**: `# H1`, `## H2`, `### H3`, etc.
- **Negrito**: `**texto**`
- **Itálico**: `_texto_`
- **Código inline**: `` `código` ``
- **Links**: `[texto](url)`
- **Imagens**: `![alt](url)`

### Elementos Avançados

- **Listas ordenadas e não-ordenadas**
- **Blockquotes**: `> citação`
- **Tabelas** (formato GFM)
- **Blocos de código** com syntax highlighting
- **Linha horizontal**: `---` ou `***`
- **Links automáticos**: `https://exemplo.com`
- **Tasks lists**: `- [ ] tarefa`

### Tabelas

```markdown
| Coluna 1 | Coluna 2 | Coluna 3 |
| -------- | -------- | -------- |
| Valor 1  | Valor 2  | Valor 3  |
| Valor 4  | Valor 5  | Valor 6  |
```

### Citações

```markdown
> Esta é uma citação em bloco.
> Pode ter múltiplas linhas.
>
> — Autor
```

## 🚀 Publicando um Post

1. Crie o arquivo `.mdx` em `content/posts/`
2. Preencha o frontmatter completo
3. Escreva o conteúdo em Markdown/MDX
4. Salve o arquivo
5. O Next.js irá gerar automaticamente:
   - Card na página `/blog`
   - Página individual em `/blog/[slug]`
   - Filtros por categoria em `/blog/category/[category]`
   - Filtros por tag em `/blog/tag/[tag]`

### Rascunhos

Para criar um rascunho (post não publicado), use:

```yaml
published: false
```

Posts com `published: false` não aparecem no blog até você alterar para `true`.

## 🎨 Estilização Automática

O blog aplica automaticamente:

- **Tipografia otimizada** (fonte, tamanho, espaçamento)
- **Syntax highlighting** em blocos de código (tema VS Code Dark)
- **Responsividade** para mobile e desktop
- **Dark mode** (tema padrão)
- **Links com hover** e destaque visual
- **Imagens responsivas** com border-radius
- **Tempo de leitura** calculado automaticamente

## 📊 Metadados SEO

O blog gera automaticamente:

- **Title tags** otimizados
- **Meta descriptions**
- **Open Graph** (Twitter, Facebook, LinkedIn)
- **Keywords** baseados nas tags
- **Canonical URLs**
- **Sitemap** (rotas estáticas)

## ✅ Checklist ao Criar um Post

Antes de publicar, verifique:

- [ ] Frontmatter completo e válido
- [ ] Título claro e conciso (max 60 caracteres)
- [ ] Descrição persuasiva (max 160 caracteres)
- [ ] Data no formato correto (`YYYY-MM-DD`)
- [ ] Categoria adequada
- [ ] Tags relevantes (3-5 itens)
- [ ] Blocos de código com linguagem especificada
- [ ] Imagens com `alt` descritivo
- [ ] Links funcionando
- [ ] Ortografia e gramática revisadas
- [ ] `published: true` (se pronto para publicar)

## 🔧 Exemplos Práticos

### Post Simples

````mdx
---
title: 'Primeiros Passos com Git'
description: 'Aprenda os comandos essenciais do Git para versionamento de código'
date: '2025-12-10'
author: 'João Santos'
category: 'Tutorial'
tags: ['git', 'versionamento', 'iniciantes']
published: true
---

# Introdução

Git é uma ferramenta essencial para desenvolvedores...

## Instalação

Para instalar o Git no Linux:

```bash
sudo apt install git
```
````

## Comandos Básicos

Os comandos mais usados são:

- `git init` - Inicializa repositório
- `git add .` - Adiciona arquivos
- `git commit -m "mensagem"` - Cria commit

## Conclusão

Com esses comandos você já pode começar a usar Git!

````

### Post com Tabela e Código

```mdx
---
title: 'Comparação de Frameworks React'
description: 'Next.js vs Gatsby vs Create React App - qual escolher?'
date: '2025-12-20'
author: 'Maria Costa'
category: 'Artigo'
tags: ['react', 'nextjs', 'gatsby', 'comparacao']
published: true
---

# Comparação

| Framework | SSR | SSG | Performance |
| --------- | --- | --- | ----------- |
| Next.js   | ✅  | ✅  | ⭐⭐⭐⭐⭐  |
| Gatsby    | ❌  | ✅  | ⭐⭐⭐⭐    |
| CRA       | ❌  | ❌  | ⭐⭐⭐      |

## Exemplo Next.js

```typescript
export default function Home() {
  return <h1>Hello Next.js!</h1>;
}
````

## Conclusão

Next.js oferece o melhor equilíbrio entre recursos e performance.

`````

## 🆘 Solução de Problemas

### Post não aparece no blog

1. Verifique se `published: true`
2. Confirme que o arquivo está em `content/posts/`
3. Verifique se a extensão é `.mdx`
4. Valide o frontmatter (formato YAML correto)

### Erro ao buildar

1. Confira se todos os campos obrigatórios estão presentes
2. Verifique se as aspas no frontmatter estão corretas
3. Certifique-se de que arrays usam `[]` e não `,`
4. Rode `npm run lint` para detectar erros

### Código sem highlighting

Use a sintaxe correta:

````markdown
```javascript
// seu código
`````

````

E não:

```markdown
```
// seu código (sem especificar linguagem)
```
```

## 📚 Recursos Adicionais

- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

---

**Dúvidas?** Entre em contato ou abra uma issue no repositório!
````
