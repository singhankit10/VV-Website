/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3B30',
          light: '#FF6B5E',
          dark: '#E6342A',
        },
        accent: {
          pink: '#FF2D92',
          purple: '#8B5CF6',
          blue: '#3B82F6',
        },
        light: {
          DEFAULT: '#FAFAFA',
          paper: '#FFFFFF',
          muted: '#F5F5F5',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          muted: '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'hero': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};