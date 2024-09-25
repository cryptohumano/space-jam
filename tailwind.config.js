// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        polkadot: {
          pink: '#E6007A',
          purple: '#8247E5',
        },
        kusama: {
          orange: '#FF8B00',
          yellow: '#FFC700',
        },
        // Puedes añadir más colores personalizados si lo deseas
      },
      fontFamily: {
        unbounded: ['"Unbounded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}