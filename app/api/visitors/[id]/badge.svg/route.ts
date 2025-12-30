import { NextResponse } from 'next/server';
import { getVisitorsRedis, normalizeVisitorId, visitorKey } from '@/lib/visitors';
import { renderVisitorBadgeSvg } from '@/lib/visitorBadgeSvg';

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

  try {
    const redis = getVisitorsRedis();
    const key = visitorKey(id);
    const count = shouldIncrement ? await redis.incr(key) : ((await redis.get<number>(key)) ?? 0);

    const svg = renderVisitorBadgeSvg(label, String(count));
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
    const svg = renderVisitorBadgeSvg(label, 'n/a');
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
