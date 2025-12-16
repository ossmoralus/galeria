# Padronização de Badges

> Instruções rápidas para padronizar os badges SVG por pasta.

Agora a pasta `public/svg/badges` suporta subpastas com padrões diferentes:

- `decorativos` — padrão grande (ex.: `220x60`, `rx=30`) — ideal para badges visuais/estilizados.
- `info` — padrão compacto (ex.: `180x40`, `rx=8`) — ideal para badges informativos ou rótulos.
- `skills` — padrão também configurável (por padrão segue `220x60`).

Existe um script utilitário que percorre recursivamente `public/svg/badges` e aplica o padrão apropriado dependendo da subpasta onde o arquivo estiver.

- Local: `scripts/normalize-badges.cjs`
- Objetivo: atualizar `width`, `height`, `viewBox` e o `<rect>` de fundo conforme o padrão da pasta; cria um backup `.bak` antes de sobrescrever.

Como usar:

- Testar sem alterar arquivos (modo seguro):

```powershell
node scripts/normalize-badges.cjs --dry-run
```

- Aplicar alterações (cria backup `.bak` antes de substituir):

```powershell
node scripts/normalize-badges.cjs
```

Flags de override (opcionais):

- `--info=WxHxR` para alterar o padrão da pasta `info` (ex.: `--info=200x48x10`).
- `--decorativos=WxHxR` para `decorativos`.
- `--skills=WxHxR` para `skills`.

Exemplo com override:

```powershell
node scripts/normalize-badges.cjs --info=200x48x10 --decorativos=220x60x30 --dry-run
```

Observações:

- O script faz alterações conservadoras apenas na tag `<svg>` e no `<rect>` de fundo. Elementos internos (`<path>`, `<text>`) não são reposicionados automaticamente — revise manualmente quando necessário.
- Sempre rode `--dry-run` e revise backups `.bak` gerados antes de commitar.
