// Detectar tipo de vídeo pela URL
function getEmbedUrl(videoUrl: string): string | null {
  // YouTube
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = videoUrl.match(youtubeRegex);
    if (match?.[1] !== undefined) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }

  // Vimeo
  if (videoUrl.includes('vimeo.com')) {
    const vimeoRegex = /vimeo\.com\/(\d+)/;
    const match = videoUrl.match(vimeoRegex);
    if (match?.[1] !== undefined) {
      return `https://player.vimeo.com/video/${match[1]}`;
    }
  }

  // Loom
  if (videoUrl.includes('loom.com')) {
    const loomRegex = /loom\.com\/share\/([a-zA-Z0-9]+)/;
    const match = videoUrl.match(loomRegex);
    if (match?.[1] !== undefined) {
      return `https://www.loom.com/embed/${match[1]}`;
    }
  }

  // Se já for uma URL embed, retorna direto
  if (videoUrl.includes('embed')) {
    return videoUrl;
  }

  return null;
}

export default function VideoEmbed({ url }: { url: string }): React.ReactElement | null {
  const embedUrl = getEmbedUrl(url);

  if (embedUrl === null) {
    return null;
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        className="absolute inset-0 size-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      />
    </div>
  );
}
