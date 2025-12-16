#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * YAML Linter Script
 * Validates all YAML files in the repository
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

try {
  // Get all YAML files tracked by git
  const yamlFiles = execSync('git ls-files "*.yml" "*.yaml"', {
    cwd: rootDir,
    encoding: 'utf-8'
  })
    .trim()
    .split('\n')
    .filter(Boolean);

  console.log(`📋 Found ${yamlFiles.length} YAML files to check...\n`);

  let hasErrors = false;

  for (const file of yamlFiles) {
    try {
      process.stdout.write(`Checking ${file}... `);
      execSync(`npx yaml-lint "${file}"`, {
        cwd: rootDir,
        stdio: 'pipe'
      });
      console.log('✅');
    } catch (error) {
      console.log('❌');
      console.error(`\nError in ${file}:`);
      console.error(error.stdout?.toString() || error.message);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error('\n❌ YAML validation failed!');
    process.exit(1);
  } else {
    console.log('\n✅ All YAML files are valid!');
    process.exit(0);
  }
} catch (error) {
  console.error('Error running YAML lint:', error.message);
  process.exit(1);
}
