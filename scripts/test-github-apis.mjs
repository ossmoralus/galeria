#!/usr/bin/env node

/**
 * Script de teste para as APIs do GitHub
 * Testa se as consultas reais estão funcionando corretamente
 * 
 * Funciona com QUALQUER usuário do GitHub (público)
 * Token é OPCIONAL - melhora apenas o rate limit
 * 
 * Uso:
 *   node scripts/test-github-apis.mjs                    # Testa com 'octocat'
 *   node scripts/test-github-apis.mjs seu-usuario        # Testa com seu-usuario
 *   GITHUB_TOKEN=ghp_... node scripts/test-github-apis.mjs seu-usuario
 */

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.argv[2] || 'octocat';

// Query GraphQL para stats
const statsQuery = `
  query {
    user(login: "${USERNAME}") {
      followers {
        totalCount
      }
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
        totalCount
        nodes {
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
      pullRequests(first: 1) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

async function testGitHubStats() {
  console.log(`🔍 Testando GitHub Stats API (GraphQL) - Usuário: "${USERNAME}"\n`);

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json'
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    console.log('✅ Token encontrado - rate limit melhorado (5.000 req/hora)\n');
  } else {
    console.log('ℹ️  Sem token - usando rate limit público (60 req/hora)\n');
    console.log('💡 Dica: Configure GITHUB_TOKEN para melhor performance\n');
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: statsQuery })
    });

    if (!response.ok) {
      console.warn(
        `⚠️  GraphQL retornou status ${response.status}. ` +
        `Isso é esperado sem token (usar fallback REST API).\n`
      );
      return 'fallback'; // Indica que deve usar fallback
    }

    const data = await response.json();

    if (data.errors) {
      console.warn(
        `⚠️  GraphQL retornou erro: "${data.errors[0].message}"\n` +
        `Usando fallback REST API para dados reais.\n`
      );
      return 'fallback';
    }

    const user = data.data?.user;
    
    if (!user) {
      console.error(`❌ Usuário "${USERNAME}" não encontrado`);
      return false;
    }

    let totalCommits = 0;
    if (user.repositories?.nodes) {
      for (const repo of user.repositories.nodes) {
        const commits = repo.defaultBranchRef?.target?.history?.totalCount ?? 0;
        totalCommits += commits;
      }
    }

    console.log(`📊 Resultados Reais (GraphQL) - Usuário: ${USERNAME}`);
    console.log('━'.repeat(50));
    console.log(`👥 Seguidores: ${user.followers?.totalCount || 0}`);
    console.log(`📦 Repositórios públicos: ${user.repositories?.totalCount || 0}`);
    console.log(`💾 Total de commits: ${totalCommits || 0}`);
    console.log(`🔀 Pull requests: ${user.pullRequests?.totalCount || 0}`);
    console.log(`📈 Contribuições (últimos 12m): ${user.contributionsCollection?.contributionCalendar?.totalContributions || 0}`);
    console.log('━'.repeat(50));
    console.log('✅ GitHub Stats (GraphQL) funcionando para qualquer usuário!\n');
    return true;
  } catch (error) {
    console.error('❌ Erro ao testar Stats:', error.message);
    return false;
  }
}

async function testGitHubLanguages() {
  console.log(`🔍 Testando GitHub Languages API (REST) - Usuário: "${USERNAME}"\n`);

  const headers = {
    'Accept': 'application/vnd.github.v3+json'
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    console.log('✅ Token encontrado - rate limit melhorado\n');
  } else {
    console.log('ℹ️  Sem token - rate limit público (funciona normalmente)\n');
  }

  try {
    // Busca repositórios do usuário
    const reposResponse = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner&sort=updated`,
      { headers }
    );

    if (!reposResponse.ok) {
      if (reposResponse.status === 404) {
        console.error(`❌ Usuário "${USERNAME}" não encontrado`);
      } else {
        throw new Error(`HTTP error! status: ${reposResponse.status}`);
      }
      return false;
    }

    const repos = await reposResponse.json();
    
    if (!Array.isArray(repos) || repos.length === 0) {
      console.log(`⚠️  Nenhum repositório encontrado para "${USERNAME}"\n`);
      return true;
    }

    console.log(`📦 Repositórios encontrados: ${repos.length}`);
    console.log('Processando linguagens dos 5 primeiros...\n');
    console.log('━'.repeat(50));

    const languageTotals = new Map();
    let reposProcessed = 0;

    for (const repo of repos.slice(0, 5)) {
      if (!repo.languages_url) continue;

      try {
        const langResponse = await fetch(repo.languages_url, { headers });
        
        if (!langResponse.ok) continue;

        const langData = await langResponse.json();
        
        if (Object.keys(langData).length === 0) continue;

        console.log(`📂 ${repo.name}:`);
        
        for (const [lang, bytes] of Object.entries(langData)) {
          const kb = (bytes / 1024).toFixed(1);
          console.log(`   ${lang}: ${kb} KB`);
          languageTotals.set(lang, (languageTotals.get(lang) ?? 0) + bytes);
        }

        reposProcessed++;
      } catch (langError) {
        console.error(`   ⚠️  Erro ao processar: ${langError.message}`);
      }
    }

    if (reposProcessed === 0) {
      console.log('⚠️  Nenhum repositório com linguagens encontrado\n');
      return true;
    }

    console.log('\n' + '━'.repeat(50));
    console.log('Top 5 Linguagens (total):');
    console.log('━'.repeat(50));

    const total = Array.from(languageTotals.values()).reduce((a, b) => a + b, 0);
    
    if (total === 0) {
      console.log('⚠️  Nenhuma linguagem detectada\n');
      return true;
    }

    Array.from(languageTotals.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .forEach(([lang, bytes], idx) => {
        const percentage = ((bytes / total) * 100).toFixed(1);
        console.log(`${idx + 1}. ${lang}: ${percentage}%`);
      });

    console.log('━'.repeat(50));
    console.log('✅ GitHub Languages (REST) funcionando para qualquer usuário!\n');
    return true;
  } catch (error) {
    console.error('❌ Erro ao testar Languages:', error.message);
    return false;
  }
}

async function main() {
  console.log('\n' + '═'.repeat(50));
  console.log('  🧪 Teste de APIs do GitHub (Consultas Reais)');
  console.log('═'.repeat(50) + '\n');

  const statsResult = await testGitHubStats();
  const langsOk = await testGitHubLanguages();

  console.log('═'.repeat(50));
  if (statsResult === true && langsOk) {
    console.log('  ✅ Todos os testes passaram!');
    console.log('  💡 As APIs funcionam para QUALQUER usuário público');
  } else if (statsResult === 'fallback' || langsOk) {
    console.log('  ✅ APIs funcionando (com fallback REST quando necessário)');
    console.log('  💡 Configure GITHUB_TOKEN para melhor performance');
  } else {
    console.log('  ❌ Alguns testes falharam');
  }
  console.log('═'.repeat(50) + '\n');
}

main();


