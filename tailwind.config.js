/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#0b0d17',
        'secondary': '#d0d6f9',
        'accent': '#ffffff'
      },
      backgroundImage: {
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')"
      }
    }
  },
  plugins: [],
}

