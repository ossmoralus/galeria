import { NextResponse } from 'next/server';
import { getVisitorsRedis, normalizeVisitorId, visitorKey } from '@/lib/visitors';
import { renderVisitorBadgeSvg } from '@/lib/visitorBadgeSvg';

function normalizeHexColor(value: string | null): string | undefined {
  if (value === null) return undefined;
  const trimmed = value.trim();
  if (trimmed === '') return undefined;

  const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
  // Aceita apenas hex curto (3) ou completo (6) para evitar valores maliciosos.
  if (/^#[0-9a-fA-F]{3}$/.test(withHash) || /^#[0-9a-fA-F]{6}$/.test(withHash)) {
    return withHash;
  }
  return undefined;
}

function normalizeShape(value: string | null): 'rounded' | 'square' | 'pill' | undefined {
  if (value === null) return undefined;
  switch (value.trim().toLowerCase()) {
    case 'rounded':
      return 'rounded';
    case 'square':
      return 'square';
    case 'pill':
      return 'pill';
    default:
      return undefined;
  }
}

export const runtime = 'edge';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id: rawId } = await params;
  const id = normalizeVisitorId(rawId);
  if (id === null) {
    return new NextResponse('Invalid id', {
      status: 400,
      headers: { 'Cache-Control': 'no-store' }
    });
  }

  const { searchParams } = new URL(request.url);
  const label = searchParams.get('label') ?? 'visitors';
  const incrementParam = searchParams.get('increment');
  const shouldIncrement = incrementParam === null ? true : incrementParam !== '0';

  const labelBg = normalizeHexColor(searchParams.get('labelColor'));
  const valueBg = normalizeHexColor(searchParams.get('valueColor'));
  const textColor = normalizeHexColor(searchParams.get('textColor'));
  const shape = normalizeShape(searchParams.get('shape'));

  const styleOptions = {
    ...(labelBg !== undefined ? { labelBg } : {}),
    ...(valueBg !== undefined ? { valueBg } : {}),
    ...(textColor !== undefined ? { textColor } : {}),
    ...(shape !== undefined ? { shape } : {})
  };

  try {
    const redis = getVisitorsRedis();
    const key = visitorKey(id);
    const count = shouldIncrement ? await redis.incr(key) : ((await redis.get<number>(key)) ?? 0);

    const svg = renderVisitorBadgeSvg(label, String(count), styleOptions);
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        // GitHub tende a cachear imagens; force revalidação.
        'Cache-Control': 'no-store',
        'X-Visitors-Configured': '1'
      }
    });
  } catch (error) {
    console.error('Visitors badge error:', error);
    const svg = renderVisitorBadgeSvg(label, 'n/a', styleOptions);
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'no-store',
        // GitHub pode não renderizar imagem se status != 200.
        'X-Visitors-Configured': '0'
      }
    });
  }
}
