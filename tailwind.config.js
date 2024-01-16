/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mycolor': {
          100:  '#101630',
          200:  '#4cb8df',
          300:  '#4720b1',
        },

      },

      spacing: {
        height: {
          '128': '12rem',
          '138': '22rem',
          '148': '32rem',
          '158': '42rem',

        }
      },
    },
  },
  plugins: [],
}