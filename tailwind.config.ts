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
        whi: "#F9FAFD",
        gre:"#B3B1B0",
        gre2:"#6A6A6A",
      },
      animation: {
        'slide-left-infinite': 'slide-left 8s linear infinite',
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
          'slide-left': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-100%)' },
          },
          marquee: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-100%)" },
          },
      },
    },
  },
  plugins: [],
} satisfies Config;
