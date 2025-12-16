import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './docs/**/*.md',
    './lib/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        /* Preto Profundo */
        black: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
        /* Verde Escuro Profundo */
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
          950: '#052e16',
          deep: '#0a3d2c',
          deeper: '#062c23',
          darkest: '#031810'
        },
        /* Teal & Cyan Complementares */
        teal: {
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59'
        },
        cyan: {
          600: '#06b6d4',
          700: '#0891b2'
        },
        /* Destaques */
        gold: '#f5d06b',
        amber: {
          600: '#d97706'
        },
        orange: {
          600: '#ea580c'
        },
        /* Semantic */
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#0d9488'
      },
      textColor: {
        primary: '#e5e5e5',
        secondary: '#a3a3a3',
        tertiary: '#737373',
        bright: '#ffffff'
      },
      backgroundColor: {
        primary: '#0a0a0a',
        secondary: '#171717',
        tertiary: '#262626',
        'surface-1': '#1a1a1a',
        'surface-2': '#222222'
      },
      borderColor: {
        default: '#333333',
        light: '#404040'
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0a3d2c 0%, #062c23 50%, #0d9488 100%)',
        'gradient-button': 'linear-gradient(135deg, #0d9488 0%, #0f766e 55%, #14b8a6 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, rgb(13 148 136 / 0.16), rgb(13 148 136 / 0.08))',
        'gradient-card-overlay':
          'linear-gradient(135deg, rgb(10 61 44 / 0.12), rgb(13 148 136 / 0.06))',
        'gradient-text': 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
      },
      boxShadow: {
        sm: '0 1px 2px rgb(0 0 0 / 0.5)',
        md: '0 4px 6px rgb(0 0 0 / 0.6)',
        lg: '0 10px 15px rgb(0 0 0 / 0.7)',
        button: '0 6px 18px rgb(13 148 136 / 0.4)',
        'button-hover': '0 12px 30px rgb(20 184 166 / 0.3)',
        'card-hover': '0 0 20px rgb(13 148 136 / 0.3), 0 20px 40px rgb(0 0 0 / 0.6)',
        glow: '0 0 40px rgb(13 148 136 / 0.2)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [typography]
};

export default config;
