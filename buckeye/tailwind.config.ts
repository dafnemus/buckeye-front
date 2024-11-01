import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gray': '#49463f',
      },
      flex: {
        0: '0 0 auto',
      },
      fontSize: {
        xxs: '0.65rem',
      },
      width: {
        128: '32rem',
        132: '33rem',
        200: '50rem',
        256: '64rem',
      },
      maxWidth: {
        u1440: '2160px',
        u650: '650px',
        u2160: '2160px',
      },
    },
  },
  plugins: [],
};
export default config;
