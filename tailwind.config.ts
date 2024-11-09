import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0) scale(var(--scale, 1))",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-80vh) scale(var(--scale, 1))",
            opacity: "0",
          },
        },
      },
      animation: {
        float: "float 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
