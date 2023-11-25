/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        myShadow:'-1px 5px 5px rgba(255,255,255,0.2)',
        box:'0px 0px 6px rgba(255,255,255,0.2)',
      },
    },

    screens: {
      sm :'480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}