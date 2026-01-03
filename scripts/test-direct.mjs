#!/usr/bin/env node

/**
 * Teste direto das funções de fetch do projeto
 */

import { fetchGitHubStats, fetchGitHubTopLanguages } from '../lib/github-stats.ts';

async function testDirectly() {
  console.log('Testing fetchGitHubStats directly...\n');
  
  const stats = await fetchGitHubStats('torvalds');
  console.log('Stats:', stats);
  
  console.log('\nTesting fetchGitHubTopLanguages directly...\n');
  const langs = await fetchGitHubTopLanguages('torvalds');
  console.log('Languages:', langs);
}

testDirectly().catch(console.error);
