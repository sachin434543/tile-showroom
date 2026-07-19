import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0d0d0f',
        onyx: '#141416',
        gold: '#d4af37',
        'gold-soft': '#e8d5a3',
        bronze: '#8c6a3f',
        ivory: '#f5f2ea',
        smoke: '#c9c7c1',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-gold': '0 0 40px -8px rgba(212, 175, 55, 0.45)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
