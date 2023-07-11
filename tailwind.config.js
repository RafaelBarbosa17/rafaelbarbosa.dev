/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mp: '320px',
      mm: '375px',
      mg: '425px',
      md: '768px',
      ld: '1024px',
      lg: '1440px',
      '4k': '2560px'
    },
    fontFamily: {
      inter: ['var(--font-inter)', 'sans-serif'],
      rowdies: ['var(--font-rowdies)', 'sans-serif'],
    }
  },
  plugins: [],
}
