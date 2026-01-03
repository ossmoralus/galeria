> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# 🖼️ Guia de Otimização de SVGs com SVGO

Este documento explica como o projeto otimiza e valida SVGs usando **SVGO** (SVG Optimizer), garantindo performance e consistência.

## 🎯 Por que Otimizar SVGs?

A otimização de SVGs é crucial para a performance web. O SVGO remove dados desnecessários (metadados de editores, comentários, atributos redundantes) sem afetar a qualidade visual.

### Benefícios

- ✅ **Performance**: Arquivos menores resultam em carregamento mais rápido.
- ✅ **Bandwidth**: Redução do volume de dados transferidos.
- ✅ **Consistência**: Código SVG padronizado e limpo.

### Resultados da Otimização

| Categoria      | Arquivos | Antes      | Depois       | Economia |
| :------------- | :------- | :--------- | :----------- | :------- |
| 🏷️ **Badges**  | 15       | ~12 KB     | ~9.5 KB      | **~21%** |
| 🖼️ **Banners** | 6        | ~40 KB     | ~30 KB       | **~25%** |
| 🎯 **Logo**    | 1        | 3.9 KB     | 3.0 KB       | **~22%** |
| **TOTAL**      | **22**   | **~56 KB** | **~42.5 KB** | **~24%** |

**Economia total: 13.5 KB (~24%)** sem perda de qualidade! 🎉

## 🛠️ Scripts de Otimização

O SVGO está configurado como `devDependency` e integrado aos scripts do `package.json`.

| Script                | Comando                                                    | Descrição                                                                         |
| :-------------------- | :--------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| `npm run lint:svg`    | `svgo --config svgo.config.js --folder public/svg --quiet` | **Verifica** se os SVGs estão otimizados. Falha se encontrar SVGs não otimizados. |
| `npm run otimize:svg` | `svgo public/svg --recursive`                              | **Otimiza** todos os SVGs na pasta `public/svg/`.                                 |
| `npm run fix:all`     | _Inclui `otimize:svg`_                                     | Corrige todos os problemas de qualidade (lint, format, svg).                      |

## ⚙️ Configuração do SVGO (`svgo.config.js`)

A configuração foi ajustada para manter a funcionalidade e acessibilidade dos SVGs, enquanto maximiza a otimização.

### Plugins Ativos (Foco em Segurança e Funcionalidade)

| Plugin                      | Status         | Descrição                                                             |
| :-------------------------- | :------------- | :-------------------------------------------------------------------- |
| `removeViewBox`             | **Desativado** | Mantém o `viewBox` para garantir a responsividade.                    |
| `cleanupIDs`                | **Ajustado**   | Mantém IDs não minificados para uso com CSS/JS.                       |
| `removeUnknownsAndDefaults` | **Ativado**    | Remove atributos e elementos não padrão.                              |
| `removeMetadata`            | **Ativado**    | Remove metadados de editores (Inkscape, Illustrator).                 |
| `convertColors`             | **Ativado**    | Converte cores para o formato mais curto (ex: `#ff0000` para `#f00`). |
| `sortAttrs`                 | **Ativado**    | Ordena atributos alfabeticamente para consistência.                   |
| `pretty`                    | **Ativado**    | Mantém a legibilidade do código SVG (indentação de 2 espaços).        |

## 📝 Workflow de Contribuição de SVGs

Siga este fluxo ao adicionar ou modificar um SVG:

1.  **Criar/Editar SVG**: Salve o arquivo em `public/svg/badges/` ou `public/svg/banner/`.
2.  **Otimizar**: Execute o script de otimização localmente.
    ```bash
    npm run otimize:svg
    ```
3.  **Verificar**: Confirme se o SVG está visualmente correto e se houve redução de tamanho.
    ```bash
    # Verifique a diferença no git
    git diff public/svg/
    ```
4.  **Commit**: Inclua o SVG otimizado no seu commit. O CI/CD fará a verificação final.

## 🔄 Integração com CI/CD

O workflow de Integração Contínua (`.github/workflows/ci.yml`) inclui um passo para verificar a otimização dos SVGs.

- **Job:** `🖼️ SVG Optimization Check`
- **Comando:** `npm run lint:svg`
- **Comportamento:** O Pull Request será **bloqueado** se algum SVG não estiver otimizado, garantindo que apenas arquivos otimizados sejam mesclados.

## 💡 Melhores Práticas

### DO ✅

    - **Sempre usar `viewBox`**: Essencial para que o SVG seja redimensionado corretamente.
    - **Usar cores do projeto**: Prefira a paleta de cores definida em `app/style/globals.css` ou cores hex.

- **Testar visualmente**: Verifique o SVG na galeria local (`npm run dev`) após a otimização.

### DON'T ❌

- **Não remover `viewBox`**: Isso impede a responsividade.
- **Não usar imagens rasterizadas** (PNG/JPG) dentro do SVG.
- **Não usar JavaScript inline** (`<script>`) por questões de segurança.

## 📞 Suporte

**Problemas com otimização?**

- 🐛 [Abrir Issue](https://github.com/ossmoralus/galeria/issues/new?template=bug_report.yml)
- 📱 [WhatsApp](https://wa.me/5537998553430)

---

**Última atualização:** 2 de dezembro de 2025
**Versão SVGO:** 3.x
**Status:** ✅ Operacional
