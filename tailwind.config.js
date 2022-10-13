module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sz': {
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
          'green': 'var(--green)',
          'ligth-green': 'var(--ligth-green)',
          'red': 'var(--red)',
          'blue': 'var(--blue)',
          'yellow': 'var(--yellow)',
          'dark': 'var(--dark)',
          'white': 'var(--white)',
          'transparent': 'var(--transparent)',
          'gray': 'var(--gray)',
        }
      },
      backgroundColor: {
        sz: {
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
          'green': 'var(--green)',
          'ligth-green': 'var(--ligth-green)',
          'red': 'var(--red)',
          'blue': 'var(--blue)',
          'yellow': 'var(--yellow)',
          'dark': 'var(--dark)',
          'white': 'var(--white)',
          'transparent': 'var(--transparent)',
          'gray': 'var(--gray)',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}