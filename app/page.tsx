import Link from 'next/link';
import Container from './components/ui/Container';
import Card from './components/ui/Card';
import Badge from './components/ui/Badge';

export default function HomePage(): React.ReactElement {
  return (
    <main className="homeMain flex min-h-screen flex-col items-center justify-center p-5 text-center">
      <div className="homeHeading mb-10">
        <h2 className="homeSubtitle mb-10 text-xl font-light leading-relaxed text-[var(--accent-primary)] [animation:fadeInUp_0.8s_ease-out_0.2s_backwards]">
          Recursos gratuitos e educativos para desenvolvedores. SVGs animados para seus projetos no
          GitHub e conteúdo exclusivo no blog.
        </h2>
      </div>

      <Container
        max="md"
        className="gridCardsHome grid w-full gap-5 [animation:fadeIn_1s_ease-out_0.4s_backwards]"
      >
        <Link href="/galeria" className="no-underline">
          <Card
            as="article"
            className="homeCard relative flex flex-col items-center gap-5 px-7 py-10 before:absolute before:inset-0 before:bg-[var(--gradient-card-overlay)] before:opacity-0 before:transition-opacity before:content-[''] hover:-translate-y-2 hover:border-[var(--accent-light)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <i className="fas fa-images text-[4rem] text-[var(--accent-tertiary)]" />
            <h2 className="m-0 text-2xl font-semibold">Galeria SVG</h2>
            <p className="m-0 text-base font-light leading-relaxed text-[var(--text-secondary)]">
              Banners profissionais e badges modernos para seus projetos. Copie e use no seu README
              do GitHub!
            </p>
            <Badge>
              <i className="fas fa-check-circle mr-1" /> 25 SVGs disponíveis
            </Badge>
          </Card>
        </Link>

        <Link href="/blog" className="no-underline">
          <Card
            as="article"
            className="homeCard relative flex flex-col items-center gap-5 bg-[rgb(10_61_44_/_8%)] px-7 py-10 before:absolute before:inset-0 before:bg-[var(--gradient-card-overlay)] before:opacity-0 before:transition-opacity before:content-[''] hover:-translate-y-2 hover:border-[var(--accent-light)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <i className="fas fa-blog text-[4rem] text-[var(--accent-purple)]" />
            <h2 className="m-0 text-2xl font-semibold">Blog</h2>
            <p className="m-0 text-base font-light leading-relaxed text-[var(--text-secondary)]">
              Artigos, tutoriais e dicas sobre desenvolvimento web, design e boas práticas.
            </p>
            <Badge className="border border-[var(--badge-purple-border)] bg-[var(--badge-purple-bg)] text-[var(--accent-purple)] shadow-[var(--shadow-badge)]">
              <i className="fas fa-clock mr-1" /> Em breve
            </Badge>
          </Card>
        </Link>
      </Container>

      {/* Footer removido: já renderizado globalmente em RootLayout */}
    </main>
  );
}
