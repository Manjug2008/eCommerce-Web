import type { Config } from "tailwindcss";

const config: Config = {
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
        transparent: 'transparent',
        dark: "#1b1b1b",
        gray: "#696969",
        lightgray: "#D8D5D4",
        light: "#f5f5f5",
        primary: "#000000",
        secondary: "#FFFFFF",
        navyBlue: "#2B3499"
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        fredoka: ["var(--font-fredoka)"],
      },
    },
  screens: {
    '2xl': { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    'xl': { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    'lg': { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    'md': { max: "767px" },
    // => @media (max-width: 767px) { ... }

    'sm': { max: "639px" },
    // => @media (max-width: 639px) { ... }

    'xs': { max: "479px" },
    // => @media (max-width: 479px) { ... }
   },
  },
  plugins: [require("daisyui")],
};
export default config;
