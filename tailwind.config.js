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
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
        'launch-vehicle-portrait': "url('assets/technology/image-launch-vehicle-portrait.jpg')",
        'launch-vehicle-landscape': "url('assets/technology/image-launch-vehicle-landscape.jpg')",
        'space-capsule-portrait': "url('assets/technology/image-space-capsule-portrait.jpg')",
        'space-capsule-landscape': "url('assets/technology/image-space-capsule-landscape.jpg')",
        'spaceport-portrait': "url('assets/technology/image-spaceport-portrait.jpg')",
        'spaceport-landscape': "url('assets/technology/image-spaceport-landscape.jpg')",
      }
    }
  },
  plugins: [],
}

