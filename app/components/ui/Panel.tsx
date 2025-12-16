import React from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article';
}

export default function Panel({
  children,
  as = 'div',
  className = '',
  ...props
}: PanelProps): React.ReactElement {
  const Tag: React.ElementType = as;
  const base = 'rounded border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-4';
  return (
    <Tag {...props} className={`${base} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
