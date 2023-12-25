/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      loader: {
        '0%': { transform: 'translateY(100vh)' },
        '100%': { transform: 'translateY(0)' },
      },
      dot: {
        '0%, 100%': { opacity: '0' },
        '50%': { opacity: '1' },
      },
      mouse: {
        '0%, 100%': { transform: 'translateY(-5px)' },
        '50%': { transform: 'translateY(10px)' },
      },
    },
    animation: {
      loader: 'loader 3s infinite',
      dot: 'dot 1.5s infinite',
      mouse: 'mouse 1.5s infinite',
    },
  },
  plugins: [],
}

