/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        container: "85%",
        mobileThree: "32%",
        maxWidth: "700px",
        inputMax: "133px",
        inputsMax: "500px"
      },
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"]
      },
      fontSize:{
        large: ".9em"
      },
      colors:{
        Purple: "hsl(259, 100%, 65%)",
        Light_red: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        Off_white: "hsl(0, 0%, 94%)",
        Light_grey: "hsl(0, 0%, 86%)",
        Smokey_grey: "hsl(0, 1%, 44%)",
        Off_black: "hsl(0, 0%, 8%)"
      },
      borderRadius:{
        halfCircle: "7em"
      },
      letterSpacing:{
        space: ".3em"
      }
    },
  },
  plugins: [],
}

