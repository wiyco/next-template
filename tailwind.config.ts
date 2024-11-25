import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "1/1": "1 / 1",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "19/10": "19 / 10",
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;

export default config;
