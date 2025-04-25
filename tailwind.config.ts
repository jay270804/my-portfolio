import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        customGray: 'var(--customGray)',
        background: 'var(--background)',
        white: 'var(--white)',
      },
      fontFamily: {
        mira: ['"Mira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
