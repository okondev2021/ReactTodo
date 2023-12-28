/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'big': {'max': '1300px'},
      // => @media (max-width: 1300px) { ... }

      'md': {'max': '1030px'},
      // => @media (max-width: 1030px) { ... }
      'mobile': {'max': '430px'},
      // => @media (max-width: 430px) { ... }
    },
    fontFamily:{
      body: ['Josefin Sans']
    },
    borderWidth:{
      '1':'1px'
    },
    extend: {
      height:{
        "hero": "40vh",
        "shortHero":"30vh"
      },
      colors:{
        'left':'hsl(192, 100%, 67%)',
        'right':' hsl(280, 87%, 65%)',
        'primary': {
          "Bright-Blue": "hsl(220, 98%, 61%)",
        },
        'light': {
          "100": "hsl(0, 0%, 98%)",
          "200": "hsl(236, 33%, 92%)",
          "300": "hsl(233, 11%, 84%)",
          "400": "hsl(236, 9%, 61%)",
          "500": "hsl(235, 19%, 35%)"
        },
        "dark":{
          "100":"hsl(235, 21%, 11%)",
          "200": "hsl(235, 24%, 19%)",
          "300": "hsl(234, 39%, 85%)",
          "300-hover": "hsl(236, 33%, 92%)",
          "400": "hsl(234, 11%, 52%)",
          "500": "hsl(233, 14%, 35%)",
          "600": "hsl(237, 14%, 26%)"
        }
      }
    },
  },
  plugins: [],
}

