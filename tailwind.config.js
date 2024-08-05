import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Shantell Sans Variable, Inter, system-ui, sans-serif"],
      emoji: ["Noto Color Emoji, system-ui, sans-serif"],
    },
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#00187a",
          secondary: "#660674",
          accent: "#c3008f",
          neutral: "#1c1c31",
          "base-100": "#e5e5f0",
          "base-200": "#dbdbeb",
          "base-300": "#cacae2",
          info: "#409aff",
          success: "#00a236",
          warning: "#ffab00",
          error: "#ff0404",
        },
        dark: {
          primary: "#859dff",
          secondary: "#ea8bf9",
          accent: "#ff3dcb",
          neutral: "#1c1c31",
          "base-100": "#0f0f1a",
          "base-200": "#141424",
          "base-300": "#18182b",
          info: "#409aff",
          success: "#00a236",
          warning: "#ffab00",
          error: "#ff0404",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="dark"]'],
};
