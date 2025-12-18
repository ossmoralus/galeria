interface SVGGalleryNotificationProps {
  message: string;
}

export default function SVGGalleryNotification({
  message
}: SVGGalleryNotificationProps): React.ReactElement {
  return (
    <div className="iconMd shadowNotification fixed right-5 top-5 z-[2000] animate-[slideIn_0.3s_ease] rounded border border-[var(--accent-green)] bg-[var(--success)] px-5 py-3 font-mono font-medium text-[var(--vscode-bg)]">
      {message}
    </div>
  );
}
