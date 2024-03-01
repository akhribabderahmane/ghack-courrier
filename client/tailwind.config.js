/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkBlue":"#013A66",
        "primary":"#2091F9",
        "grey":"#374754",
        "dark-grey":"#252B42",
        "darker-blue":"#252B42"


      }
    },
  },
  plugins: [],
}