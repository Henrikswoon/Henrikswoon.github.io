/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      //Elements https://www.schemecolor.com/pop-arts.php
      "e1":"#676D6E", //Dim Gray
      "e2":"#D3D4D8", //Light Gray
      "e3":"#F5F5F5", //Cultured
      "e4":"#3FBAC2",  //Maximum Blue Green

      //Text https://www.schemecolor.com/fontmagic.php 
      "t1":"#333333", //Dark Charcoal
      "t2":"#CDCDCD", //Chinese Silver
      "t3":"#F6F6F6", //Cultured 1+
      "t4":"#002962"
    },
    extend: {},
  },
  plugins: [],
}

