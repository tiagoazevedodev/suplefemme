import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          "red-mid": "#A50E25",
          "red-deep": "#8B0E1F",
          "red-dark": "#6B0A17",
          cream: "#FAF7F4",
          graphite: "#2A2A2A",
          "gray-mid": "#6B6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
        widest2: "0.18em",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #C8102E 0%, #A50E25 60%, #8B0E1F 100%)",
      },
      boxShadow: {
        cta: "0 10px 30px -12px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [typography],
};

export default config;
