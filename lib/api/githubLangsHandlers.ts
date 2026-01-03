import { NextResponse } from 'next/server';
import { fetchGitHubTopLanguages } from '@/lib/github-stats';
import { generateLanguagesPreviewSVG, generateLanguagesSVG } from '@/lib/github-langs-svg';
import type { GitHubCardTheme, GitHubCommonParams } from '@/types/github';

const THEMES = [
  'dark',
  'light',
  'neon',
  'sunset',
  'ocean',
  'forest'
] as const satisfies readonly GitHubCardTheme[];

function parseTheme(value: string | null | undefined): GitHubCardTheme {
  if (value === null || value === undefined) return 'dark';
  return (THEMES as readonly string[]).includes(value) ? (value as GitHubCardTheme) : 'dark';
}

function parseCommonParams(searchParams: URLSearchParams): GitHubCommonParams {
  const theme = parseTheme(searchParams.get('theme'));
  const borderRadius = searchParams.get('border_radius') ?? searchParams.get('borderRadius');
  const showBorder = searchParams.get('show_border') ?? searchParams.get('showBorder');
  const borderWidth = searchParams.get('border_width') ?? searchParams.get('borderWidth');
  const widthParam = searchParams.get('width') ?? searchParams.get('w');
  const heightParam = searchParams.get('height') ?? searchParams.get('h');

  return {
    theme,
    ...(borderRadius !== null && { borderRadius: parseInt(borderRadius) }),
    ...(showBorder !== null && { showBorder: showBorder === 'true' }),
    ...(borderWidth !== null && { borderWidth: parseInt(borderWidth) }),
    ...(widthParam !== null && !Number.isNaN(Number(widthParam)) && { width: Number(widthParam) }),
    ...(heightParam !== null &&
      !Number.isNaN(Number(heightParam)) && { height: Number(heightParam) })
  };
}

export async function handleGitHubLangsRequest(
  request: Request,
  { params }: { params: { username: string } }
): Promise<Response> {
  const { username } = params;
  const { searchParams } = new URL(request.url);

  try {
    const languages = await fetchGitHubTopLanguages(username);
    const config = parseCommonParams(searchParams);

    const svg = generateLanguagesSVG(languages, username, config);

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Erro ao gerar SVG de linguagens:', error);
    return new NextResponse('Erro ao buscar linguagens do GitHub', { status: 500 });
  }
}

export function handleGitHubLangsPreviewRequest(
  request: Request,
  { params }: { params: { theme: string } }
): Response {
  const { searchParams } = new URL(request.url);
  const config = parseCommonParams(searchParams);
  const theme = parseTheme(params.theme ?? 'dark');

  const svg = generateLanguagesPreviewSVG(theme, config);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
