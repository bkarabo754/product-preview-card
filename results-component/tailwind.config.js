/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        hanken: ["hanken"]
      },
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "slate-blue": {
          light: "hsl(252, 100%, 67%)",
          dark: "hsl(241, 81%, 54%)",
      },
      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
      "light-red": {
        default: "hsl(0, 100%, 67%)",
        light: "hsla(0, 100%, 67%, .1)",
      },
      "orangey-yellow": {
        default: "hsl(39, 100%, 56%)",
        light: "hsla(39, 100%, 56%, .1)",
      },
      "green-teal": {
        default: "hsl(166, 100%, 37%)",
        light: "hsla(166, 100%, 37%, .1)",
      },
      "cobalt-blue": {
        default: "hsl(234, 85%, 45%)",
        light: "hsla(234, 85%, 45%, .1)",
      },
      

  },
  plugins: [],
}
  }}