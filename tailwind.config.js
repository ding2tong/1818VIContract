
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          800: '#1a4d2e',
          900: '#0a1f14',
        },
        gold: {
          accent: '#c5a358',
          soft: '#e8dfca',
        }
      }
    },
  },
  plugins: [],
}
