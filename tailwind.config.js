/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#faf0c4',
          300: '#f6e397',
          400: '#f0d168',
          500: '#eab944',
          600: '#d99c2b',
          700: '#b57c23',
          800: '#926125',
          900: '#785023',
        },
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        'script': ['Pacifico', 'cursive'],
        'sans': ['Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
