import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const MAX_CLASSES: Record<NonNullable<ContainerProps['max']>, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[900px]',
  lg: 'max-w-[1100px]',
  xl: 'max-w-[1400px]',
  full: 'max-w-full'
};

export default function Container({
  children,
  className = '',
  max = 'lg',
  ...props
}: ContainerProps): React.ReactElement {
  const classes = `mx-auto w-full px-4 py-4 ${MAX_CLASSES[max]} ${className}`.trim();
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}
