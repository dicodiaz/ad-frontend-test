import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        area: ['area-normal', 'sans-serif'],
      },
      colors: {
        primary: '#3B3B3B',
        'stroke-secondary': '#8F8F8F',
        'stroke-tertiary': '#EFEDF3',
      },
    },
  },
  plugins: [],
};

export default config;
