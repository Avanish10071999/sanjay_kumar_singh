import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2421",
        paper: "#f7f7f5",
        line: "#dedbd2",
        accent: "#0066b3",
        moss: "#52624d"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(31, 36, 33, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
