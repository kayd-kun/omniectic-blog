/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
    },
  },
  plugins: [require("daisyui")],
};
