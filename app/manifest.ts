import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Galeria Moralus OSS',
    short_name: 'Galeria Moraus',
    description: 'Recursos gratuitos para seus perfis no GitHub - SVGs e Blog',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#007acc',
    icons: [
      {
        src: '/icons/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon'
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
