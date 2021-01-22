module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        sage: {
          light: '#eof2d4',
          DEFAULT: '#a9ba9d',
          dark: '#2e3c25',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
