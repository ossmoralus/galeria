import { generateGitHubStatsSVG } from '@/lib/github-stats-svg';
import { fetchGitHubStats } from '@/lib/github-stats';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
): Promise<Response> {
  const { username } = params;
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme') ?? 'dark';

  try {
    // Busca stats reais do GitHub
    const stats = await fetchGitHubStats(username);

    // Gera SVG com os dados
    const svg = generateGitHubStatsSVG(stats, username, {
      theme: theme as 'dark' | 'light' | 'neon' | 'sunset' | 'ocean' | 'forest'
    });

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Erro ao gerar SVG:', error);

    return new NextResponse('Erro ao buscar dados do GitHub', { status: 500 });
  }
}
