/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-yellow':'#DCFFB7',
        'cardbg':"#b3ffff",
        "company":"#62C3C6",
        "box":  "0px 0px 10px 0px #0740401A",
        "curve":"#ECFEAA",
        "cardborder":"#28E3E9",
        "uppertag":"#A10C0C",
        "cbd":"#62C3C6",
        "desc":"#116A6C",
        "curvebtext":"#365758",
        "inputibg":"#819191",
        "navbartext":"#045A5C",
        "footer":"#1A8D91"
      }
      // box-shadow: 0px 0px 10px 0px #0740401A;

    },
  },
  plugins: [],
};
