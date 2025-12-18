import FeatureItem from './FeatureItem';
import Panel from './Panel';

export default function SVGGalleryInstructions(): React.ReactElement {
  return (
    <section className="svgInstructions maxW900 shadowInstructions mx-auto mt-14 rounded-lg border border-l-[3px] border-[var(--vscode-border)] border-l-[var(--accent-blue)] bg-[var(--vscode-editor)] p-10">
      <h2 className="svgInstructionsTitle text4xl mb-8 flex items-center justify-center gap-3 text-center font-mono text-[var(--text-bright)]">
        <i className="fas fa-rocket" /> Como usar no GitHub?
      </h2>
      <ul className="flex list-none flex-col gap-5 p-0">
        <FeatureItem icon={<i className="fas fa-mouse-pointer" />}>
          Clique em &quot;Copiar Código&quot; no SVG desejado
        </FeatureItem>
        <FeatureItem icon={<i className="fas fa-paste" />}>
          Cole no seu README.md do GitHub
        </FeatureItem>
        <FeatureItem icon={<i className="fas fa-check-circle" />}>
          Pronto! Seu perfil está mais bonito{' '}
          <i className="fas fa-star text-[var(--accent-yellow)]" />
        </FeatureItem>
      </ul>

      <Panel className="mt-7 flex items-center justify-center text-center">
        <i className="fas fa-lightbulb mr-2 text-[var(--accent-yellow)]" />
        <strong>Exemplo básico:</strong>
      </Panel>
      <Panel className="mt-2.5 overflow-x-auto">
        <code className="whitespace-nowrap text-sm">
          ![Badge](https://galeria-drab.vercel.app/api/svg/badge-entusiasta.svg)
        </code>
      </Panel>

      <div className="mt-5 flex items-center justify-center rounded border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-5 text-center">
        <i className="fas fa-sliders-h mr-2 text-[var(--accent-green)]" />
        <strong>Customizar tamanho:</strong>
      </div>
      <Panel className="mt-2.5 overflow-x-auto">
        <code className="whitespace-nowrap text-sm">
          ![Badge](https://galeria-drab.vercel.app/api/svg/badge-devops.svg?width=300)
        </code>
      </Panel>
      <Panel className="mt-2.5 overflow-x-auto">
        <code className="whitespace-nowrap text-sm">
          ![Banner](https://galeria-drab.vercel.app/api/svg/capa-4.svg?width=800)
        </code>
      </Panel>
      <Panel className="mt-2.5 overflow-x-auto">
        <code className="whitespace-nowrap text-sm">
          ![Banner 100%](https://galeria-drab.vercel.app/api/svg/capa-4.svg?width=100%)
        </code>
      </Panel>

      <div className="mt-5 flex items-center justify-center rounded border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-5 text-center">
        <i className="fas fa-info-circle mr-2 text-[var(--accent-blue)]" />
        <strong>Parâmetros disponíveis:</strong>
      </div>
      <div className="mt-2.5 flex flex-col items-start justify-center rounded border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-5 text-center">
        <code className="mb-1.5">?width=500 ou ?w=500 - Define largura em pixels</code>
        <code className="mb-1.5">?width=100% - Largura 100% (responsivo)</code>
        <code className="mb-1.5">?height=200 ou ?h=200 - Define altura</code>
        <code>?width=600&height=300 - Define ambos explicitamente</code>
      </div>
    </section>
  );
}
