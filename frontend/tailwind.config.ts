import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#050505",
          alt: "#0A0A0A",
        },
        surface: {
          DEFAULT: "#111111",
          raised: "#18181B",
        },
        primary: {
          DEFAULT: "#E50914",
          deep: "#8B0000",
          glow: "rgba(229,9,20,0.35)",
        },
        muted: {
          DEFAULT: "#A1A1AA",
        },
        border: "#1F1F22",
      },
      fontFamily: {
        sans: ["var(--font-fago)", "system-ui", "sans-serif"],
        display: ["var(--font-fago)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(4rem, 8vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(5rem, 10vw, 12rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 60px rgba(229,9,20,0.35)",
        "glow-lg": "0 0 120px rgba(229,9,20,0.45)",
        elevated: "0 20px 60px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(229,9,20,0.25), transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%,100%": { boxShadow: "0 0 30px rgba(229,9,20,0.25)" },
          "50%": { boxShadow: "0 0 80px rgba(229,9,20,0.55)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(.2,.7,.2,1) forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
