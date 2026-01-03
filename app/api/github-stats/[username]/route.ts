import { generateGitHubStatsSVG } from '@/lib/github-stats-svg';
import { fetchGitHubStats } from '@/lib/github-stats';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
): Promise<Response> {
  const { username } = params;
  const { searchParams } = new URL(request.url);

  // Query params para customização
  const theme = searchParams.get('theme') ?? 'dark';
  const borderRadius = searchParams.get('border_radius') ?? searchParams.get('borderRadius');
  const showBorder = searchParams.get('show_border') ?? searchParams.get('showBorder');
  const borderWidth = searchParams.get('border_width') ?? searchParams.get('borderWidth');

  try {
    // Busca stats reais do GitHub
    const stats = await fetchGitHubStats(username);

    // Gera SVG com os dados e customizações
    const svg = generateGitHubStatsSVG(stats, username, {
      theme: theme as 'dark' | 'light' | 'neon' | 'sunset' | 'ocean' | 'forest',
      ...(borderRadius !== null && { borderRadius: parseInt(borderRadius) }),
      ...(showBorder !== null && { showBorder: showBorder === 'true' }),
      ...(borderWidth !== null && { borderWidth: parseInt(borderWidth) })
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
