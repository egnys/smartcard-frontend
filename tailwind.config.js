/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'navbar' : '#202020',
        'div': '#121212'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
