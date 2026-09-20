import type {Config} from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
      },
      colors: {
        ivory: '#F5F2EA',
        paper: '#F5F2EA',
        surface: '#EDE9DF',
        'surface-light': '#FAF8F3',
        ink: '#071A33',
        navy: '#071A33',
        'navy-deep': '#071A33',
        'navy-mid': '#12345B',
        accent: '#315F9F',
        line: '#D4CEBF',
        'line-light': '#E5E0D5',
        'line-dark': '#071A33',
      },
      letterSpacing: {
        tighter: '-0.06em',
        tight: '-0.04em',
      },
      boxShadow: {
        editorial: '0 20px 40px -15px rgba(7, 26, 51, 0.08)',
        'editorial-hover': '0 30px 60px -15px rgba(7, 26, 51, 0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config;
