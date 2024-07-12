/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f3f4f6', // Tailwind's default gray-100 color
          800: '#1f2937', // Tailwind's default gray-800 color
        },
      },
    },
  },
  plugins: [],
}
