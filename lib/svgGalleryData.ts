/**
 * Dados centralizados da galeria de SVGs
 * Este arquivo re-exporta dados dos arquivos de categoria individuais
 * para manter compatibilidade com importações existentes.
 *
 * Para novos códigos, considere importar diretamente de:
 * - lib/gallery/types.ts - Tipos e interfaces
 * - lib/gallery/banners.ts - Dados dos banners
 * - lib/gallery/skills.ts - Dados dos badges de skills
 * - lib/gallery/decorativos.ts - Dados dos badges decorativos
 * - lib/gallery/info.ts - Dados dos badges de info
 */

import { bannerItems } from './gallery/banners';
import { decorativosItems } from './gallery/decorativos';
import { infoItems } from './gallery/info';
import { skillsItems } from './gallery/skills';
import { categoryLabels, type CategoryType, type SVGItem } from './gallery/types';

// Re-exporta tipos para compatibilidade
export type { CategoryType, SVGItem };

// Re-exporta categoryLabels para compatibilidade
export { categoryLabels };
// Combina todos os items em um único array
export const svgItems: SVGItem[] = [
  ...bannerItems,
  ...decorativosItems,
  ...infoItems,
  ...skillsItems
];

// Funções auxiliares para filtrar por categoria
export const getBannerItems = (): SVGItem[] => bannerItems;

export const getSkillsItems = (): SVGItem[] => skillsItems;

export const getDecorativosItems = (): SVGItem[] => decorativosItems;

export const getInfoItems = (): SVGItem[] => infoItems;

export const getItemsByCategory = (category: CategoryType): SVGItem[] =>
  svgItems.filter((item) => item.category === category);
