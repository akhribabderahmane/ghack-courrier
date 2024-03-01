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
        "darker-blue":"#252B42"
      }
    },
  },
  plugins: [],
}

