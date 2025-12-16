export function getBaseUrl(): string {
  const envUrl = process.env['NEXT_PUBLIC_SITE_URL'];
  const vercelUrl = process.env['VERCEL_URL'];

  if (envUrl !== undefined && envUrl !== null && envUrl !== '') return envUrl;
  if (vercelUrl !== undefined && vercelUrl !== null && vercelUrl !== '') {
    return `https://${vercelUrl}`;
  }
  if (process.env['NODE_ENV'] !== 'production') return 'http://localhost:3000';
  // Fallback para build (não quebra o build, mas loga aviso)
  return 'https://galeria-morallus.vercel.app';
}
