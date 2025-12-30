'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Container from './ui/Container';
import Button from './ui/Button';

export default function Footer(): React.ReactElement {
  return (
    <footer className="footerContainer mt-10 w-full border-t border-[var(--vscode-border)]">
      <Container max="xl" className="text-center">
        <div className="mb-6 flex flex-col items-center gap-5">
          <Logo size={48} showText />
        </div>

        <p className="textBase mb-5 leading-relaxed text-[var(--text-secondary)]">
          Feito por{' '}
          <Link
            href="https://github.com/ossmoralus"
            target="_blank"
            rel="noopener noreferrer"
            className="linkAccent"
          >
            <i className="fab fa-github" /> Moralus OSS
          </Link>
        </p>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
          <Button
            href="https://github.com/ossmoralus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositório GitHub"
            variant="secondary"
            size="sm"
            className="inline-flex items-center gap-1.5"
          >
            <i className="fab fa-github" /> GitHub
          </Button>

          <Button
            href="https://wa.me/5537998553430"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar via WhatsApp"
            variant="secondary"
            size="sm"
            className="inline-flex items-center gap-1.5"
          >
            <i className="fab fa-whatsapp" /> WhatsApp
          </Button>
        </div>

        {/* Mobile: collapsible extras */}
        <MobileExtras />

        <p className="textXs m-0 leading-relaxed tracking-wide text-[var(--text-secondary)]">
          <i className="fas fa-graduation-cap mr-1 text-[var(--accent-light)]" /> Educativo •{' '}
          <i className="fas fa-code-branch mr-1 text-[var(--accent-light)]" /> Open Source •{' '}
          <i className="fas fa-balance-scale mr-1 text-[var(--accent-light)]" />
          <a
            href="/LICENSE.txt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver licença MIT"
            className="linkAccent underline-offset-2 hover:underline"
          >
            MIT License
          </a>
        </p>
      </Container>
    </footer>
  );
}

function MobileExtras(): React.ReactElement | null {
  const [open, setOpen] = useState(false);

  return (
    <div className="footerMobileExtras mt-4">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-controls="footer-extras"
        type="button"
        className="inline-flex items-center gap-2 rounded border border-[var(--vscode-border)] bg-transparent px-3 py-2 text-sm font-medium text-[var(--text-primary)]"
      >
        {open ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />} Mais
        opções
      </button>

      <div id="footer-extras" className={`${open ? 'mt-3 block' : 'hidden'}`}>
        <div className="mb-4 text-sm text-[var(--text-secondary)]">
          <a
            href="/LICENSE.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:text-accent-bright underline-offset-2 transition-colors hover:underline"
          >
            Ver licença MIT
          </a>
        </div>
      </div>
    </div>
  );
}
