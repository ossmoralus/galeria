import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));
}

function parsePostFile(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: (data['title'] as string) ?? '',
    description: (data['description'] as string) ?? '',
    date: (data['date'] as string) ?? '',
    author: (data['author'] as string) ?? 'Morallus Software',
    category: (data['category'] as string) ?? 'Geral',
    tags: (data['tags'] as string[]) ?? [],
    image: data['image'] as string | undefined,
    videoUrl: data['videoUrl'] as string | undefined,
    published: data['published'] !== false,
    content,
    readingTime: calculateReadingTime(content)
  };
}

export function getAllPosts(): PostMetadata[] {
  const files = getPostFiles();
  const posts = files
    .map((filename) => parsePostFile(filename))
    .filter((post) => post.published === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // eslint-disable-next-line no-unused-vars
  return posts.map(({ content: _content, ...metadata }) => metadata);
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const filename = `${slug}.mdx`;
    const post = parsePostFile(filename);
    return post.published === true ? post : null;
  } catch {
    return null;
  }
}

export function getPostContent(slug: string): Post | null {
  return getPostBySlug(slug);
}

export function getPostsByCategory(category: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}

function calculateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min de leitura`;
}
