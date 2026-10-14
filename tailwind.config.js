import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#F8F4FC', 100: '#EFE4FA', 200: '#E4D8F0', 300: '#C9B0E6', 400: '#A57BD6',
          500: '#8547C7', 600: '#6C2EB5', 700: '#55229A', 800: '#3E1863', 900: '#2A1045', 950: '#1A0A2E',
        },
        gold: { 200: '#F6E6BF', 300: '#F1D79A', 400: '#E5BE5C', 500: '#D4A43A', 600: '#B3862A' },
        brand: '#5B0CA5',
        ink: '#241934',
        slate: { DEFAULT: '#655D74' },
        sand: '#FBF8F3',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 48px -24px rgba(62, 24, 99, 0.28)',
        card: '0 1px 2px rgba(36,25,52,.04), 0 12px 32px -16px rgba(62,24,99,.18)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'none' } },
      },
      animation: { 'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.2,1) both' },
    },
  },
  plugins: [typography],
}
