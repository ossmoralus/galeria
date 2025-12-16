// Tailwind migration: remove CSS module usage

export default function Loading(): React.ReactElement {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="flex gap-3">
        <span className="size-3 animate-[bounce_1.4s_infinite_ease-in-out_both] rounded-full bg-[var(--accent-tertiary)]" />
        <span className="size-3 animate-[bounce_1.4s_infinite_ease-in-out_both] rounded-full bg-[var(--accent-light)] [animation-delay:-0.16s]" />
        <span className="size-3 animate-[bounce_1.4s_infinite_ease-in-out_both] rounded-full bg-[var(--accent-bright)]" />
      </div>
      <p className="animate-[pulse_1.5s_ease-in-out_infinite] font-mono text-base text-[var(--text-primary)]">
        Carregando...
      </p>
    </div>
  );
}
