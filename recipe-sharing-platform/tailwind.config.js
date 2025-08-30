/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',            // Root HTML file (Vite uses index.html at the root)
    './src/**/*.{js,jsx,ts,tsx}' // All React components in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
