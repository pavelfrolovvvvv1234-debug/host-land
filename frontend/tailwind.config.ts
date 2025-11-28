import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        brand: "#301fcc"
      },
      fontFamily: {
        sans: ["Commissioner", "system-ui", "sans-serif"],
        serif: ["Commissioner", "serif"]
      }
    }
  },
  plugins: []
};

export default config;



