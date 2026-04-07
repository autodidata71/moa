import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand greens
        moss:    "#070f0b",
        forest:  "#1a3a2a",
        sage:    "#2c5545",
        fern:    "#3d7a5e",
        meadow:  "#5a9e7c",
        "green-brand": "#2c5545",
        // Neutrals / warm
        cream:  "#faf8f3",
        linen:  "#f2ece0",
        sand:   "#e5ddd0",
        bark:   "#8b7355",
        // Accent
        amber:  "#b87333",
        clay:   "#d4935a",
        "amber-pale": "#f5e6d3",
        // Text
        ink:   "#1c1c18",
        stone: "#5a5248",
        dust:  "#9a8f82",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem, 4.5vw, 3.8rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.6rem, 3vw, 2.4rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "card":    "0 2px 20px rgba(15,34,24,0.06), 0 1px 4px rgba(15,34,24,0.04)",
        "card-lg": "0 8px 40px rgba(15,34,24,0.1), 0 2px 8px rgba(15,34,24,0.06)",
        "card-hover": "0 16px 60px rgba(15,34,24,0.14), 0 4px 16px rgba(15,34,24,0.08)",
        "btn":   "0 2px 12px rgba(184,115,51,0.3)",
        "btn-lg": "0 4px 24px rgba(184,115,51,0.4)",
        "green": "0 4px 24px rgba(26,58,42,0.35)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0f2218 0%, #1a3a2a 45%, #2c5545 100%)",
        "section-gradient": "linear-gradient(180deg, #faf8f3 0%, #f2ece0 100%)",
        "cta-gradient": "linear-gradient(135deg, #1a3a2a 0%, #0f2218 100%)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
