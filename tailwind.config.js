/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b', 
        accent: '#cbd5e1',
        background: '#f8fafc',
        surface: '#ffffff',
        'text-primary': '#1f2937',
        'text-secondary': '#64748b',
        'text-accent': '#94a3b8'
      }
    },
  },
  plugins: [],
}