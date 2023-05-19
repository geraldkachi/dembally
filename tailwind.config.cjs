/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Plus Jakarta Sans", "Neue Haas Grotesk Display Pro", "Manrope"],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/herosvg.svg')",
        'hero-pattern2': "url('/img/footer-texture.png')",
      },
      animation: {
        text: 'text 2s ease infinite',
      }, keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
