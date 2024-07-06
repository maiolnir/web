/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#F76C00',
        secondary: '#171717',
        accent: '#F7A712',
        error: '#A20021',
        info: '#757780'
      },
    },
  },
  plugins: [],
};
