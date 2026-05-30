/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf4f7',
          100: '#fbe8f0',
          200: '#f7d1e2',
          300: '#f0aec9',
          400: '#e580a8',
          500: '#d85a87',
          600: '#c43d6d',
          700: '#a42f58',
          800: '#882849',
          900: '#71243e',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ede5',
          200: '#ccdacc',
          300: '#a6bfa6',
          400: '#789f78',
          500: '#558055',
          600: '#426642',
          700: '#365236',
          800: '#2c422c',
          900: '#253725',
        },
        cream: '#FAF7F4',
        champagne: '#F5EDE4',
        dustyrose: '#E8C4C4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
