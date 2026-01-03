import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import PostContent from './PostContent';
import { getPostContent, getAllPosts } from '@/lib/posts';
import type { BlogSlugPageProps, BlogPostMetadata } from '@/types/blog';

export function generateStaticParams(): Array<{ slug: string }> {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<BlogPostMetadata> {
  const { slug } = await params;
  const post = getPostContent(slug);

  if (post === null) {
    return {
      title: 'Post não encontrado'
    };
  }

  return {
    title: `${post.title} | Blog Moralus`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags
    }
  };
}

export default async function PostPage({ params }: BlogSlugPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = getPostContent(slug);

  if (post === null) {
    notFound();
  }

  const mdxContent = await serialize(post.content);

  return <PostContent post={post} mdxContent={mdxContent} />;
}
