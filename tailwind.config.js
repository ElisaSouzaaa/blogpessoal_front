/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue-lagoon': '#90CAF9',
        'vibrant-blue': '#3A53E3',
        'bora-purple': '#7E57C2'
      },
    },
  },
  plugins: [],
}
