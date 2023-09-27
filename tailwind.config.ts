import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(3rem, 5vw, 6rem)",
        // strokeClamp: "clamp(3rem, 10vw, 15rem)",
      },
      colors: {
        primary: "#fff",
        secondary: "#a2a2a3",
      },
    },
  },
  plugins: [],
};
export default config;
