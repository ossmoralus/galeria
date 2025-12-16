import Container from './components/ui/Container';
import Card from './components/ui/Card';
import Button from './components/ui/Button';

export default function NotFound(): React.ReactElement {
  return (
    <div className="flex min-h-screen items-center justify-center p-5">
      <Container max="sm">
        <Card className="px-6 py-8 text-center shadow-[0_8px_32px_rgb(0_0_0_/_50%)]">
          <h1 className="mb-5 bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-light)] bg-clip-text font-mono text-6xl font-bold text-transparent">
            404
          </h1>
          <i className="fas fa-search text-[3rem] text-[var(--accent-tertiary)]" />
          <h2 className="my-5 font-mono text-2xl text-[var(--text-bright)]">
            Página não encontrada
          </h2>
          <p className="mb-7 text-base leading-relaxed text-[var(--text-secondary)]">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button href="/" variant="primary" size="md">
            <i className="fas fa-home" /> Voltar para Home
          </Button>
        </Card>
      </Container>
    </div>
  );
}
