/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': '#5D5D6D',
        'secondary': '#F3F5F6',
        'terciary': '#DEDEDE',
        'TextosDark': '#737380',
        'TextosDark2': '#41414D',
        'ShapesColor': '#DCE2E5',
        'ShapesDarkColor': '#09090A',
        'hrOrange': '#FFA585',
        'BrandBlue': '#115D8C',

      },
      width: {
        '88': '22rem',
        '112': '28rem',
        '160': '40rem',
      },
      height: {
        '76': '18.75rem',
        '145': '36.25rem'
      },
      maxWidth: {
        '88': '22rem',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, 256px)',
      },
      screens: {
        'ssm': '330px',
        'sm': '390px',
        'xsm': '450px',
        'md': '600px',
        'mini-tela': '825px',
        'tela': '890px',
        'mxl': '1000px'
      },
      customStyles: {
        'defaultPage': 'px-6 mini-tela:px-40 h-full bg-terciary',
      },

    },
    variants: {
      extend: {
        customStyles: ['responsive', 'hover', 'focus'],
      },
    },
    
    
  },
  plugins: [],
}
