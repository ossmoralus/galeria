'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ContentRendererProps {
  content: MDXRemoteSerializeResult;
}

export default function ContentRenderer({ content }: ContentRendererProps): React.ReactElement {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote {...content} />
    </div>
  );
}
