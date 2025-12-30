import { type NextRequest, NextResponse } from 'next/server';
import { getVisitorsRedis, normalizeVisitorId, visitorKey } from '@/lib/visitors';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id: rawId } = await params;
  const id = normalizeVisitorId(rawId);
  if (id === null) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const { searchParams } = new URL(request.url);
  const incrementParam = searchParams.get('increment');
  const shouldIncrement = incrementParam === null ? true : incrementParam !== '0';

  try {
    const redis = getVisitorsRedis();
    const key = visitorKey(id);

    const count = shouldIncrement ? await redis.incr(key) : ((await redis.get<number>(key)) ?? 0);

    return NextResponse.json(
      {
        id,
        count
      },
      {
        headers: {
          // Sem cache: o valor muda a cada request.
          'Cache-Control': 'no-store',
          // Útil caso você consuma via fetch em sites externos.
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    // Normalmente isso acontece quando as envs do Upstash não estão configuradas.
    console.error('Visitors counter error:', error);
    return NextResponse.json(
      {
        error: 'Visitors counter not configured'
      },
      {
        status: 501,
        headers: {
          'Cache-Control': 'no-store',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}
