/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        space: {
          "0%": {},
          "100%": { "letter-spacing": "50px" },
        },
      },
      animation: {
        space: "space 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
