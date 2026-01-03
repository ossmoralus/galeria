import fs from 'node:fs/promises';
import path from 'node:path';

const WORKSPACE_ROOT = process.cwd();
const SVG_ROOT = path.join(WORKSPACE_ROOT, 'public', 'svg');

/**
 * Retorna lista de arquivos recursivamente.
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function listFilesRecursive(dir) {
  /** @type {string[]} */
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listFilesRecursive(fullPath)));
      continue;
    }
    out.push(fullPath);
  }

  return out;
}

/**
 * @param {string} value
 */
function isPlainNumber(value) {
  return /^\d+(?:\.\d+)?$/.test(value.trim());
}

/**
 * @param {string} svg
 */
function addViewBoxIfSafe(svg) {
  const svgOpenIndex = svg.indexOf('<svg');
  if (svgOpenIndex === -1) return { changed: false, content: svg };

  const tagEndIndex = svg.indexOf('>', svgOpenIndex);
  if (tagEndIndex === -1) return { changed: false, content: svg };

  const openTag = svg.slice(svgOpenIndex, tagEndIndex + 1);

  // Já tem viewBox
  if (/\bviewBox\s*=/.test(openTag)) {
    return { changed: false, content: svg };
  }

  const widthMatch = openTag.match(/\bwidth\s*=\s*(["'])([^"']+)\1/);
  const heightMatch = openTag.match(/\bheight\s*=\s*(["'])([^"']+)\1/);

  if (!widthMatch || !heightMatch) {
    return { changed: false, content: svg };
  }

  const width = widthMatch[2].trim();
  const height = heightMatch[2].trim();

  // Apenas se forem números “puros” (sem px, %, etc.)
  if (!isPlainNumber(width) || !isPlainNumber(height)) {
    return { changed: false, content: svg };
  }

  // Insere logo após <svg
  const viewBoxAttr = ` viewBox="0 0 ${width} ${height}"`;
  const newOpenTag = openTag.replace('<svg', `<svg${viewBoxAttr}`);

  if (newOpenTag === openTag) {
    return { changed: false, content: svg };
  }

  const content = svg.slice(0, svgOpenIndex) + newOpenTag + svg.slice(tagEndIndex + 1);
  return { changed: true, content };
}

async function main() {
  // Se a pasta não existir, não faz nada.
  try {
    await fs.access(SVG_ROOT);
  } catch {
    console.log(`[add-viewbox-safe] Pasta não encontrada: ${SVG_ROOT}`);
    process.exit(0);
  }

  const allFiles = await listFilesRecursive(SVG_ROOT);
  const svgFiles = allFiles.filter((f) => f.toLowerCase().endsWith('.svg'));

  let changedCount = 0;

  for (const filePath of svgFiles) {
    const original = await fs.readFile(filePath, 'utf8');
    const { changed, content } = addViewBoxIfSafe(original);

    if (!changed) continue;

    await fs.writeFile(filePath, content, 'utf8');
    changedCount += 1;
  }

  console.log(`[add-viewbox-safe] Arquivos .svg analisados: ${svgFiles.length}`);
  console.log(`[add-viewbox-safe] viewBox adicionados (safe): ${changedCount}`);
}

await main();
