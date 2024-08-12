/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.ejs',
    './views/**/*.ejs',
    './views/dashboard/**/*.ejs'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};