/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      theme: {},
      colors: {
        'primary-100': '#845EC2' ,
        'primary-50' :  '#ad94d6',
        'primary-10' : '#f9f7fc'
      },
    },
  },
  plugins: [],
};
