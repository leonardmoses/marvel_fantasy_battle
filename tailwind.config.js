/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Primary': '#1B1B3A',
        'Secondary': '#693668',
        'MarvelRed': "#e62429",
        'MarvelBlack': '#202020',
        'ThemeWhite': '#D7D9D7',
        'ThemeWhite2': '#FFFFFA',
      }
    },
  },
  plugins: [],
};
