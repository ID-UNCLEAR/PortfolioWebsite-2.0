/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popupin: {
          '0%': { transform: 'translateX(40px)', opacity: '80%', blur: '4px' },
          '90%': { opacity: '90%', blur: '0px' },
        },
      }
    },
    fontFamily: {
      'roboto': ['roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
