/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // White: hsl(0, 0%, 100%),255, 255, 255
      // Light_gray: hsl(212, 45%, 89%),214, 226, 240
      // Grayish_blue: hsl(220, 15%, 55%),123, 135, 157
      // Dark_blue: hsl(218, 44%, 22%),31, 50, 81
    },
  },
  plugins: [],
}

