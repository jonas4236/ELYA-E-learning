/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@vidstack/react/tailwind.cjs"),
    customVariants,
  ],
};

function customVariants({ matchVariant }) {
  matchVariant("parent-data", (value) => `.parent[data-${value}] > &`);
}
