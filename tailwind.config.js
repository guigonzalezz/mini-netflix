/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate"

const tailwindConfig = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: "#E50914", // Netflix red
          700: "#B81D24",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default  tailwindConfig