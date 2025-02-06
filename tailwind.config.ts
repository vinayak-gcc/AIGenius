import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Use "font-sans" class in Tailwind
      },
    },
  },
  plugins: [],
} satisfies Config;
