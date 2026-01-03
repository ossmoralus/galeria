/**
 * Tipos relacionados ao sistema de blog
 */

export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string | undefined;
  videoUrl?: string | undefined;
  readingTime?: string | undefined;
  published?: boolean;
}

export interface Post extends PostMetadata {
  content: string;
}
