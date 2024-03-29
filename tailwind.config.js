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
    },
    animation: {
      'fadeInLeft': 'fadeInLeft 500ms linear forward'
    },
    keyframes: {
      fadeInLeft: {
        '0%': {transition: 'translate(-100px, 0px)'},
        '100%': {transition: 'translate(0px, 0px)'}
      }
    }
    // colors: {
    //   'black-default': "#000000",
    //   'white-default': '#FFFFFF',
    //   'gray-default': '#1E1E1E',
    //   'purple-default': '#FF00FF',
    //   'violet-default': '#7100A7',
    //   'blue-default': '#001AFF',
    //   'cian-default': '#00FFFF',
    //   'white-blue': '#C2C6E3'
    // }
  },
  plugins: [],
}
