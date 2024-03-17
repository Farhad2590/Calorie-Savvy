/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('https://i.ibb.co/GfZckZQ/Banner.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

