module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        biru: '#0036A0',
        abuabuPrimary: '#A8A8A8',
        abuabuSecondary: '#333335',
        hijauTosca: '#59D185',
        softPink: '#FD8C8C'
      },
      fontSize: {
        xxs: '10px'
      },
      borderRadius: {
        72: '72px'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      md: '455px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
