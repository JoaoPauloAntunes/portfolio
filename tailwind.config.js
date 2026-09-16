/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F0D",
        panel: "#121A17",
        line: "#1F2E28",
        brand: "#22C55E",
        accent: "#2DD4BF",
        text: "#E3ECE8",
        muted: "#9AAFA6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: { float: "float 4s ease-in-out infinite" },
    },
  },
  plugins: [],
};
