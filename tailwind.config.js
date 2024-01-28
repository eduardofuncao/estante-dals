/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      neulis: ["Neulis", "sans-serif"],
    },


    extend: {    
      colors: {
      primary: '#ff7edfff',
      secondary: '#407edfff',
      bground: '#e9e3d3ff',
      },
    },
  },
  plugins: [],
}

