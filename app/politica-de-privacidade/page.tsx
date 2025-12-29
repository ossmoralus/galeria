import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { getButtonClasses } from '../components/ui/buttonStyles';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Galeria Moralus OSS',
  description: 'Política de privacidade da Galeria Moralus OSS'
};

export default function PoliticaDePrivacidadePage(): React.ReactElement {
  return (
    <Container max="xl" className="p-5 pb-20">
      <header className="maxW1400 shadowHeader mx-auto mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--vscode-border)] bg-[var(--vscode-editor)] px-4 py-6 backdrop-blur-md">
        <h1 className="m-0 flex items-center gap-2 font-mono text-lg font-semibold text-[var(--text-bright)]">
          <i className="fas fa-user-shield" /> Política de Privacidade
        </h1>
        <Link href="/" className={getButtonClasses('secondary', 'md')} title="Voltar para Home">
          <i className="fas fa-arrow-left" /> <span>Voltar para Home</span>
        </Link>
      </header>

      <Card as="section" className="mx-auto max-w-[1100px] leading-relaxed">
        <p className="text-sm text-[var(--text-secondary)]">
          Última atualização: <strong>29/12/2025</strong>
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">1. Visão geral</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Esta Política de Privacidade descreve, de forma resumida, como lidamos com dados ao
          disponibilizar a Galeria Moralus OSS.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">
          2. Dados que coletamos
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Não exigimos cadastro e não solicitamos dados pessoais diretamente para usar a galeria.
          Entretanto, como em qualquer site, dados técnicos podem ser processados automaticamente
          pela infraestrutura de hospedagem (por exemplo, registros de acesso).
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">
          3. Analytics e performance
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Podemos usar ferramentas de analytics e performance disponibilizadas pela Vercel para
          entender uso do site e melhorar estabilidade.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">
          4. Hospedagem (Vercel)
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Este site é hospedado na <strong>Vercel</strong>. Para mais detalhes sobre como a Vercel
          lida com dados, logs e telemetria, consulte a documentação oficial da Vercel.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">5. Sem afiliação</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Os badges exibem nomes de linguagens e ferramentas apenas como referência informativa.{' '}
          <strong>Não temos afiliação, parceria, patrocínio</strong> ou vínculo com as
          marcas/projetos representados.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[var(--text-bright)]">6. Contato</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Para dúvidas, acesse os links do projeto (GitHub/Discord) no rodapé.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/termos-de-uso" className={getButtonClasses('secondary', 'md')}>
            <i className="fas fa-file-contract" /> Termos de Uso
          </Link>
          <Link href="/galeria" className={getButtonClasses('secondary', 'md')}>
            <i className="fas fa-images" /> Ir para Galeria
          </Link>
        </div>
      </Card>
    </Container>
  );
}
