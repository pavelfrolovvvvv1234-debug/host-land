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
        surface: "#111111",
        surfaceHighlight: "#1A1A1A",
        primary: "#4268FF",
        accent: "#7a83f3",
        brand: "#301fcc"
      },
      fontFamily: {
        sans: ["Commissioner", "system-ui", "sans-serif"],
        serif: ["Commissioner", "serif"]
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at center, rgba(66, 104, 255, 0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;



