/**
 * Tipos relacionados à galeria de SVGs
 */

export type CategoryType = 'banner' | 'skills' | 'decorativos' | 'info';

export interface SVGItem {
  id: string;
  title: string;
  filename: string;
  alt: string;
  category: CategoryType;
}

export interface CategoryInfo {
  title: string;
  icon: string;
  description: string;
}
