/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lighter_gray: "#C5C5C5",
        light_gray: "#8B8B8B",
        light_pink: "#FF64AE",
        light_blue: "#414880",
        dark_blue: "#091156",
        dark_white: "#D7DBFF"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'md': '0rem 1.563rem 3.125rem 1.563rem #F6F7FF',
        'sm': '0rem 1.063rem 1.375rem 0rem #FFEDF6',
      },
      backgroundImage: {
        'FooterBG': "url('./src/assets/background/FooterBG.png'), url('./src/assets/background/BottomBG.png')",
      },
      backgroundPosition: {
        'center-bottom': 'center, bottom',
        'top-bottom': 'top, bottom',
      },
      backgroundSize: {
        'cover-contain': 'cover,contain',
        'full': '100%',
      },
      gridTemplateColumns: {
        'custom-layout': '2fr 1fr 1fr',
      },
      listStyleImage: {
        'vector': 'url("./src/assets/website/Vector.png")',
      },
      
    },

    screens: {
      'xs': {'min': '300px', 'max': '500px'},
      
      'sm': {'max': '767px'},
      // => @media (min-width: 440px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1439px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1441px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

