'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { ContentRendererProps } from '@/types/blog';

export default function ContentRenderer({ content }: ContentRendererProps): React.ReactElement {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote {...content} />
    </div>
  );
}
