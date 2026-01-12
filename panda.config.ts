import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: false,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
    "src",
  ],
  exclude: [],
  outdir: "styled-system",
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  theme: {
    extend: {
      breakpoints: {
        xs: "375px",
      },
      semanticTokens: {
        fonts: {
          Outfit: { value: "var(--font-Outfit), sans-serif" },
          RedHat: { value: "var(--font-red-hat), sans-serif" },
          Lato: { value: "var(--font-lato), sans-serif" },
          Poppins: { value: "var(--font-poppins), sans-serif" },
          Josefin: { value: "var(--font-josefin), sans-serif" },
          Rubik: { value: "var(--font-Rubik), sans-serif" },
        },
        colors: {
          nft: {
            "blue.500": { value: "hsl(215, 51%, 70%)" },
            cyan: { value: "hsl(178, 100%, 50%)" },
            "blue.950": { value: "#0d192b" },
            "blue.900": { value: "#14253d" },
            "blue.800": { value: "hsl(215, 32%, 27%)" },
          },
          singup: {
            red: { value: "hsl(0, 100%, 74%)" },
            green: { value: "hsl(154, 59%, 51%)" },
            gray: { value: "hsl(249, 10%, 26%)" },
            "purple.350": { value: "hsl(246, 25%, 77%)" },
            "purple.700": { value: "hsl(248, 32%, 49%)" },
          },
          tracker: {
            "gray.400": { value: "hsl(0, 0%, 58%)" },
            "gray.950": { value: "hsl(0, 0%, 17%)" },
          },
          cart: {
            red: { value: "hsl(14, 86%, 42%)" }, //primary
            "rose.50": { value: "hsl(20, 50%, 98%)" }, //cart
            "rose.400": { value: "hsl(7, 20%, 60%)" },
            "rose.900": { value: "hsl(14, 65%, 9%)" }, //text
            cart: { value: "#260f08" },
            // TODO
            // - Red: hsl(14, 86%, 42%)
            // - Green: hsl(159, 69%, 38%)
            // - Rose 50: hsl(20, 50%, 98%)
            // - Rose 100: hsl(13, 31%, 94%)
            // - Rose 300: hsl(14, 25%, 72%)
            // - Rose 400: hsl(7, 20%, 60%)
            // - Rose 500: hsl(12, 20%, 44%)
            // - Rose 900: hsl(14, 65%, 9%)
          },
          todo: {
            //light
            blue: { value: "#3a7bfd" },
            "gray.50": { value: "#fafafaff" },
            "gray.300": { value: "#d2d3dbff" },
            "navy.850": { value: "hsl(235, 19%, 35%)" },
            
            //both
            "gray.600": { value: "#9394a5ff" },
            "purple.300": { value: "hsl(234, 40%, 85%)" },
            //dark
            "navy.950": { value: "hsl(235, 21%, 11%)" },
            "navy.900": { value: "hsl(235, 24%, 19%)" },
            "purple.100": { value: "hsl(236, 33%, 92%)" }, //hover
            "purple.600": { value: "#9394a5ff" },
            "purple.700": { value: "#4d5066" },
            "purple.800": { value: "hsl(237, 14%, 26%)" },
          },
        },
      },
    },
  },
  layers: {
    reset: "reset-panda",
    base: "base-layer",
    tokens: "tokens-panda",
    recipes: "recipes-panda",
    utilities: "utilities-panda",
  },
});
