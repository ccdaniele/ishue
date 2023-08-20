/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default { 
  content : [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
	theme: {
    container: {
      center: true,
    },
  },  
  plugins : [require("daisyui")],

}