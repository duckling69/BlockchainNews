/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: theme => ({
         'stroke': "url('../assets/stroke.png')",
      })

    },
  },
  plugins: [],
}
