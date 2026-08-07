import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dojo-ivory': '#EEE9E2',
        'dojo-white': '#F7F4EF',
        'dojo-black': '#111110',
        'dojo-red': '#C90000',
        'dojo-darkred': '#970000',
        'dojo-gray': '#625D57',
        'dojo-lightgray': '#AAA39B',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-noto-serif-jp)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
