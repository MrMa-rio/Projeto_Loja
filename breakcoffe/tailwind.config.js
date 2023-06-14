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
        'hrOrange': '#FFA585'

      },
      width: {
        '88': '22rem',
      },
      maxWidth: {
        '88': '22rem',
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

    },
    
    
  },
  plugins: [],
}
