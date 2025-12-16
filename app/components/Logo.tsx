import Image from 'next/image';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string | undefined;
}

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
        src="/images/logo.jpg"
        alt="Morallus Software Logo"
        width={size}
        height={size}
        className="rounded-lg object-cover shadow-[0_2px_8px_rgb(45_125_110_/_30%)]"
        priority
      />
      {showText && (
        <span className="logoText text-xl font-normal tracking-wide text-[var(--text-primary)]">
          Morallus <strong>Software</strong>
        </span>
      )}
    </div>
  );
}
