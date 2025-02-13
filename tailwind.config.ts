import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

plugin;
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scroll-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scroll-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.hide-overflow-2': {
          'text-overflow': 'ellipsis',
          overflow: 'hidden',
          'white-space': 'pre-wrap',
          'word-break': 'break-all',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        },
      });
    }),
  ],
};

export default config;
