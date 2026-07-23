import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1b120e',
        ink: '#050403',
        ivory: '#f7f0e3',
        cream: '#efe3cf',
        gold: '#a98952',
        rose: '#6f2420',
        blush: '#b98278',
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Inter', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
