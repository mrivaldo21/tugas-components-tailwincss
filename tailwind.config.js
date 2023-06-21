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
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
        Poppins: ['"Poppins', "sans-serif"],
      },
      colors: {
        brand: "#FF6525",
        text: {
          dark1: "#1C1C1C",
          dark2: "#212838",
          dark3: "#373737",
        },
        green: "#E3EBD6",
        background: "#FAF8F4",
      },
    },
  },
  plugins: [],
};
