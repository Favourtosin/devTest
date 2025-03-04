import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayMain: "#292929",
        graySupport: "#737373",
        purpleDeep: "#7839EE",
        purpleLight: "#ECE9FECC",
      },
      spacing: {
        max: "5rem",
        min: "2rem",
      },
      fontFamily: {
        inter: ["inter"],
      },
      fontSize: {
        xx: ["13px", { lineHeight: "19.5px" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
