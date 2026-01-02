/**
 * Gerador de SVG customizado para status do GitHub
 */

import { formatNumber, type GitHubStats } from './github-stats';

export interface SVGStyleConfig {
  bgColor?: string;
  borderColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  accentColor?: string;
  theme?: 'dark' | 'light' | 'neon' | 'sunset' | 'ocean' | 'forest';
}

const themes: Record<string, Required<SVGStyleConfig>> = {
  dark: {
    bgColor: '#0d1117',
    borderColor: '#30363d',
    primaryColor: '#58a6ff',
    secondaryColor: '#79c0ff',
    textColor: '#c9d1d9',
    accentColor: '#58a6ff',
    theme: 'dark'
  },
  light: {
    bgColor: '#ffffff',
    borderColor: '#e5e7eb',
    primaryColor: '#0066cc',
    secondaryColor: '#0052a3',
    textColor: '#1f2937',
    accentColor: '#ff6b6b',
    theme: 'light'
  },
  neon: {
    bgColor: '#0a0e27',
    borderColor: '#1a1f3a',
    primaryColor: '#00ff88',
    secondaryColor: '#00ddff',
    textColor: '#e0e0e0',
    accentColor: '#ff006e',
    theme: 'neon'
  },
  sunset: {
    bgColor: '#1a0b2e',
    borderColor: '#16213e',
    primaryColor: '#ff6b35',
    secondaryColor: '#f7931e',
    textColor: '#fdc830',
    accentColor: '#f37335',
    theme: 'sunset'
  },
  ocean: {
    bgColor: '#0a1628',
    borderColor: '#0f2540',
    primaryColor: '#00d4ff',
    secondaryColor: '#0099cc',
    textColor: '#a8dadc',
    accentColor: '#457b9d',
    theme: 'ocean'
  },
  forest: {
    bgColor: '#0d2818',
    borderColor: '#1a4d2e',
    primaryColor: '#52b788',
    secondaryColor: '#2d6a4f',
    textColor: '#d8f3dc',
    accentColor: '#1b4332',
    theme: 'forest'
  }
};

export function generateGitHubStatsSVG(
  stats: GitHubStats,
  username: string = 'username',
  config?: SVGStyleConfig
): string {
  const theme = config?.theme ?? 'dark';
  const style = { ...themes[theme], ...config };

  const width = 500;
  const height = 280;
  const padding = 20;
  const cardWidth = (width - padding * 3) / 2;
  const cardHeight = 100;

  // Calcula posições das estatísticas
  const statsData = [
    { label: 'Commits', value: formatNumber(stats.totalCommits), icon: '📝' },
    { label: 'Pull Requests', value: formatNumber(stats.totalPullRequests), icon: '🔀' },
    { label: 'Contribuições', value: formatNumber(stats.totalContributions), icon: '⭐' },
    { label: 'Repositórios', value: stats.publicRepos.toString(), icon: '📦' }
  ];

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .stat-bg { fill: ${style.bgColor}; stroke: ${style.borderColor}; stroke-width: 1.5; }
      .stat-label { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; fill: ${style.textColor}; opacity: 0.8; }
      .stat-value { font-family: 'Segoe UI', Arial, sans-serif; font-size: 24px; font-weight: bold; fill: ${style.primaryColor}; }
      .username { font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; font-weight: 600; fill: ${style.textColor}; }
      .title { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; fill: ${style.secondaryColor}; font-weight: 500; }
      .border { stroke: ${style.accentColor}; stroke-width: 2; fill: none; }
      .emoji { font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 20px; }
    </style>
    <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${style.primaryColor};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:${style.secondaryColor};stop-opacity:0.3" />
    </linearGradient>
    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${style.primaryColor};stop-opacity:0.05" />
      <stop offset="100%" style="stop-color:${style.accentColor};stop-opacity:0.05" />
    </linearGradient>
  </defs>

  <!-- Background principal -->
  <rect width="${width}" height="${height}" fill="${style.bgColor}"/>

  <!-- Header com gradient -->
  <rect width="${width}" height="60" fill="url(#headerGradient)"/>
  <rect width="${width}" height="60" fill="${style.borderColor}" opacity="0.1"/>

  <!-- Linha de decoração -->
  <line x1="0" y1="60" x2="${width}" y2="60" stroke="${style.primaryColor}" stroke-width="1" opacity="0.3"/>

  <!-- Username e título -->
  <text x="${padding}" y="30" class="username">@${username}</text>
  <text x="${padding}" y="48" class="title">GitHub Stats</text>

  <!-- Icon decorativo -->
  <circle cx="${width - padding - 20}" cy="30" r="18" fill="${style.borderColor}" opacity="0.3"/>
  <text x="${width - padding - 15}" y="37" class="emoji">📊</text>

  <!-- Cards com estatísticas -->
  ${statsData
    .map((stat, idx) => {
      const row = Math.floor(idx / 2);
      const col = idx % 2;
      const x = padding + col * (cardWidth + padding);
      const y = 80 + row * (cardHeight + padding);

      return `
    <!-- Card ${idx + 1} -->
    <g>
      <rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="8" class="stat-bg" fill="url(#cardGradient)" opacity="0.8"/>
      <text x="${x + 15}" y="${y + 25}" class="emoji">${stat.icon}</text>
      <text x="${x + 15}" y="${y + 55}" class="stat-value">${stat.value}</text>
      <text x="${x + 15}" y="${y + 80}" class="stat-label">${stat.label}</text>
    </g>
      `;
    })
    .join('')}

  <!-- Border decorativo no topo -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="${style.accentColor}" stroke-width="2" opacity="0.4" rx="0"/>

  <!-- Footer -->
  <text x="${width / 2}" y="${height - 8}" text-anchor="middle" style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; fill: ${style.textColor}; opacity: 0.5;">Generated with ❤️ by GitHub Stats SVG</text>
</svg>`;
}

/**
 * Gera uma versão preview do SVG com dados simulados
 */
export function generatePreviewSVG(theme: string = 'dark'): string {
  const mockStats: GitHubStats = {
    totalCommits: 1250,
    totalPullRequests: 85,
    totalContributions: 542,
    followers: 45,
    publicRepos: 24
  };

  return generateGitHubStatsSVG(mockStats, 'seu-usuario', {
    theme: theme as 'dark' | 'light' | 'neon' | 'sunset' | 'ocean' | 'forest'
  });
}
