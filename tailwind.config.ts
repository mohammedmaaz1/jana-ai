import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary": "#00594f",
        "on-background": "#dfe4fe",
        "surface-tint": "#5bf4de",
        "on-tertiary-fixed": "#00192f",
        "tertiary-fixed-dim": "#49a8fc",
        "on-primary-fixed": "#00443c",
        "surface-container": "#11192e",
        "secondary-fixed-dim": "#81ccff",
        "tertiary-fixed": "#6bb6ff",
        "error-dim": "#d7383b",
        "surface-dim": "#070d1f",
        "primary-fixed-dim": "#48e5d0",
        "surface": "#070d1f",
        "inverse-primary": "#006b60",
        "primary-dim": "#48e5d0",
        "secondary": "#34b5fa",
        "surface-container-lowest": "#000000",
        "inverse-on-surface": "#4f5469",
        "primary": "#5bf4de",
        "on-primary-fixed-variant": "#006358",
        "on-tertiary": "#003053",
        "secondary-dim": "#17a8ec",
        "tertiary-container": "#45a6fa",
        "tertiary-dim": "#41a3f7",
        "on-error-container": "#ffa8a3",
        "on-tertiary-container": "#002440",
        "on-secondary-fixed-variant": "#00567c",
        "background": "#070d1f",
        "surface-variant": "#1c253e",
        "secondary-fixed": "#a4d8ff",
        "on-error": "#490006",
        "surface-bright": "#222b47",
        "primary-fixed": "#5bf4de",
        "on-secondary": "#003047",
        "secondary-container": "#006591",
        "on-primary-container": "#003a33",
        "error": "#ff716c",
        "on-surface": "#dfe4fe",
        "tertiary": "#64b3ff",
        "outline-variant": "#41475b",
        "on-surface-variant": "#a5aac2",
        "on-secondary-fixed": "#003853",
        "outline": "#6f758b",
        "surface-container-highest": "#1c253e",
        "surface-container-high": "#171f36",
        "error-container": "#9f0519",
        "on-secondary-container": "#f3f8ff",
        "inverse-surface": "#faf8ff",
        "primary-container": "#11c9b4",
        "on-tertiary-fixed-variant": "#003c65",
        "surface-container-low": "#0c1326"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
