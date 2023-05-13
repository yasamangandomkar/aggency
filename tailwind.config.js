/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/image/art.jpg')",
      },
    },
    colors: {
      white: "#fff",
      dark: "#080e10",
      green: "#00dc93",
      pink: "#ff55db",
      blue: "#346cff",
      indigo: "#845aff",
      purple: "#581c87",
      gray: "#888",
    },
  },
  plugins: [],
};
