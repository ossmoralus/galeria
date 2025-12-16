import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/Footer';
import Header from './components/Header';
import './style/globals.css';
import './style/responsive.css';

export const metadata: Metadata = {
  title: {
    default: 'Galeria Morallus Software',
    template: '%s | Galeria Morallus'
  },
  description: 'Recursos gratuitos para seus perfis no GitHub - SVGs e Blog',
  keywords: [
    'svg',
    'github',
    'galeria',
    'blog',
    'recursos gratuitos',
    'morallus',
    'desenvolvimento'
  ],
  authors: [{ name: 'Morallus Software', url: 'https://github.com/morallus-software' }],
  creator: 'Morallus Software',
  publisher: 'Morallus Software',
  openGraph: {
    title: 'Galeria Morallus Software',
    description: 'Recursos gratuitos para seus perfis no GitHub',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Galeria Morallus'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria Morallus Software',
    description: 'Recursos gratuitos para seus perfis no GitHub'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/icons/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/icons/apple-touch-icon.png'
  },
  manifest: '/manifest.json'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Harmoniza cor da UI do navegador com o background */}
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="m-0 min-h-screen p-0">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
