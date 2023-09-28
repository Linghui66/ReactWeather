/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //配置一些默认的颜色
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
      //配置容器外边距
      container: {
        padding: "10rem",
        center: true,
      },
    },
  },
  plugins: [],
};
