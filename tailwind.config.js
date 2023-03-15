/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dark-bg': "url('/src/assets/images/bg-dark.jpg')",
        'light-bg': "url('/src/assets/images/bg-light.jpg')"
      },
      fontFamily: { poppins: ['poppins', 'serif'] }
    }
  },
  plugins: []
}
