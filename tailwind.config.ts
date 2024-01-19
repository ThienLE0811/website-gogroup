import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-title-introduce":
          "linear-gradient(45deg, #00fcde 0%,#d100d1 100%)",
        "footer-image":
          "url('https://gogroup.vn/wp-content/uploads/2022/12/banner-fotter.jpg')",
      },

      colors: {
        primary: "#CE1126",
      },
      padding: {
        primary: "20px",
      },
      maxWidth: {
        primary: "1200px",
      },
      aspectRatio: {
        "300/105": "300 / 105",
      },
    },
  },
  plugins: [],
};
export default config;
