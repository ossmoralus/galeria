/**
 * Tipos compartilhados para a galeria de SVGs
 */

import type { CategoryType, SVGItem, CategoryInfo } from '@/app/types/galeria';

// Re-export para manter compatibilidade
export type { CategoryType, SVGItem, CategoryInfo };

export const categoryLabels: Record<CategoryType, CategoryInfo> = {
  banner: {
    title: 'Banners',
    icon: 'fas fa-image',
    description: 'Banners decorativos para o topo do seu perfil GitHub'
  },
  skills: {
    title: 'Skills & Tecnologias',
    icon: 'fas fa-code',
    description: 'Badges de linguagens, frameworks e ferramentas'
  },
  decorativos: {
    title: 'Decorativos',
    icon: 'fas fa-star',
    description: 'Badges de roles, profissões e títulos'
  },
  info: {
    title: 'Info & Status',
    icon: 'fas fa-info-circle',
    description: 'Badges de status do projeto, versão, licença, etc.'
  }
};
