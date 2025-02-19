module.exports = {
  darkMode: "media",
  purge: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      // mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    colors: {
      primary: {
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      accent: {
        DEFAULT: "var(--color-accent)",
        hover: "var(--color-accent-hover)",
      },
    },
    spacing: {
      "1": "5px",
      "2": "10px",
      "3": "15px",
      "4": "20px",
      "5": "30px",
      "6": "40px",
      "7": "60px",
    },
  },
  plugins: [],
};
