/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F4F0FF",
          100: "#E9E3FF",
          500: "#4318FF",
          600: "#3311DB",
        },
        navy: {
          500: "#707EAE",
          600: "#A3AED0",
          700: "#1B2559",
          800: "#111C44",
          900: "#0B1437",
        },
        lightPrimary: "#F4F7FE",
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
