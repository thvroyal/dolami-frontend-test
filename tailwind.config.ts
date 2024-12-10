import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
      fontSize: {
        "3xl": ["2rem", "2.4rem"],
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
        },
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        gray: "var(--text-gray)",
        offWhite: "var(--text-off-white)",
        popover: "var(--popover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
