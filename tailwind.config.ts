import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', "system-ui", "sans-serif"],
      },
      colors: {
        voyager: {
          ink: "#070816",
          navy: "#0B1026",
          plum: "#1D123D",
          cyan: "#5DCAA5",
          purple: "#A98FFF",
          mist: "#D8E3FF",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(93, 202, 165, 0.18)",
        violet: "0 0 54px rgba(169, 143, 255, 0.22)",
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(16px, -18px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
