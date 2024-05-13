/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      maxWidth: {
        container : '1170px',
      },
      fontFamily: {
        'roboto': ["Roboto, sans-serif"],
         primary: ["Karla"],
      },
      translate: {
        topMiddle: '-50%',
        leftMiddle: '-50%'
      },
      flex: {
        'flexGap': '0 0 25%'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

