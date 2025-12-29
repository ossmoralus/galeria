import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { getButtonClasses } from '../components/ui/buttonStyles';

export const metadata: Metadata = {
  title: 'Termos de Uso - Galeria Moralus OSS',
  description: 'Termos de uso da Galeria Moralus OSS'
};

export default function TermosDeUsoPage(): React.ReactElement {
  return (
    <Container max="xl" className="p-5 pb-20">
      <header className="maxW1400 shadowHeader mx-auto mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--vscode-border)] bg-[var(--vscode-editor)] px-4 py-6 backdrop-blur-md">
        <h1 className="m-0 flex items-center gap-2 font-mono text-lg font-semibold text-[var(--text-bright)]">
          <i className="fas fa-file-contract" /> Termos de Uso
        </h1>
        <Link href="/" className={getButtonClasses('secondary', 'md')} title="Voltar para Home">
          <i className="fas fa-arrow-left" /> <span>Voltar para Home</span>
        </Link>
      </header>

      <Card as="section" className="mx-auto max-w-[1100px] leading-relaxed">
        <p className="text-sm text-[var(--text-secondary)]">
          Última atualização: <strong>29/12/2025</strong>
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">1. Sobre o projeto</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          A Galeria Moralus OSS é um site educativo que disponibiliza SVGs (badges e banners) para
          uso em READMEs e projetos, especialmente em perfis do GitHub.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">2. Licença (MIT)</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          O projeto é disponibilizado sob a <strong>Licença MIT</strong>. Em resumo, você pode usar,
          copiar, modificar e redistribuir, desde que mantenha o aviso de copyright/licença.
        </p>
        <p className="mt-2 text-[var(--text-secondary)]">
          Para o texto completo, consulte{' '}
          <a
            href="/LICENSE.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="linkAccent underline-offset-2 hover:underline"
          >
            LICENSE.txt
          </a>
          .
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">3. Sem afiliação</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Os nomes de linguagens, frameworks e ferramentas exibidos nos badges são usados apenas
          como referência informativa/visual.{' '}
          <strong>Não temos afiliação, parceria, patrocínio</strong> ou vínculo com essas
          marcas/projetos.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">4. Uso aceitável</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Você concorda em usar o site e os assets de forma legal e responsável. Não utilize este
          serviço para distribuir conteúdo malicioso, praticar abuso, ou violar direitos de
          terceiros.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">
          5. Disponibilidade e garantias
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          O site e seus conteúdos são fornecidos “como estão”, sem garantias. Podemos alterar ou
          descontinuar funcionalidades a qualquer momento.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">
          6. Hospedagem (Vercel)
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Este site é hospedado na <strong>Vercel</strong>. Para detalhes sobre como dados de acesso
          e telemetria podem ser tratados pela plataforma, consulte a documentação oficial da
          Vercel.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/politica-de-privacidade" className={getButtonClasses('secondary', 'md')}>
            <i className="fas fa-user-shield" /> Política de Privacidade
          </Link>
          <Link href="/galeria" className={getButtonClasses('secondary', 'md')}>
            <i className="fas fa-images" /> Ir para Galeria
          </Link>
        </div>
      </Card>
    </Container>
  );
}
