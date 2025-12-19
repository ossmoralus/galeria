/**
 * Dados centralizados da galeria de SVGs
 * Facilita manutenção e adição de novos SVGs
 */

export type CategoryType = 'banner' | 'skills' | 'decorativos' | 'info';

export interface SVGItem {
  id: string;
  title: string;
  filename: string;
  alt: string;
  category: CategoryType;
}

export const svgItems: SVGItem[] = [
  // ===== BANNERS =====
  {
    id: 'banner-1',
    title: 'Banner Tech Verde',
    filename: 'banner/capa-1.svg',
    alt: 'Banner Tech Verde - Agressivo',
    category: 'banner'
  },
  {
    id: 'banner-2',
    title: 'Banner Gradiente',
    filename: 'banner/capa-2.svg',
    alt: 'Banner com Gradiente Moderno',
    category: 'banner'
  },
  {
    id: 'banner-3',
    title: 'Banner Minimalista',
    filename: 'banner/capa-3.svg',
    alt: 'Banner Minimalista Clean',
    category: 'banner'
  },
  {
    id: 'banner-4',
    title: 'Banner Geométrico',
    filename: 'banner/capa-4.svg',
    alt: 'Banner com Formas Geométricas',
    category: 'banner'
  },
  {
    id: 'banner-5',
    title: 'Banner Abstrato',
    filename: 'banner/capa-5.svg',
    alt: 'Banner Abstrato Colorido',
    category: 'banner'
  },
  {
    id: 'banner-6',
    title: 'Banner Waves',
    filename: 'banner/capa-6.svg',
    alt: 'Banner com Ondas e Cores',
    category: 'banner'
  },
  {
    id: 'banner-dark-purple',
    title: 'Banner Dark Purple',
    filename: 'banner/capa-dark-1.svg',
    alt: 'Banner Dark com tema Purple e Pink',
    category: 'banner'
  },
  {
    id: 'banner-dark-cyan',
    title: 'Banner Dark Cyan',
    filename: 'banner/capa-dark-2.svg',
    alt: 'Banner Dark com tema Cyan e Blue',
    category: 'banner'
  },
  {
    id: 'banner-dark-orange',
    title: 'Banner Dark Orange',
    filename: 'banner/capa-dark-3.svg',
    alt: 'Banner Dark com tema Orange e Amber',
    category: 'banner'
  },

  // ===== BADGES DECORATIVOS (Roles/Profissões) =====
  {
    id: 'badge-entusiasta',
    title: 'Badge Entusiasta',
    filename: 'badges/decorativos/badge-entusiasta.svg',
    alt: 'Badge Entusiasta',
    category: 'decorativos'
  },
  {
    id: 'badge-devops',
    title: 'Badge DevOps Engineer',
    filename: 'badges/decorativos/badge-devops.svg',
    alt: 'Badge DevOps Engineer',
    category: 'decorativos'
  },
  {
    id: 'badge-data-analyst',
    title: 'Badge Data Analyst',
    filename: 'badges/decorativos/badge-data-analyst.svg',
    alt: 'Badge Data Analyst',
    category: 'decorativos'
  },
  {
    id: 'badge-full-stack',
    title: 'Badge Full Stack Developer',
    filename: 'badges/decorativos/badge-full-stack.svg',
    alt: 'Badge Full Stack Developer',
    category: 'decorativos'
  },
  {
    id: 'badge-cloud-architect',
    title: 'Badge Cloud Architect',
    filename: 'badges/decorativos/badge-cloud-architect.svg',
    alt: 'Badge Cloud Architect',
    category: 'decorativos'
  },
  {
    id: 'badge-machine-learning',
    title: 'Badge Machine Learning',
    filename: 'badges/decorativos/badge-machine-learning.svg',
    alt: 'Badge Machine Learning',
    category: 'decorativos'
  },
  {
    id: 'badge-security',
    title: 'Badge Security Expert',
    filename: 'badges/decorativos/badge-security.svg',
    alt: 'Badge Security Expert',
    category: 'decorativos'
  },
  {
    id: 'badge-ui-ux',
    title: 'Badge UI/UX Designer',
    filename: 'badges/decorativos/badge-ui-ux.svg',
    alt: 'Badge UI/UX Designer',
    category: 'decorativos'
  },

  // ===== BADGES INFO (Status do Projeto) =====
  {
    id: 'badge-build',
    title: 'Build Passing',
    filename: 'badges/info/badge-build-passing.svg',
    alt: 'Build Passing Badge',
    category: 'info'
  },
  {
    id: 'badge-tests',
    title: 'Tests Passing',
    filename: 'badges/info/badge-tests-passing.svg',
    alt: 'Tests Passing Badge',
    category: 'info'
  },
  {
    id: 'badge-coverage',
    title: 'Coverage 98%',
    filename: 'badges/info/badge-coverage-98.svg',
    alt: 'Coverage Badge',
    category: 'info'
  },
  {
    id: 'badge-version',
    title: 'Version 2.1.0',
    filename: 'badges/info/badge-version-2.1.0.svg',
    alt: 'Version Badge',
    category: 'info'
  },
  {
    id: 'badge-license',
    title: 'License MIT',
    filename: 'badges/info/badge-license-mit.svg',
    alt: 'License MIT Badge',
    category: 'info'
  },

  // ===== BADGES SKILLS (Tecnologias) =====
  // Linguagens
  {
    id: 'badge-javascript',
    title: 'JavaScript',
    filename: 'badges/skills/badge-javascript.svg',
    alt: 'Badge JavaScript',
    category: 'skills'
  },
  {
    id: 'badge-typescript',
    title: 'TypeScript',
    filename: 'badges/skills/badge-typescript.svg',
    alt: 'Badge TypeScript',
    category: 'skills'
  },
  {
    id: 'badge-python',
    title: 'Python',
    filename: 'badges/skills/badge-python.svg',
    alt: 'Badge Python',
    category: 'skills'
  },
  {
    id: 'badge-java',
    title: 'Java',
    filename: 'badges/skills/badge-java.svg',
    alt: 'Badge Java',
    category: 'skills'
  },
  {
    id: 'badge-csharp',
    title: 'C#',
    filename: 'badges/skills/badge-csharp.svg',
    alt: 'Badge C#',
    category: 'skills'
  },
  {
    id: 'badge-go',
    title: 'Golang',
    filename: 'badges/skills/badge-go.svg',
    alt: 'Badge Golang',
    category: 'skills'
  },
  {
    id: 'badge-rust',
    title: 'Rust',
    filename: 'badges/skills/badge-rust.svg',
    alt: 'Badge Rust',
    category: 'skills'
  },
  {
    id: 'badge-php',
    title: 'PHP',
    filename: 'badges/skills/badge-php.svg',
    alt: 'Badge PHP',
    category: 'skills'
  },
  {
    id: 'badge-ruby',
    title: 'Ruby',
    filename: 'badges/skills/badge-ruby.svg',
    alt: 'Badge Ruby',
    category: 'skills'
  },
  {
    id: 'badge-swift',
    title: 'Swift',
    filename: 'badges/skills/badge-swift.svg',
    alt: 'Badge Swift',
    category: 'skills'
  },
  {
    id: 'badge-kotlin',
    title: 'Kotlin',
    filename: 'badges/skills/badge-kotlin.svg',
    alt: 'Badge Kotlin',
    category: 'skills'
  },

  // Frontend
  {
    id: 'badge-html',
    title: 'HTML5',
    filename: 'badges/skills/badge-html.svg',
    alt: 'Badge HTML5',
    category: 'skills'
  },
  {
    id: 'badge-css',
    title: 'CSS3',
    filename: 'badges/skills/badge-css.svg',
    alt: 'Badge CSS3',
    category: 'skills'
  },
  {
    id: 'badge-react',
    title: 'React',
    filename: 'badges/skills/badge-react.svg',
    alt: 'Badge React',
    category: 'skills'
  },
  {
    id: 'badge-vue',
    title: 'Vue.js',
    filename: 'badges/skills/badge-vue.svg',
    alt: 'Badge Vue.js',
    category: 'skills'
  },
  {
    id: 'badge-angular',
    title: 'Angular',
    filename: 'badges/skills/badge-angular.svg',
    alt: 'Badge Angular',
    category: 'skills'
  },
  {
    id: 'badge-nextjs',
    title: 'Next.js',
    filename: 'badges/skills/badge-nextjs.svg',
    alt: 'Badge Next.js',
    category: 'skills'
  },
  {
    id: 'badge-nuxt',
    title: 'Nuxt.js',
    filename: 'badges/skills/badge-nuxt.svg',
    alt: 'Badge Nuxt.js',
    category: 'skills'
  },
  {
    id: 'badge-svelte',
    title: 'Svelte',
    filename: 'badges/skills/badge-svelte.svg',
    alt: 'Badge Svelte',
    category: 'skills'
  },
  {
    id: 'badge-tailwind',
    title: 'Tailwind CSS',
    filename: 'badges/skills/badge-tailwind.svg',
    alt: 'Badge Tailwind CSS',
    category: 'skills'
  },
  {
    id: 'badge-sass',
    title: 'Sass',
    filename: 'badges/skills/badge-sass.svg',
    alt: 'Badge Sass',
    category: 'skills'
  },

  // Backend
  {
    id: 'badge-nodejs',
    title: 'Node.js',
    filename: 'badges/skills/badge-nodejs.svg',
    alt: 'Badge Node.js',
    category: 'skills'
  },
  {
    id: 'badge-express',
    title: 'Express',
    filename: 'badges/skills/badge-express.svg',
    alt: 'Badge Express',
    category: 'skills'
  },
  {
    id: 'badge-nestjs',
    title: 'NestJS',
    filename: 'badges/skills/badge-nestjs.svg',
    alt: 'Badge NestJS',
    category: 'skills'
  },
  {
    id: 'badge-django',
    title: 'Django',
    filename: 'badges/skills/badge-django.svg',
    alt: 'Badge Django',
    category: 'skills'
  },
  {
    id: 'badge-laravel',
    title: 'Laravel',
    filename: 'badges/skills/badge-laravel.svg',
    alt: 'Badge Laravel',
    category: 'skills'
  },
  {
    id: 'badge-spring',
    title: 'Spring',
    filename: 'badges/skills/badge-spring.svg',
    alt: 'Badge Spring',
    category: 'skills'
  },

  // Banco de Dados
  {
    id: 'badge-mongodb',
    title: 'MongoDB',
    filename: 'badges/skills/badge-mongodb.svg',
    alt: 'Badge MongoDB',
    category: 'skills'
  },
  {
    id: 'badge-postgresql',
    title: 'PostgreSQL',
    filename: 'badges/skills/badge-postgresql.svg',
    alt: 'Badge PostgreSQL',
    category: 'skills'
  },
  {
    id: 'badge-mysql',
    title: 'MySQL',
    filename: 'badges/skills/badge-mysql.svg',
    alt: 'Badge MySQL',
    category: 'skills'
  },
  {
    id: 'badge-redis',
    title: 'Redis',
    filename: 'badges/skills/badge-redis.svg',
    alt: 'Badge Redis',
    category: 'skills'
  },
  {
    id: 'badge-firebase',
    title: 'Firebase',
    filename: 'badges/skills/badge-firebase.svg',
    alt: 'Badge Firebase',
    category: 'skills'
  },
  {
    id: 'badge-supabase',
    title: 'Supabase',
    filename: 'badges/skills/badge-supabase.svg',
    alt: 'Badge Supabase',
    category: 'skills'
  },
  {
    id: 'badge-prisma',
    title: 'Prisma',
    filename: 'badges/skills/badge-prisma.svg',
    alt: 'Badge Prisma',
    category: 'skills'
  },

  // DevOps & Cloud
  {
    id: 'badge-docker',
    title: 'Docker',
    filename: 'badges/skills/badge-docker.svg',
    alt: 'Badge Docker',
    category: 'skills'
  },
  {
    id: 'badge-kubernetes',
    title: 'Kubernetes',
    filename: 'badges/skills/badge-kubernetes.svg',
    alt: 'Badge Kubernetes',
    category: 'skills'
  },
  {
    id: 'badge-aws',
    title: 'AWS',
    filename: 'badges/skills/badge-aws.svg',
    alt: 'Badge AWS',
    category: 'skills'
  },
  {
    id: 'badge-terraform',
    title: 'Terraform',
    filename: 'badges/skills/badge-terraform.svg',
    alt: 'Badge Terraform',
    category: 'skills'
  },
  {
    id: 'badge-jenkins',
    title: 'Jenkins',
    filename: 'badges/skills/badge-jenkins.svg',
    alt: 'Badge Jenkins',
    category: 'skills'
  },
  {
    id: 'badge-vercel',
    title: 'Vercel',
    filename: 'badges/skills/badge-vercel.svg',
    alt: 'Badge Vercel',
    category: 'skills'
  },
  {
    id: 'badge-netlify',
    title: 'Netlify',
    filename: 'badges/skills/badge-netlify.svg',
    alt: 'Badge Netlify',
    category: 'skills'
  },

  // Ferramentas
  {
    id: 'badge-git',
    title: 'Git',
    filename: 'badges/skills/badge-git.svg',
    alt: 'Badge Git',
    category: 'skills'
  },
  {
    id: 'badge-github',
    title: 'GitHub',
    filename: 'badges/skills/badge-github.svg',
    alt: 'Badge GitHub',
    category: 'skills'
  },
  {
    id: 'badge-gitlab',
    title: 'GitLab',
    filename: 'badges/skills/badge-gitlab.svg',
    alt: 'Badge GitLab',
    category: 'skills'
  },
  {
    id: 'badge-vscode',
    title: 'VS Code',
    filename: 'badges/skills/badge-vscode.svg',
    alt: 'Badge VS Code',
    category: 'skills'
  },
  {
    id: 'badge-figma',
    title: 'Figma',
    filename: 'badges/skills/badge-figma.svg',
    alt: 'Badge Figma',
    category: 'skills'
  },
  {
    id: 'badge-linux',
    title: 'Linux',
    filename: 'badges/skills/badge-linux.svg',
    alt: 'Badge Linux',
    category: 'skills'
  },

  // Package Managers & Build Tools
  {
    id: 'badge-npm',
    title: 'NPM',
    filename: 'badges/skills/badge-npm.svg',
    alt: 'Badge NPM',
    category: 'skills'
  },
  {
    id: 'badge-yarn',
    title: 'Yarn',
    filename: 'badges/skills/badge-yarn.svg',
    alt: 'Badge Yarn',
    category: 'skills'
  },
  {
    id: 'badge-pnpm',
    title: 'PNPM',
    filename: 'badges/skills/badge-pnpm.svg',
    alt: 'Badge PNPM',
    category: 'skills'
  },
  {
    id: 'badge-webpack',
    title: 'Webpack',
    filename: 'badges/skills/badge-webpack.svg',
    alt: 'Badge Webpack',
    category: 'skills'
  },
  {
    id: 'badge-vite',
    title: 'Vite',
    filename: 'badges/skills/badge-vite.svg',
    alt: 'Badge Vite',
    category: 'skills'
  },

  // Testing & Quality
  {
    id: 'badge-eslint',
    title: 'ESLint',
    filename: 'badges/skills/badge-eslint.svg',
    alt: 'Badge ESLint',
    category: 'skills'
  },
  {
    id: 'badge-prettier',
    title: 'Prettier',
    filename: 'badges/skills/badge-prettier.svg',
    alt: 'Badge Prettier',
    category: 'skills'
  },
  {
    id: 'badge-jest',
    title: 'Jest',
    filename: 'badges/skills/badge-jest.svg',
    alt: 'Badge Jest',
    category: 'skills'
  },
  {
    id: 'badge-cypress',
    title: 'Cypress',
    filename: 'badges/skills/badge-cypress.svg',
    alt: 'Badge Cypress',
    category: 'skills'
  },

  // APIs & Outros
  {
    id: 'badge-graphql',
    title: 'GraphQL',
    filename: 'badges/skills/badge-graphql.svg',
    alt: 'Badge GraphQL',
    category: 'skills'
  },
  {
    id: 'badge-flutter',
    title: 'Flutter',
    filename: 'badges/skills/badge-flutter.svg',
    alt: 'Badge Flutter',
    category: 'skills'
  }
];

// Funções auxiliares para filtrar por categoria
export const getBannerItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'banner');

export const getSkillsItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'skills');

export const getDecorativosItems = (): SVGItem[] =>
  svgItems.filter((item) => item.category === 'decorativos');

export const getInfoItems = (): SVGItem[] => svgItems.filter((item) => item.category === 'info');

export const getItemsByCategory = (category: CategoryType): SVGItem[] =>
  svgItems.filter((item) => item.category === category);

export const categoryLabels: Record<
  CategoryType,
  { title: string; icon: string; description: string }
> = {
  banner: {
    title: 'Banners',
    icon: 'fas fa-image',
    description: 'Banners decorativos para o topo do seu perfil GitHub'
  },
  skills: {
    title: 'Skills & Tecnologias',
    icon: 'fas fa-code',
    description: 'Badges de linguagens, frameworks e ferramentas'
  },
  decorativos: {
    title: 'Decorativos',
    icon: 'fas fa-star',
    description: 'Badges de roles, profissões e títulos'
  },
  info: {
    title: 'Info & Status',
    icon: 'fas fa-info-circle',
    description: 'Badges de status do projeto, versão, licença, etc.'
  }
};
