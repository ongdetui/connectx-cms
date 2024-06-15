import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)'],
    },
    extend: {
      colors: {
        text: "#000000",
        background: "#ffffff",
        primary: "#294181",
        blue: "#13345F",
        gray: "#8C8C8C",
        black: "#000000",
        yellow: "#F6821F",
        main: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
