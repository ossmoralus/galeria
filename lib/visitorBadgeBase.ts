export const VISITOR_BADGE_SVG_BASE = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="28" role="img" aria-label="__ARIA_LABEL__">
  <linearGradient id="g" x2="0" y2="100%">
    <stop offset="0" stop-color="#fff" stop-opacity=".12"/>
    <stop offset="1" stop-opacity=".12"/>
  </linearGradient>
  <rect width="160" height="28" rx="6" fill="#111"/>
  <rect x="86" width="74" height="28" rx="6" fill="#222"/>
  <path fill="#222" d="M86 0h6v28h-6z"/>
  <rect width="160" height="28" rx="6" fill="url(#g)"/>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,sans-serif" font-size="12">
    <text x="43" y="19">__LABEL__</text>
    <text x="123" y="19">__VALUE__</text>
  </g>
</svg>`;
