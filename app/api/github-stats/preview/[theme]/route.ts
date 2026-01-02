import { generatePreviewSVG } from '@/lib/github-stats-svg';
import { NextResponse } from 'next/server';

export function GET(_request: Request, { params }: { params: { theme: string } }): Response {
  const theme = params.theme ?? 'dark';
  const svg = generatePreviewSVG(theme);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
