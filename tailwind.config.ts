import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "675px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      'red': 'hsl(14, 86%, 42%)',
      'green': 'hsl(159, 69%, 38%)',
      'rose-50': 'hsl(20, 50%, 98%)',
      'rose-100': 'hsl(13, 31%, 94%)',
      'rose-300': 'hsl(14, 25%, 72%)',
      'rose-400': 'hsl(7, 20%, 60%)',
      'rose-500': 'hsl(12, 20%, 44%)',
      'rose-900': 'hsl(14, 65%, 9%)',

    },
  },
  plugins: [],
} satisfies Config;
