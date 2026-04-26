/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',
        accent: '#0D9488',
        highRisk: '#DC2626',
        mediumRisk: '#F59E0B',
        lowRisk: '#16A34A'
      },
      boxShadow: {
        card: '0 2px 12px rgba(15, 23, 42, 0.08)'
      }
    },
  },
  plugins: [],
};
