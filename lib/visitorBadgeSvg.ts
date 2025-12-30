import { VISITOR_BADGE_SVG_BASE } from '@/lib/visitorBadgeBase';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function renderVisitorBadgeSvg(label: string, value: string): string {
  // Badge simples (estilo “flat”) sem depender de libs.
  // Medidas fixas para manter previsibilidade no GitHub README.
  const safeLabel = escapeXml(label);
  const safeValue = escapeXml(value);

  const ariaLabel = `${safeLabel}: ${safeValue}`;
  return VISITOR_BADGE_SVG_BASE.replace('__ARIA_LABEL__', ariaLabel)
    .replace('__LABEL__', safeLabel)
    .replace('__VALUE__', safeValue);
}
