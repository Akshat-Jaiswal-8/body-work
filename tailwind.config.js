/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      montserrat: [
        'Montserrat',
        'sans-serif',
      ],
      poppins: [
        'Poppins',
        'sans-serif',
      ],
      rubik: ['Rubik', 'sans-serif'],
      openSans: [
        'OpenSans',
        'sans-serif',
      ],
    },
    extend: {
      animation: {
        'spin-fast':
          'spin 500ms linear infinite',
      },
      colors: {
        'bg-card-primary-color':
          'var(--bg-primary-card-color)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
