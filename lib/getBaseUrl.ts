export function getBaseUrl(): string {
  const envUrl = process.env['NEXT_PUBLIC_SITE_URL'];
  const vercelEnv = process.env['VERCEL_ENV'];
  const vercelUrl = process.env['VERCEL_URL'];

  const canonicalProductionUrl = process.env['NEXT_PUBLIC_CANONICAL_URL'];

  const normalize = (url: string): string => url.replace(/\/$/, '');

  if (envUrl !== undefined && envUrl !== null && envUrl !== '') return normalize(envUrl);

  const ensureCanonical = (): string => {
    if (
      canonicalProductionUrl !== undefined &&
      canonicalProductionUrl !== null &&
      canonicalProductionUrl !== ''
    ) {
      return normalize(canonicalProductionUrl);
    }

    throw new Error(
      'Base URL não configurada para produção. Defina NEXT_PUBLIC_CANONICAL_URL (ex: https://seu-dominio) '
    );
  };

  // Em produção na Vercel, preferimos a URL canônica do projeto (alias),
  // ao invés do deployment URL aleatório em `VERCEL_URL`.
  if (vercelEnv === 'production') return ensureCanonical();

  // Em preview (e outros ambientes Vercel), usar o deployment URL para manter tudo consistente.
  if (vercelUrl !== undefined && vercelUrl !== null && vercelUrl !== '') {
    return `https://${vercelUrl}`;
  }

  if (process.env['NODE_ENV'] !== 'production') return 'http://localhost:3000';

  // Fora da Vercel mas em modo produção (ex: build local), exigimos a URL canônica.
  return ensureCanonical();
}
