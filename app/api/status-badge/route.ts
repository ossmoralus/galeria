/**
 * API route para geração de badge de status do projeto
 */

import type { NextRequest } from 'next/server';
// eslint-disable-next-line no-duplicate-imports
import { NextResponse } from 'next/server';
import { generateStatusSVG, getTheme, type Theme } from '@/lib/statusBadgeSvg';

export function GET(request: NextRequest): NextResponse {
  const { searchParams } = request.nextUrl;

  const themeQuery = searchParams.get('theme');
  const themeParam = themeQuery !== null && themeQuery.trim() !== '' ? themeQuery : 'ocean';

  const variantQuery = searchParams.get('variant');
  const variant = variantQuery !== null && variantQuery.trim() !== '' ? variantQuery : 'default';

  const theme: Theme = getTheme(themeParam);

  const svg = generateStatusSVG(theme, variant);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
