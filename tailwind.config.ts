import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: { sans: ["Inter", "Arial", "sans-serif"] } } },
  plugins: []
};
export default config;
