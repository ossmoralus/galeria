interface CodeModalProps {
  code: string;
  isOpen: boolean;
  onClose: () => void;
  onCopy: () => Promise<void>;
}

export default function CodeModal({
  code,
  isOpen,
  onClose,
  onCopy
}: CodeModalProps): React.ReactElement | null {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="bg-black/90 fixed inset-0 z-[1000] flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="codeModal relative max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-lg border border-[var(--vscode-border)] bg-[var(--vscode-editor)] p-7 shadow-[0_8px_32px_rgb(0_0_0_/_60%)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2>
            <i className="fas fa-code" /> Código Markdown
          </h2>
          <button
            className="inline-flex size-8 items-center justify-center rounded border border-[var(--vscode-border)] bg-[var(--error)] text-[20px] text-[var(--text-bright)] transition-all hover:scale-110 hover:shadow-[0_4px_12px_rgb(244_135_113_/_40%)]"
            onClick={onClose}
            type="button"
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="overflow-x-auto rounded border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-5">
          <pre>{code}</pre>
        </div>
        <button
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded border border-[var(--accent-teal)] bg-[var(--accent-teal)] px-5 py-2.5 font-mono text-[13px] font-medium text-[var(--text-bright)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-cyan)] hover:shadow-[0_4px_12px_rgb(45_125_110_/_50%)]"
          onClick={() => void onCopy()}
          type="button"
        >
          <i className="fas fa-copy" /> Copiar Código
        </button>
      </div>
    </div>
  );
}
