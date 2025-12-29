import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'public', 'svg', 'badges', 'skills');
const dirs = {
  langs: path.join(root, 'langs'),
  ferramentas: path.join(root, 'ferramentas'),
  tecnologias: path.join(root, 'tecnologias')
};

for (const dir of Object.values(dirs)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Mantenha estas listas curtas e explícitas.
// O restante cai em "tecnologias".
const LANGS = new Set([
  'badge-javascript',
  'badge-typescript',
  'badge-python',
  'badge-java',
  'badge-csharp',
  'badge-go',
  'badge-rust',
  'badge-php',
  'badge-ruby',
  'badge-swift',
  'badge-kotlin',
  'badge-cpp',
  'badge-c',
  'badge-scala',
  'badge-elixir',
  'badge-haskell',
  'badge-lua',
  'badge-dart',
  'badge-r',
  'badge-perl',
  'badge-html',
  'badge-css'
]);

const FERRAMENTAS = new Set([
  'badge-git',
  'badge-github',
  'badge-github-actions',
  'badge-gitlab',
  'badge-bitbucket',
  'badge-eslint',
  'badge-prettier',
  'badge-jest',
  'badge-vitest',
  'badge-mocha',
  'badge-cypress',
  'badge-playwright',
  'badge-selenium',
  'badge-testing-library',
  'badge-storybook',
  'badge-webpack',
  'badge-rollup',
  'badge-vite',
  'badge-turbo',
  'badge-nx',
  'badge-lerna',
  'badge-esbuild',
  'badge-npm',
  'badge-yarn',
  'badge-pnpm',
  'badge-bun',
  'badge-deno',
  'badge-docker',
  'badge-kubernetes',
  'badge-terraform',
  'badge-ansible',
  'badge-jenkins',
  'badge-travisci',
  'badge-circleci',
  'badge-sonarqube',
  'badge-postman',
  'badge-insomnia',
  'badge-figma',
  'badge-jira',
  'badge-notion',
  'badge-vscode',
  'badge-neovim',
  'badge-intellij',
  'badge-jupyter',
  'badge-slack',
  'badge-discord'
]);

function groupFor(fileBase) {
  if (LANGS.has(fileBase)) return 'langs';
  if (FERRAMENTAS.has(fileBase)) return 'ferramentas';
  return 'tecnologias';
}

const entries = fs.readdirSync(root, { withFileTypes: true });
const files = entries.filter((e) => e.isFile() && e.name.endsWith('.svg')).map((e) => e.name);

let moved = 0;
let skipped = 0;
const counts = { langs: 0, ferramentas: 0, tecnologias: 0 };

for (const file of files) {
  const from = path.join(root, file);
  const base = file.replace(/\.svg$/i, '');
  const group = groupFor(base);
  const to = path.join(dirs[group], file);

  if (fs.existsSync(to)) {
    skipped++;
    continue;
  }

  fs.renameSync(from, to);
  moved++;
  counts[group]++;
}

console.log('Reorganização concluída.');
console.log({ root, moved, skipped, counts });
