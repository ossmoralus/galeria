'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Container from './ui/Container';
const NAV_PRIMARY_DESKTOP =
  'inline-flex items-center justify-center gap-2 rounded-md border border-[var(--accent-tertiary)] bg-[var(--gradient-button)] px-5 py-2.5 text-base text-white shadow-[var(--shadow-button)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-button-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)] font-medium';

const NAV_PRIMARY_MOBILE =
  'inline-flex items-center justify-center gap-2 rounded-md border border-[var(--accent-tertiary)] bg-[var(--gradient-button)] px-4 py-2 text-sm text-white shadow-[var(--shadow-button)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-button-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)] font-medium';

const NAV_SECONDARY_DESKTOP =
  'inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-secondary)] px-5 py-2.5 text-base text-[var(--text-primary)] transition-[transform,box-shadow,border-color,color,background-color] duration-200 hover:border-[var(--accent-light)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-light)] hover:shadow-[var(--shadow-button)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)] font-medium';

const NAV_SECONDARY_MOBILE =
  'inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-2 text-sm text-[var(--text-primary)] transition-[transform,box-shadow,border-color,color,background-color] duration-200 hover:border-[var(--accent-light)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-light)] hover:shadow-[var(--shadow-button)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)] font-medium';

const NAV_GHOST_CLASS =
  'inline-flex items-center justify-center gap-2 rounded-md p-2 text-[var(--text-primary)] transition-colors duration-150 hover:text-[var(--accent-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)] font-medium';

export default function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="headerContainer sticky top-0 z-[100] border-b border-[var(--vscode-border)] bg-[var(--vscode-editor)] p-4 backdrop-blur-md">
      <Container max="xl" className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Logo size={48} showText />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="headerNavDesktop hidden">
          <Link href="/galeria/criar" className={NAV_PRIMARY_DESKTOP}>
            {' '}
            <i className="fas fa-magic" /> Criar Badge
          </Link>
          <Link href="/galeria" className={NAV_SECONDARY_DESKTOP}>
            {' '}
            <i className="fas fa-images" /> Galeria
          </Link>
          <Link href="/blog" className={NAV_SECONDARY_DESKTOP}>
            {' '}
            <i className="fas fa-book" /> Blog
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="headerMobileControls flex items-center gap-2">
          <button
            ref={toggleRef}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((s) => !s)}
            type="button"
            className={NAV_GHOST_CLASS}
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
          </button>
        </div>

        {/* Mobile nav (dropdown) */}
        <div
          className={`headerMobileNav absolute inset-x-0 top-full z-50 overflow-hidden border-t border-[var(--vscode-border)] bg-[var(--vscode-editor)] transition-[max-height,opacity] ${
            open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!open}
        >
          <div className="mx-auto max-w-[1100px] p-4">
            <div className="flex flex-col gap-2">
              <Link href="/galeria/criar" className={NAV_PRIMARY_MOBILE}>
                {' '}
                <i className="fas fa-magic" /> Criar Badge
              </Link>
              <Link href="/galeria" className={NAV_SECONDARY_MOBILE}>
                {' '}
                <i className="fas fa-images" /> Galeria
              </Link>
              <Link href="/blog" className={NAV_SECONDARY_MOBILE}>
                {' '}
                <i className="fas fa-book" /> Blog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
