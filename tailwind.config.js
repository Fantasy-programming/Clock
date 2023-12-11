/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(44, 43%, 88%)",
        secondary: "hsl(44, 28%, 82%)",
        tertiary: "hsl(70, 8%, 16%)",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        abril: ["Abril Fatface", "serif"],
      },
    },
  },
  plugins: [],
};
