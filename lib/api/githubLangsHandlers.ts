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

function getDisplayName(searchParams: URLSearchParams, defaultUsername: string): string {
  const name = searchParams.get('name');
  if (name !== null && name.trim() !== '') {
    return name.trim();
  }
  return `@${defaultUsername}`;
}

export async function handleGitHubLangsRequest(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
): Promise<Response> {
  const { username } = await params;
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token') ?? searchParams.get('github_token') ?? undefined;

  try {
    const languages = await fetchGitHubTopLanguages(username, token ?? undefined);
    const config = parseCommonParams(searchParams);
    const displayName = getDisplayName(searchParams, username);

    const svg = generateLanguagesSVG(languages, displayName, config);

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

export async function handleGitHubLangsPreviewRequest(
  request: Request,
  { params }: { params: Promise<{ theme: string }> }
): Promise<Response> {
  const { theme: themeParam } = await params;
  const { searchParams } = new URL(request.url);
  const config = parseCommonParams(searchParams);
  const theme = parseTheme(themeParam ?? 'dark');

  const svg = generateLanguagesPreviewSVG(theme, config);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
