/**
 * Dados centralizados da galeria de SVGs
 * Facilita manutenção e adição de novos SVGs
 */

export interface SVGItem {
  id: string;
  title: string;
  filename: string;
  alt: string;
  category: 'banner' | 'banner-dark' | 'badge-roles' | 'badge-status' | 'badge-skills' | 'personal';
}

export const svgItems: SVGItem[] = [
  // ===== BANNERS - Light Theme =====
  {
    id: 'banner-1',
    title: 'Banner Tech Verde',
    filename: 'banner/capa-1.svg',
    alt: 'Banner Tech Verde - Agressivo',
    category: 'banner'
  },
  {
    id: 'banner-2',
    title: 'Banner Gradiente',
    filename: 'banner/capa-2.svg',
    alt: 'Banner com Gradiente Moderno',
    category: 'banner'
  },
  {
    id: 'banner-3',
    title: 'Banner Minimalista',
    filename: 'banner/capa-3.svg',
    alt: 'Banner Minimalista Clean',
    category: 'banner'
  },
  {
    id: 'banner-4',
    title: 'Banner Geométrico',
    filename: 'banner/capa-4.svg',
    alt: 'Banner com Formas Geométricas',
    category: 'banner'
  },
  {
    id: 'banner-5',
    title: 'Banner Abstrato',
    filename: 'banner/capa-5.svg',
    alt: 'Banner Abstrato Colorido',
    category: 'banner'
  },
  {
    id: 'banner-6',
    title: 'Banner Waves',
    filename: 'banner/capa-6.svg',
    alt: 'Banner com Ondas e Cores',
    category: 'banner'
  },

  // ===== BANNERS - Dark Theme =====
  {
    id: 'banner-dark-purple',
    title: 'Banner Dark Purple',
    filename: 'banner/capa-dark-1.svg',
    alt: 'Banner Dark com tema Purple e Pink',
    category: 'banner-dark'
  },
  {
    id: 'banner-dark-cyan',
    title: 'Banner Dark Cyan',
    filename: 'banner/capa-dark-2.svg',
    alt: 'Banner Dark com tema Cyan e Blue',
    category: 'banner-dark'
  },
  {
    id: 'banner-dark-orange',
    title: 'Banner Dark Orange',
    filename: 'banner/capa-dark-3.svg',
    alt: 'Banner Dark com tema Orange e Amber',
    category: 'banner-dark'
  },

  // ===== BADGES - Roles =====
  {
    id: 'badge-entusiasta',
    title: 'Badge Entusiasta',
    filename: 'badges/decorativos/badge-entusiasta.svg',
    alt: 'Badge Entusiasta',
    category: 'badge-roles'
  },
  {
    id: 'badge-devops',
    title: 'Badge DevOps Engineer',
    filename: 'badges/decorativos/badge-devops.svg',
    alt: 'Badge DevOps Engineer',
    category: 'badge-roles'
  },
  {
    id: 'badge-data-analyst',
    title: 'Badge Data Analyst',
    filename: 'badges/decorativos/badge-data-analyst.svg',
    alt: 'Badge Data Analyst',
    category: 'badge-roles'
  },
  {
    id: 'badge-full-stack',
    title: 'Badge Full Stack Developer',
    filename: 'badges/decorativos/badge-full-stack.svg',
    alt: 'Badge Full Stack Developer',
    category: 'badge-roles'
  },
  {
    id: 'badge-cloud-architect',
    title: 'Badge Cloud Architect',
    filename: 'badges/decorativos/badge-cloud-architect.svg',
    alt: 'Badge Cloud Architect',
    category: 'badge-roles'
  },
  {
    id: 'badge-machine-learning',
    title: 'Badge Machine Learning',
    filename: 'badges/decorativos/badge-machine-learning.svg',
    alt: 'Badge Machine Learning',
    category: 'badge-roles'
  },
  {
    id: 'badge-security',
    title: 'Badge Security Expert',
    filename: 'badges/decorativos/badge-security.svg',
    alt: 'Badge Security Expert',
    category: 'badge-roles'
  },
  {
    id: 'badge-ui-ux',
    title: 'Badge UI/UX Designer',
    filename: 'badges/decorativos/badge-ui-ux.svg',
    alt: 'Badge UI/UX Designer',
    category: 'badge-roles'
  },
  {
    id: 'badge-tailwind',
    title: 'Badge Tailwind',
    filename: 'badges/skills/badge-tailwind.svg',
    alt: 'Badge Tailwind',
    category: 'badge-skills'
  },

  // ===== BADGES - Skills =====
  {
    id: 'badge-react',
    title: 'Badge React',
    filename: 'badges/skills/badge-react.svg',
    alt: 'Badge React',
    category: 'badge-skills'
  },
  {
    id: 'badge-git',
    title: 'Badge Git',
    filename: 'badges/skills/badge-git.svg',
    alt: 'Badge Git',
    category: 'badge-skills'
  },
  {
    id: 'badge-nodejs',
    title: 'Badge Node.js',
    filename: 'badges/skills/badge-nodejs.svg',
    alt: 'Badge Node.js',
    category: 'badge-skills'
  },
  {
    id: 'badge-javascript',
    title: 'Badge JavaScript',
    filename: 'badges/skills/badge-javascript.svg',
    alt: 'Badge JavaScript',
    category: 'badge-skills'
  },
  {
    id: 'badge-typescript-skill',
    title: 'Badge TypeScript',
    filename: 'badges/skills/badge-typescript.svg',
    alt: 'Badge TypeScript',
    category: 'badge-skills'
  },
  {
    id: 'badge-css3',
    title: 'Badge CSS3',
    filename: 'badges/skills/badge-css.svg',
    alt: 'Badge CSS3',
    category: 'badge-skills'
  },
  {
    id: 'badge-html5',
    title: 'Badge HTML5',
    filename: 'badges/skills/badge-html.svg',
    alt: 'Badge HTML5',
    category: 'badge-skills'
  },
  // ===== BADGES - Project Status =====
  {
    id: 'badge-build',
    title: 'Build Passing',
    filename: 'badges/info/badge-build-passing.svg',
    alt: 'Build Passing Badge',
    category: 'badge-status'
  },
  {
    id: 'badge-tests',
    title: 'Tests Passing',
    filename: 'badges/info/badge-tests-passing.svg',
    alt: 'Tests Passing Badge',
    category: 'badge-status'
  },
  {
    id: 'badge-coverage',
    title: 'Coverage 98%',
    filename: 'badges/info/badge-coverage-98.svg',
    alt: 'Coverage Badge',
    category: 'badge-status'
  },
  {
    id: 'badge-version',
    title: 'Version 2.1.0',
    filename: 'badges/info/badge-version-2.1.0.svg',
    alt: 'Version Badge',
    category: 'badge-status'
  },
  {
    id: 'badge-license',
    title: 'License MIT',
    filename: 'badges/info/badge-license-mit.svg',
    alt: 'License MIT Badge',
    category: 'badge-status'
  },

  // ===== PERSONAL =====
  {
    id: 'morallus',
    title: 'Morallus Software',
    filename: 'mim/morallus.svg',
    alt: 'Logo Morallus Software',
    category: 'personal'
  }
];

// Funções auxiliares para filtrar por categoria
export const getBannerItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'banner');

export const getBannerDarkItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'banner-dark');

export const getBadgeRoleItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'badge-roles');

export const getBadgeStatusItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'badge-status');

export const getBadgeDarkItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'badge-skills');

export const getPersonalItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'personal');
