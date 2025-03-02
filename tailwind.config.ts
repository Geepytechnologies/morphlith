import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#95469a",
        secondary: "#2d2f7b",
        offset: "#11b68e",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        pop: ["var(--font-popp)"],
        cab: ["var(--font-cab)"],
        barl: ["var(--font-barl)"],
        jost: ["var(--font-jost)"],
        space: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
};
export default config;
