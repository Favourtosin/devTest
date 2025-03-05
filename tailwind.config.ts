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
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "50%": { transform: "translateX(1px)" },
          "75%": { transform: "translateX(-1px)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
