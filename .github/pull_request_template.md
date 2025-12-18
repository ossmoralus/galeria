## 📋 Descrição

<!-- Descreva suas mudanças de forma clara e concisa -->

## 🎯 Tipo de Mudança

<!-- Marque as opções relevantes -->

- [ ] 🐛 **Bug fix** (correção de bug, não quebra funcionalidades existentes)
- [ ] ✨ **Nova feature** (adiciona nova funcionalidade, não quebra funcionalidades existentes)
- [ ] 💥 **Breaking change** (mudança que quebra funcionalidades existentes)
- [ ] 📝 **Documentação** (apenas mudanças na documentação)
- [ ] 🎨 **Estilo** (formatação, ponto e vírgula, etc; sem mudança de código)
- [ ] ♻️ **Refatoração** (refatoração de código, sem adicionar features ou corrigir bugs)
- [ ] ⚡ **Performance** (melhoria de performance)
- [ ] ✅ **Testes** (adiciona ou corrige testes)
- [ ] 🔧 **Configuração** (mudanças em arquivos de config, build, CI/CD)
- [ ] 🔒 **Segurança** (correções de segurança)

## 🔗 Issue Relacionada

<!-- Se este PR resolve alguma issue, referencie aqui -->

Closes #(issue)

## 💡 Motivação e Contexto

<!-- Por que esta mudança é necessária? Qual problema resolve? -->
<!-- Se corrige um bug, descreva o comportamento atual e o esperado -->

## 📸 Screenshots (se aplicável)

<!-- Adicione screenshots ou GIFs mostrando as mudanças visuais -->

| Antes              | Depois              |
| ------------------ | ------------------- |
| [screenshot antes] | [screenshot depois] |

## 🧪 Como Testar

<!-- Descreva os passos para testar suas mudanças -->

1. Clone o branch: `git checkout [nome-do-branch]`
2. Instale as dependências: `npm install`
3. Execute o projeto: `npm run dev`
4. Navegue até: `http://localhost:3000/...`
5. Teste:
   - [ ] ...
   - [ ] ...

## ✅ Checklist

### Qualidade de Código

- [ ] 🔍 Executei `npm run lint` sem erros
- [ ] 🎨 Executei `npm run lint:css` sem erros
- [ ] 💅 Executei `npm run format` para formatar o código
- [ ] 🔷 Executei `npm run type-check` sem erros TypeScript
- [ ] ✅ Todos os lints passaram: `npm run lint:all`

### Licenças

- [ ] 📄 Se adicionei dependências, executei `npm run licenses:check`
- [ ] 📋 Se adicionei dependências, atualizei `LICENSES.txt` com `npm run licenses:generate`
- [ ] ✅ Todas as novas dependências têm licenças compatíveis com MIT

### Build e Testes

- [ ] 🏗️ O build está funcionando: `npm run build`
- [ ] 🔥 Testei localmente no modo produção: `npm start`
- [ ] 📱 Testei em diferentes tamanhos de tela (responsivo)
- [ ] 🌐 Testei em diferentes navegadores (Chrome, Firefox, Safari)

### Documentação

- [ ] 📝 Atualizei a documentação relevante em `/docs`
- [ ] 📖 Atualizei o README.md se necessário
- [ ] 💬 Adicionei comentários em código complexo
- [ ] 📄 Documentei novas features ou mudanças de API

### SVGs e Assets (se aplicável)

- [ ] 🎨 SVGs estão otimizados e seguem o padrão do projeto
- [ ] 📏 SVGs têm viewBox configurado corretamente
- [ ] 🖼️ Assets estão na pasta correta (`public/svg/`)
- [ ] 📚 Atualizei `docs/GALERIA-SVG.md` com novos SVGs

### Blog/MDX (se aplicável)

- [ ] ✍️ Post tem frontmatter completo (title, description, date, author, category, tags)
- [ ] 📅 Data está no formato correto (YYYY-MM-DD)
- [ ] 🏷️ Tags são relevantes e existentes
- [ ] 📂 Post está na pasta correta (`content/posts/`)
- [ ] 🔍 Testei a renderização do MDX

### Git

- [ ] 📝 Commits seguem o padrão do projeto
- [ ] 🌿 Branch está atualizado com `main`
- [ ] 🔀 Resolvi todos os conflitos de merge
- [ ] 🧹 Removi arquivos de debug/temporários

## 🔍 Impacto das Mudanças

<!-- Marque as áreas afetadas pelas suas mudanças -->

- [ ] 🖼️ Galeria de SVGs
- [ ] 🎨 Gerador de Badges
- [ ] ✍️ Blog/MDX
- [ ] 🔌 API de SVGs
- [ ] 🎯 UI/UX
- [ ] 📱 Responsividade Mobile
- [ ] 🚀 Performance
- [ ] 🔒 Segurança
- [ ] 🛠️ DevOps/CI/CD
- [ ] 📚 Documentação

## ⚠️ Breaking Changes

<!-- Se marcou "Breaking change" acima, descreva: -->
<!-- - O que quebra -->
<!-- - Como migrar do código antigo para o novo -->
<!-- - Exemplo de código antes e depois -->

## 📊 Performance

<!-- Se suas mudanças afetam performance, adicione métricas -->

- [ ] Lighthouse Score (antes/depois)
- [ ] Tamanho do bundle (antes/depois)
- [ ] Tempo de carregamento (antes/depois)

## 🔐 Segurança

<!-- Se suas mudanças envolvem segurança, descreva: -->
<!-- - Vulnerabilidades corrigidas -->
<!-- - Novas validações implementadas -->
<!-- - Sanitização de inputs -->

## 📝 Notas Adicionais

<!-- Qualquer informação adicional que os revisores devem saber -->

## 🙏 Revisão

<!-- Mencione revisores específicos se necessário -->

@ossmoralus/team

---

### 📌 Para os Revisores

Ao revisar este PR, por favor verifique:

- ✅ O código está limpo e bem documentado
- ✅ Não há código comentado ou debug logs
- ✅ As mudanças seguem os padrões do projeto
- ✅ A documentação está atualizada
- ✅ Os testes passam (quando aplicável)
- ✅ Não há problemas de segurança óbvios
- ✅ O PR resolve o problema proposto

**Obrigado por contribuir com a Galeria Moralus OSS! 🎨**
