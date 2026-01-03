import Image from 'next/image';
import type { LogoProps } from '@/types/ui';

export default function Logo({
  size = 48,
  showText = true,
  className = ''
}: LogoProps): React.ReactElement {
  return (
    <div
      className={`inline-flex cursor-pointer items-center gap-3 transition-transform hover:scale-105 ${className}`}
    >
      <Image
        src="/icons/logo.jpg"
        alt="Moralus OSS Logo"
        width={size}
        height={size}
        className="shadowLogo rounded-lg object-cover"
        priority
      />
      {showText && (
        <span className="logoText text-xl font-normal tracking-wide text-[var(--text-primary)]">
          Moralus <strong>OSS</strong>
        </span>
      )}
    </div>
  );
}
