// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-torus-pro)", "Arial", "Helvetica", "sans-serif"],
        // torus: ["var(--font-torus-pro)", "Arial", "Helvetica", "sans-serif"],
        // tailwind.config.ts

        sans: ["var(--font-poppins)", "sans-serif"],
        torus: ["var(--font-torus-pro)", "Arial", "Helvetica", "sans-serif"],
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
  },
  plugins: [],
};
export default config;
