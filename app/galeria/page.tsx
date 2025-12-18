'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../components/ui/Container';
import SVGCard from '../components/ui/SVGCard';
import CodeModal from '../components/ui/CodeModal';
import SVGGalleryNotification from '../components/ui/SVGGalleryNotification';
import SVGGalleryInstructions from '../components/ui/SVGGalleryInstructions';
import { svgItems } from '@/lib/svgGalleryData';

export default function GaleriaPage(): React.ReactElement {
  const [notification, setNotification] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentCode, setCurrentCode] = useState<string>('');

  const showNotification = (message: string): void => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const getBaseUrl = (): string => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'https://galeria-drab.vercel.app';
  };

  const generateMarkdownCode = (filename: string): string => {
    const baseUrl = getBaseUrl();
    const imageUrl = `${baseUrl}/api/svg/${filename}`;
    return `![${filename}](${imageUrl})`;
  };

  const copyCode = async (filename: string): Promise<void> => {
    const markdownCode = generateMarkdownCode(filename);
    await navigator.clipboard.writeText(markdownCode);
    showNotification('✓ Código copiado com sucesso!');
  };

  const downloadSVG = (filename: string): void => {
    const link = document.createElement('a');
    link.href = `/api/svg/${filename}`;
    link.download = filename;
    link.click();
    showNotification('✓ Download iniciado!');
  };

  const viewCode = (filename: string): void => {
    const markdownCode = generateMarkdownCode(filename);
    setCurrentCode(markdownCode);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const copyModalCode = async (): Promise<void> => {
    await navigator.clipboard.writeText(currentCode);
    showNotification('✓ Código copiado!');
  };

  return (
    <>
      {/* Header global renderizado via RootLayout */}
      <Container max="xl" className="galeriaContainer py-6">
        <Link
          href="/"
          className="galeriaLinkBack inline-flex items-center gap-2 rounded-md border border-[var(--accent-teal)] bg-[rgb(26_77_92_/_15%)] px-5 py-2.5 font-medium text-[var(--accent-cyan)] no-underline transition-all hover:-translate-x-1 hover:bg-[var(--accent-teal)] hover:text-white"
        >
          <i className="fas fa-arrow-left" /> Voltar para Home
        </Link>
      </Container>
      <main className="galeriaGrid mx-auto grid w-full grid-cols-1 gap-5 px-4 pb-9">
        {svgItems.map((item, index) => (
          <SVGCard
            key={item.id}
            id={item.id}
            title={item.title}
            filename={item.filename}
            alt={item.alt}
            index={index}
            onCopy={copyCode}
            onDownload={downloadSVG}
            onViewCode={viewCode}
          />
        ))}
      </main>

      <CodeModal
        code={currentCode}
        isOpen={showModal}
        onClose={closeModal}
        onCopy={copyModalCode}
      />

      {notification !== '' && <SVGGalleryNotification message={notification} />}

      <SVGGalleryInstructions />
    </>
  );
}
