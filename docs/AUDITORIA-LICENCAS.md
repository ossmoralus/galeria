> Proveniência e Autoria: Este documento integra o projeto Galeria Moralus OSS (licença MIT).
> Última atualização: 2 de janeiro de 2026

# Auditoria de Licenças

Este documento explica como o projeto audita as licenças de suas dependências para garantir compatibilidade com MIT.

## Licenças Permitidas

O projeto aceita apenas dependências com licenças permissivas:

### ✅ Permissivas Fortes (Preferidas)

- **MIT** - A mais permissiva e compatível
- **ISC** - Equivalente à MIT, mais concisa
- **Apache-2.0** - Permissiva com proteção de patentes
- **BSD-2-Clause / BSD-3-Clause** - Permissivas com cláusula de atribuição
- **0BSD** - BSD sem cláusula de atribuição
- **BlueOak-1.0.0** - Licença moderna permissiva
- **CC0-1.0** - Dedicação ao domínio público
- **MIT-0** - MIT sem atribuição obrigatória
- **Python-2.0** - Licença Python (permissiva)
- **CC-BY-4.0** - Creative Commons com atribuição

### ⚠️ Copyleft Fraco (Aceitas com Ressalvas)

- **LGPL-3.0-or-later** - Copyleft fraco, ok para uso sem modificação
  - Presente em: `@img/sharp-libvips-*` (bibliotecas de imagem Sharp)
  - **Impacto**: Nenhum. Usamos sem modificar, permitido pela LGPL.
- **MPL-2.0** - Mozilla Public License 2.0, compatível com uso em projetos MIT
  - Presente em: `@vercel/analytics`, `next-mdx-remote`
  - **Impacto**: Nenhum. Modificações devem ser compartilhadas, mas não modificamos essas bibliotecas.

### ❌ Licenças Proibidas (Não Permitidas)

- **GPL-2.0 / GPL-3.0** - Copyleft forte, incompatível com MIT
- **AGPL-3.0** - GPL para software de rede, muito restritiva
- **SSPL** - Server Side Public License, controversa
- Qualquer licença proprietária ou fechada

## Scripts de Auditoria

### `npm run license:audit`

Gera arquivo `licenses.json` com dados detalhados de cada pacote:

Campos:

- `name`, `version`
- `license` (ou `UNKNOWN` se não detectado)
- `repository` (quando disponível)
- `licenseFile` (nome do arquivo localizado) e `licenseText` (conteúdo se < 200KB)
- `problematic` (lista de pacotes que violam filtros `--fail-on` ou `--allow`)

```bash
npm run license:audit
```

Exemplo de uso avançado (falhar se encontrar GPL ou AGPL):

```bash
node scripts/license-audit.mjs --format json --output licenses.json --fail-on GPL-3.0,AGPL-3.0
```

### `npm run license:report`

Gera arquivo textual `LICENSES_SUMMARY.txt` com:

- Contagem de licenças
- Lista problemáticas (se houver)
- Primeiros 50 pacotes para inspeção rápida

```bash
npm run license:report
```

### `npm run license:full`

Executa auditoria completa (JSON + resumo + THIRD-PARTY-NOTICES):

```bash
npm run license:full
```

### `npm run license:notices`

Gera arquivo `THIRD-PARTY-NOTICES.txt` com:

- Resumo completo de todas as licenças
- Notas especiais sobre licenças weak copyleft (LGPL, MPL)
- Textos completos das licenças por tipo
- Declaração de conformidade

```bash
npm run license:notices
```

## Diferenças em Relação ao `license-checker`

| Aspecto                  | Antes (`license-checker`)     | Agora (script custom)                          |
| ------------------------ | ----------------------------- | ---------------------------------------------- |
| Dependências transitivas | Trazia libs deprecated        | Elimina cadeia deprecated                      |
| Formatos                 | CSV / texto / JSON limitado   | JSON detalhado + resumo textual personalizável |
| Extensibilidade          | Baixa (flags fixas)           | Alta (flags `--fail-on`, `--allow`)            |
| Licenças problemáticas   | Lista direta                  | Campo `problematic` + filtros configuráveis    |
| Conteúdo de LICENSE      | Não embute                    | Embute texto (até 200KB)                       |
| Atualização futura       | Depende de manutenção externa | Controle interno                               |

## Fluxo de CI/CD

### Pre-commit Hook (Futuro)

Adicionar verificação automática antes de commits:

```bash
#!/bin/sh
npm run license:audit || {
  echo "❌ Erro: Licença não permitida detectada!"
   echo "Execute 'npm run license:notices' e revise THIRD-PARTY-NOTICES.txt"
  exit 1
}
```

### GitHub Actions (Futuro)

Adicionar job ao CI:

```yaml
- name: Check Licenses
   run: npm run license:audit
```

## Processo de Aprovação

Ao adicionar nova dependência:

1. **Instalar a dependência:**

   ```bash
   npm install <pacote>
   ```

2. **Verificar licença:**

   ```bash
   npm run license:audit
   ```

3. **Se falhar, investigar:**

   ```bash
   jq '.packages[] | select(.name=="<pacote>")' licenses-audit.json
   ```

4. **Avaliar alternativas:**
   - Buscar fork com licença MIT
   - Reimplementar funcionalidade (se simples)
   - Remover se não for crítico
   - Aceitar excepcionalmente (documentar motivo)

5. **Atualizar THIRD-PARTY-NOTICES.txt:**

   ```bash
   npm run license:notices
   ```

6. **Commit com justificativa:**

   ```bash
   git add package.json package-lock.json THIRD-PARTY-NOTICES.txt licenses-audit.json
   git commit -m "feat: adicionar <pacote> com licença <tipo>

   Justificativa: [explicar por que é necessário]
   Compatibilidade: [confirmar compatibilidade com MIT]"
   ```

## Licenças Atuais (2 de dezembro de 2025)

**Total de dependências:** 863 (produção)

**Distribuição:**

- MIT: 736 (85.4%)
- ISC: 45 (5.2%)
- Apache-2.0: 29 (3.4%)
- BSD-2-Clause: 18 (2.1%)
- BSD-3-Clause: 13 (1.5%)
- BlueOak-1.0.0: 7 (0.8%)
- **LGPL-3.0-or-later: 2 (0.2%)** - Sharp image processing
- **MPL-2.0: 2 (0.2%)** - Vercel Analytics + next-mdx-remote
- Outras permissivas: 11 (1.2%)

## Dependências com Atenção Especial

### Sharp (Processamento de Imagens)

- **Pacotes:** `@img/sharp-libvips-linux-x64`, `@img/sharp-libvips-linuxmusl-x64`
- **Licença:** LGPL-3.0-or-later
- **Uso:** Otimização automática de imagens no build
- **Risco:** Zero. Não modificamos a biblioteca, uso permitido pela LGPL.
- **Alternativas:** Jimp (MIT, mas mais lento), manual (inviável para produção)

### Vercel Analytics

- **Pacote:** `@vercel/analytics`
- **Licença:** MPL-2.0
- **Uso:** Métricas de tráfego no site
- **Risco:** Zero. Não modificamos, apenas consumimos.
- **Alternativas:** Google Analytics (fechado), Plausible (AGPL, pior), Umami (self-host complexo)

### next-mdx-remote

- **Pacote:** `next-mdx-remote`
- **Licença:** MPL-2.0
- **Uso:** Renderização server-side de MDX no blog
- **Risco:** Zero. Não modificamos.
- **Alternativas:** @next/mdx (MIT, mas não suporta remote), remark/rehype direto (complexo)

## Política de Exceções

Aceitar LGPL ou MPL **somente se:**

1. Não há alternativa MIT/ISC viável
2. Não modificaremos o código da biblioteca
3. É essencial para funcionalidade core
4. Tem comunidade ativa (manutenção garantida)
5. Documentado neste arquivo

## Recursos

## Referências

- **choosealicense.com:** https://choosealicense.com/
- **SPDX License List:** https://spdx.org/licenses/
- **MIT License:** https://opensource.org/licenses/MIT
- **LGPL vs GPL:** https://www.gnu.org/licenses/lgpl-3.0.html
- **MPL-2.0 FAQ:** https://www.mozilla.org/en-US/MPL/2.0/FAQ/
- **choosealicense.com:** https://choosealicense.com/
- **SPDX License List:** https://spdx.org/licenses/
- **MIT License:** https://opensource.org/licenses/MIT
- **LGPL vs GPL:** https://www.gnu.org/licenses/lgpl-3.0.html
- **MPL-2.0 FAQ:** https://www.mozilla.org/en-US/MPL/2.0/FAQ/

## Contato

Para questões sobre licenças:

- Abrir issue: https://github.com/ossmoralus/galeria/issues
- WhatsApp: +55 37 99855-3430

---

**Última auditoria:** 2 de dezembro de 2025
**Responsável:** Moralus OSS
**Ferramenta:** Script interno `scripts/license-audit.mjs`
**Status:** ✅ Todas as licenças compatíveis com MIT
