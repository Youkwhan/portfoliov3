/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#E8E8E8",
        "primary-100": "#676767",
        "primary-200": "#333333",
        "secondary-100": "#416BD8",
        "primary-300": "#C4C4C4",
        "primary-400" : "#343434"
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
