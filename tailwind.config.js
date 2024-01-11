/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryPeach: '#D87D4A',
        primaryBlack: '#101010',
        primaryGray: '#F1F1F1',
        secondaryPeach: '#fbaf85',
        secondaryGray: '#FAFAFA',
        error: '#CD2C2C',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
