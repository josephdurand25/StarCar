/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.ejs',
    './views/partials/*.ejs',
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