/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E53E3E', // Red
          dark: '#C53030',
          light: '#FC8181',
        },
        secondary: {
          DEFAULT: '#1A202C', // Dark gray/black
          light: '#2D3748',
          dark: '#171923',
        },
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
