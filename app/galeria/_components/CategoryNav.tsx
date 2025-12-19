'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Category {
  slug: string;
  label: string;
  icon: string;
  count?: number;
}

const categories: Category[] = [
  { slug: '', label: 'Todos', icon: 'fas fa-th-large' },
  { slug: 'banners', label: 'Banners', icon: 'fas fa-image' },
  { slug: 'skills', label: 'Skills', icon: 'fas fa-code' },
  { slug: 'decorativos', label: 'Decorativos', icon: 'fas fa-star' },
  { slug: 'info', label: 'Info/Status', icon: 'fas fa-info-circle' }
];

export default function CategoryNav(): React.ReactElement {
  const pathname = usePathname();

  const isActive = (slug: string): boolean => {
    if (slug === '') {
      return pathname === '/galeria';
    }
    return pathname === `/galeria/${slug}`;
  };

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug === '' ? '/galeria' : `/galeria/${cat.slug}`}
            className={`
              inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium
              no-underline transition-all duration-200
              ${
                isActive(cat.slug)
                  ? 'shadow-[var(--accent-teal)]/30 bg-[var(--accent-teal)] text-white shadow-lg'
                  : 'border border-[var(--vscode-border)] bg-[var(--vscode-editor)] text-[var(--text-muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]'
              }
            `}
          >
            <i className={cat.icon} />
            <span>{cat.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
