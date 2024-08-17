import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "MatterTRIAL": "Matter"
      },
      colors: {
        'axsoterBlue': "#393cb9",
        'navbarBg': "rgba(62, 155, 145, .06)",
        'defaultBg': "#101113",
      },
      backgroundImage: {
        'brandGradient': "linear-gradient(210deg, #393cb9, #00065a)",
      },
      minWidth: {
        'screen': "100vw",
      }
    },
  },
  plugins: [],
};
export default config;
