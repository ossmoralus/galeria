export function getBaseUrl(): string {
  const envUrl = process.env['NEXT_PUBLIC_SITE_URL'];
  const vercelEnv = process.env['VERCEL_ENV'];
  const vercelUrl = process.env['VERCEL_URL'];

  const canonicalProductionUrl = process.env['NEXT_PUBLIC_CANONICAL_URL'];

  const normalize = (url: string): string => url.replace(/\/$/, '');

  if (envUrl !== undefined && envUrl !== null && envUrl !== '') return normalize(envUrl);

  // Em produção na Vercel, preferimos a URL canônica do projeto (alias),
  // ao invés do deployment URL aleatório em `VERCEL_URL`.
  if (vercelEnv === 'production') {
    if (
      canonicalProductionUrl !== undefined &&
      canonicalProductionUrl !== null &&
      canonicalProductionUrl !== ''
    ) {
      return normalize(canonicalProductionUrl);
    }

    // Falha explícita apenas no ambiente que realmente importa (produção na Vercel).
    throw new Error(
      'Base URL não configurada para produção. Defina NEXT_PUBLIC_CANONICAL_URL (ex: https://seu-dominio) '
    );
  }

  // Em preview (e outros ambientes Vercel), usar o deployment URL para manter tudo consistente.
  if (vercelUrl !== undefined && vercelUrl !== null && vercelUrl !== '') {
    return `https://${vercelUrl}`;
  }

  // Fora da Vercel, mas com URL canônica configurada, usar ela como base.
  if (
    canonicalProductionUrl !== undefined &&
    canonicalProductionUrl !== null &&
    canonicalProductionUrl !== ''
  ) {
    return normalize(canonicalProductionUrl);
  }

  // Último fallback (dev/build local). Evita quebrar o build estático sem env.
  return 'http://localhost:3000';
}
