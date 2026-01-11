'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop(): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      // Mostra o botão quando o usuário rolar mais de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="scrollToTop"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
