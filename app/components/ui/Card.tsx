import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'section';
}

export default function Card({
  children,
  className = '',
  as = 'div',
  ...props
}: CardProps): React.ReactElement {
  const Tag: React.ElementType = as;
  const classes =
    `relative rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-1)] p-4 shadowCard transition-all ${className}`.trim();

  return (
    <Tag {...props} className={classes}>
      {children}
    </Tag>
  );
}
