/**
 * Tipos relacionados às estatísticas do GitHub
 */

export interface GitHubStats {
  totalCommits: number;
  totalPullRequests: number;
  totalContributions: number;
  followers: number;
  publicRepos: number;
}

export interface SVGStyleConfig {
  bgColor?: string;
  borderColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  accentColor?: string;
  theme?: 'dark' | 'light' | 'neon' | 'sunset' | 'ocean' | 'forest';
}
