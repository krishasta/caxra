/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caxra: {
          navy: '#1f2853',        // Exact logo text color
          'navy-dark': '#141b3b', // Header/Footer & dark panels
          'navy-deep': '#0d1226', // Ultra deep backgrounds
          'navy-light': '#2b376d', // Secondary navy accents
          'navy-subtle': '#f4f6fa', // Very light navy-tinted background
          orange: '#ff9900',      // Exact logo primary orange
          'orange-burn': '#ff7026', // Logo mid flame orange
          coral: '#ff4e46',       // Logo warm red/coral
          red: '#d9222a',         // Glauber-style bold industrial red
          amber: '#ffb300',       // Logo bright highlight
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        industrial: ['Oswald', 'Space Grotesk', 'Impact', 'sans-serif'],
        heading: ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
