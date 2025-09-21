/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      colors: {
        'primary': {
          900: '#1a2129', // Deep charcoal blue - main backgrounds
          800: '#312137', // Dark purple-brown - card backgrounds
          700: '#512839', // Rich burgundy-brown - hover states
          600: '#713141', // Muted rose-brown - accents and highlights
        },
        'accent': {
          teal: '#14b8a6', // Keep existing teal for CTAs
        }
      },
    },
  },
  plugins: [],
}