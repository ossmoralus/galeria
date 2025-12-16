#!/usr/bin/env bash
set -euo pipefail

# Diretório cache para binário
CACHE_DIR=".cache/actionlint"
BIN="$CACHE_DIR/actionlint"
LATEST_URL="https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash"

mkdir -p "$CACHE_DIR"

if [[ ! -x "$BIN" ]]; then
  echo "[actionlint] Baixando binário mais recente..."
  TMP_SCRIPT="$(mktemp)"
  curl -fsSL "$LATEST_URL" -o "$TMP_SCRIPT"
  # Baixa versão latest para diretório cache
  bash "$TMP_SCRIPT" latest "$CACHE_DIR"
  rm "$TMP_SCRIPT"
fi

if [[ ! -x "$BIN" ]]; then
  echo "[actionlint] Falhou ao instalar actionlint" >&2
  exit 1
fi

# Verificar workflows
echo "[actionlint] Executando validação nas workflows..."
$BIN -color -verbose $(find .github/workflows -maxdepth 1 -type f \( -name '*.yml' -o -name '*.yaml' \))

echo "[actionlint] Concluído com sucesso."