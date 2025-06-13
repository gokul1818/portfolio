export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui", "sans-serif"],
      display: ["Poppins", "system-ui", "sans-serif"],
      body: ["Poppins", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        bgColor: "#fdfffe",
        primary1: "#411b82",
        primary2: "#d72a46",
        primary3: "#fea6ab",
      },
    },
  },
  plugins: [],
};
