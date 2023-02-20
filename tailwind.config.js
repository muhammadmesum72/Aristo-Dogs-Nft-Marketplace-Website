/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,tsx,ts}',
    './components/**/*.{html,js,tsx,ts}',
  ],
  
  theme: {
    extend : {
      colors:{
        "primary" : "#0d1525",
        "secondary50": "rgba(17, 208, 250, 10)",
        "secondary": 'rgba(17, 208, 250, 100)',
        "hardSecondary" : 'rgba(17, 153, 250, 100)',
        "light" : 'white',
      },
      borderWidth: {
        "1" : "1px"
      }
    }
  },
  plugins: [],
}
