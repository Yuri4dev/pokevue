/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        darkText: '#cbd5e0'
      }
    }
  },
  plugins: []
}
