import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.7rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      "vazir":['vazir-matn'],
      "vazir-adad":['vazir-adad'],
    },
    colors: {
      dark: '#0F0F0F',
      smoky: "#232D3F",
      success: "#005B41",
      gray: "#7D7C7C",
      primary:'#614BC3',
      secondary:'#33BBC5',
      info:"#0079FF",
      danger:"#CD1818",
      text:"#374259",
      warning:"#FF9130",
      light:"#FFF",
      white:colors.white
    }
  },
  plugins: [],
};
export default config;
