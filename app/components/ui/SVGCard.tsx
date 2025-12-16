import Button from './Button';
import Card from './Card';

interface SVGCardProps {
  id: string;
  title: string;
  filename: string;
  alt: string;
  index: number;
  onCopy: (filename: string) => Promise<void>;
  onDownload: (filename: string) => void;
  onViewCode: (filename: string) => void;
}

export default function SVGCard({
  id,
  title,
  filename,
  alt,
  index,
  onCopy,
  onDownload,
  onViewCode
}: SVGCardProps): React.ReactElement {
  return (
    <Card
      key={id}
      className="svgCard [animation:fadeInUp_0.6s_ease-out_backwards] before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:transform before:bg-gradient-to-r before:from-[var(--accent-tertiary)] before:to-[var(--accent-light)] before:transition-transform before:content-[''] hover:-translate-y-2 hover:border-[var(--accent-light)] hover:shadow-[0_0_20px_rgb(20_184_166_/_40%),_0_20px_40px_rgb(0_0_0_/_50%)] hover:before:scale-x-100"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="svgCardTitle mb-4 font-mono text-[1.4em] font-semibold text-[var(--text-bright)]">
        {title}
      </div>

      <div className="bg-black mb-3 max-h-[300px] overflow-hidden rounded-md border border-[var(--border-default)]">
        <img className="size-full object-cover" src={`/api/svg/${filename}`} alt={alt} />
      </div>

      <div className="svgCardActions flex flex-wrap gap-2">
        <Button
          className="svgCardButton font-mono text-[13px]"
          variant="primary"
          onClick={() => void onCopy(filename)}
          type="button"
        >
          <i className="fas fa-copy" /> Copiar Código
        </Button>

        <Button
          className="svgCardButton font-mono text-[13px]"
          variant="secondary"
          onClick={() => onDownload(filename)}
          type="button"
        >
          <i className="fas fa-download" /> Download
        </Button>

        <Button
          className="svgCardButton font-mono text-[13px]"
          variant="secondary"
          onClick={() => onViewCode(filename)}
          type="button"
        >
          <i className="fas fa-code" /> Ver Código
        </Button>
      </div>
    </Card>
  );
}
