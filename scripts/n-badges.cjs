#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const svgDir = path.join(repoRoot, 'public', 'svg');

// Default patterns per folder (can be overridden via CLI)
const DEFAULTS = {
  'badges/decorativos': { w: 220, h: 60, rx: 30, modifyRect: true },
  'badges/info': { w: 180, h: 40, rx: 8, modifyRect: true },
  'badges/skills': { w: 220, h: 60, rx: 30, modifyRect: true },
  'banner': { w: 1200, h: 630, modifyRect: false }, // Banners não modificam rect
  default: { w: 220, h: 60, rx: 30, modifyRect: true }
};

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run') || args.includes('-n');

function parseOverride(arg) {
  // expects format name=WxHxR e.g. badges/info=180x40x8
  const idx = arg.indexOf('=');
  if (idx === -1) return null;
  const name = arg.slice(0, idx).replace(/^--/, '');
  const rest = arg.slice(idx + 1);
  const parts = rest.split('x');
  if (parts.length < 2) return null;
  const [w, h, rx] = parts.map(Number);
  return {name, pattern: {w: Number(w) || DEFAULTS.default.w, h: Number(h) || DEFAULTS.default.h, rx: Number(rx) || DEFAULTS.default.rx, modifyRect: true}};
}

// Apply CLI overrides like --badges/info=200x50x10 --badges/decorativos=220x60x30
const overrides = {};
args.forEach(a => {
  if (a.startsWith('--') && a.includes('=')) {
    const parsed = parseOverride(a.replace(/^--/, '')) || parseOverride(a);
    if (parsed) overrides[parsed.name] = parsed.pattern;
  }
});

function getPatternForFile(filePath) {
  const rel = path.relative(svgDir, filePath).replace(/\\/g, '/');
  
  // Try exact match first (e.g., "badges/decorativos/badge-entusiasta.svg")
  for (const key of Object.keys(DEFAULTS)) {
    if (rel.startsWith(key + '/')) {
      return overrides[key] || DEFAULTS[key];
    }
  }
  
  // Try folder overrides
  for (const key of Object.keys(overrides)) {
    if (rel.startsWith(key + '/')) {
      return overrides[key];
    }
  }
  
  return DEFAULTS.default;
}

function normalizeSvg(content, pattern) {
  const original = content;

  // Ensure xmlns is present
  if (!/xmlns\s*=/.test(content)) {
    content = content.replace(/<svg([^>]*)>/, '<svg xmlns="http://www.w3.org/2000/svg"$1>');
  }

  const {w, h, rx, modifyRect} = pattern;

  // Always normalize <svg> tag
  content = content.replace(/<svg([^>]*)>/, (m, attrs) => {
    // Remove width, height, viewBox attributes
    let a = attrs
      .replace(/\s+width="[^"]*"/g, '')
      .replace(/\s+height="[^"]*"/g, '')
      .replace(/\s+viewBox="[^"]*"/g, '')
      .trim();
    
    // Reconstruct with proper spacing
    const parts = [];
    if (a.includes('xmlns=')) {
      parts.push(a.match(/xmlns="[^"]*"/)[0]);
      a = a.replace(/xmlns="[^"]*"\s*/, '');
    }
    
    parts.push(`width="${w}"`);
    parts.push(`height="${h}"`);
    parts.push(`viewBox="0 0 ${w} ${h}"`);
    
    if (a.trim()) {
      parts.push(a.trim());
    }
    
    return `<svg ${parts.join(' ')}>`;
  });

  // Only modify FIRST <rect> if modifyRect is true
  if (modifyRect && rx !== undefined) {
    let rectCount = 0;
    content = content.replace(/<rect([^>]*)\/?\s*>/g, (m, attrs) => {
      rectCount++;
      
      // Only modify first rect (background)
      if (rectCount !== 1) return m;
      
      // Remove width, height, rx from first rect only
      let a = attrs
        .replace(/\s+width="[^"]*"/g, '')
        .replace(/\s+height="[^"]*"/g, '')
        .replace(/\s+rx="[^"]*"/g, '')
        .trim();
      
      // Preserve other attributes (fill, stroke, opacity, etc.) in original order
      const preservedAttrs = [];
      
      // Extract fill
      const fillMatch = a.match(/fill="[^"]*"/);
      if (fillMatch) preservedAttrs.push(fillMatch[0]);
      
      // Extract other attributes (stroke, opacity, etc.)
      const otherAttrs = a
        .replace(/fill="[^"]*"\s*/g, '')
        .trim();
      if (otherAttrs) preservedAttrs.push(otherAttrs);
      
      // Add dimensional attributes
      preservedAttrs.push(`width="${w}"`);
      preservedAttrs.push(`height="${h}"`);
      preservedAttrs.push(`rx="${rx}"`);
      
      return `<rect ${preservedAttrs.join(' ')}/>`;
    });
  }

  return {newContent: content, changed: content !== original};
}

function processFile(p) {
  const stat = fs.statSync(p);
  if (!stat.isFile() || !p.toLowerCase().endsWith('.svg')) return;

  const raw = fs.readFileSync(p, 'utf8');
  const pattern = getPatternForFile(p);
  const {newContent, changed} = normalizeSvg(raw, pattern);
  const rel = path.relative(svgDir, p);
  
  if (!changed) {
    console.log(`✓ SKIP (no changes): ${rel}`);
    return;
  }

  if (dryRun) {
    console.log(`🔍 DRY RUN - would update: ${rel}`);
    console.log(`   Pattern: ${pattern.w}x${pattern.h}${pattern.rx !== undefined ? ` rx=${pattern.rx}` : ''} ${pattern.modifyRect ? '(modify rect)' : '(preserve rects)'}`);
    return;
  }

  const backup = p + '.bak';
  if (!fs.existsSync(backup)) {
    fs.writeFileSync(backup, raw, 'utf8');
  }

  fs.writeFileSync(p, newContent, 'utf8');
  console.log(`✅ UPDATED: ${rel}`);
  console.log(`   Pattern: ${pattern.w}x${pattern.h}${pattern.rx !== undefined ? ` rx=${pattern.rx}` : ''}`);
  console.log(`   Backup: ${path.basename(backup)}`);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  items.forEach(i => {
    const full = path.join(dir, i);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full);
    else processFile(full);
  });
}

function main() {
  if (!fs.existsSync(svgDir)) {
    console.error('❌ SVG directory not found:', svgDir);
    process.exit(1);
  }

  console.log('🚀 Starting SVG normalization...');
  console.log('📁 Base directory:', svgDir);
  console.log('');
  
  if (dryRun) {
    console.log('⚠️  DRY RUN MODE - No files will be modified');
    console.log('');
  }

  walk(svgDir);
  
  console.log('');
  console.log('✨ Done!');
  
  if (!dryRun) {
    console.log('');
    console.log('💡 Tip: To restore from backups, run:');
    console.log('   Get-ChildItem -Path public\\svg -Recurse -Filter "*.bak" | ForEach-Object { Copy-Item $_.FullName ($_.FullName -replace "\\.bak$","") }');
  }
}

main();
