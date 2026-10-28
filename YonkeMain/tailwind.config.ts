import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        field: "var(--field)",
        "border-subtle": "var(--border-subtle)",
        ink: "var(--ink)",
        "ink-secondary": "var(--ink-secondary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-soft": "var(--accent-soft)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#e53e3e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.03em",
      },
      lineHeight: {
        display: "0.95",
      },
    },
  },
  plugins: [],
};
export default config;
