import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#faf8f3',
        sand: '#efe9dd',
        charcoal: '#1a1a1c',
        onyx: '#141416',
        gold: '#c9a24b',
        'gold-deep': '#a67c00',
        'gold-soft': '#e8d5a3',
        bronze: '#8c6a3f',
        ivory: '#f5f2ea',
        smoke: '#6f6c66',
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
        'glow-gold': '0 0 40px -8px rgba(201, 162, 75, 0.5)',
        glass: '0 8px 32px rgba(20, 20, 22, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
