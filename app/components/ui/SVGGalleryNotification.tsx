interface SVGGalleryNotificationProps {
  message: string;
}

export default function SVGGalleryNotification({
  message
}: SVGGalleryNotificationProps): React.ReactElement {
  return (
    <div className="fixed right-5 top-5 z-[2000] animate-[slideIn_0.3s_ease] rounded border border-[var(--accent-green)] bg-[var(--success)] px-5 py-3 font-mono text-[14px] font-medium text-[var(--vscode-bg)] shadow-[0_4px_16px_rgb(78_201_176_/_40%)]">
      {message}
    </div>
  );
}
