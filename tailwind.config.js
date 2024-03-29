/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bounce: 
        'bounce 0.5s alternate cubic-bezier(0.95,0.05,0.795,0.035) infinite'
      },
      keyframes: {
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
      colors: {
        'pinky': '#FF0069',
        'sky': '#1F305E',
        'manilla': '#F7DCA9',
        'night': '#30333E',
        'day': '#FFF9FB'

      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
