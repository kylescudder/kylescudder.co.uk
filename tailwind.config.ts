import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        seance: {
          DEFAULT: "#7E2A9F",
          50: "#F8E4F6",
          100: "#F2CCF0",
          200: "#E29CE5",
          300: "#CB6CD8",
          400: "#AE3BCB",
          500: "#7E2A9F",
          600: "#602383",
          700: "#451B66",
          800: "#2D144A",
          900: "#190C2E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "200%": "200%",
      },
      backgroundPosition: {
        "right-center": "right center",
      },
    },
  },
  plugins: [],
};
export default config
