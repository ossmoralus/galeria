#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Actionlint Wrapper Script
 * Cross-platform wrapper for actionlint to check GitHub Actions workflows
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { platform } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔍 Checking GitHub Actions workflows with actionlint...\n');

try {
  // Check if actionlint is installed
  try {
    execSync('actionlint --version', { stdio: 'pipe' });
  } catch {
    console.log('⚠️  actionlint is not installed.');
    console.log('');
    console.log('To install actionlint:');
    console.log('');
    
    if (platform() === 'win32') {
      console.log('  # Using winget (Windows 11/10):');
      console.log('  winget install actionlint');
      console.log('');
      console.log('  # Using Scoop:');
      console.log('  scoop install actionlint');
      console.log('');
      console.log('  # Or download from: https://github.com/rhysd/actionlint/releases');
    } else if (platform() === 'darwin') {
      console.log('  brew install actionlint');
    } else {
      console.log('  # Download from: https://github.com/rhysd/actionlint/releases');
      console.log('  # Or use the install script:');
      console.log('  bash <(curl https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)');
    }
    
    console.log('');
    console.log('ℹ️  Skipping actionlint check (optional)');
    process.exit(0); // Exit successfully since it's optional
  }

  // Run actionlint
  const workflowsDir = join(rootDir, '.github', 'workflows');
  
  if (!existsSync(workflowsDir)) {
    console.log('⚠️  No .github/workflows directory found');
    process.exit(0);
  }

  execSync('actionlint', {
    cwd: rootDir,
    stdio: 'inherit'
  });

  console.log('\n✅ All workflows are valid!');
  process.exit(0);
} catch (error) {
  if (error.status === 1) {
    console.error('\n❌ Actionlint found issues in workflows!');
    process.exit(1);
  }
  console.error('Error running actionlint:', error.message);
  process.exit(1);
}
