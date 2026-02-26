/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          300: '#e0cec7',
          500: '#a57f6d',
          700: '#7a5a4a',
          900: '#523a2e',
        },
      },
    },
  },
  plugins: [],
}