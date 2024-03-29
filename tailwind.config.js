
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["El Messiri", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding:"3rem"
        },colors:{
          orange:{
          50:"#fbeeebf2",
          },green:{
          50:"#173d3d"
          }
        },boxShadow: {
          '3xl': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }
  
    },
  },
  plugins: [],
});


