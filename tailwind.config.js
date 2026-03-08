/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aws-bg': '#E9E6F6',      // Soft lavender hero background
        'aws-card': '#FFFFFF',    // White card background
        'aws-dark': '#131315',    // Deep black for main typography
        'aws-gray': '#F5F5FA',    // Very light gray for secondary sections
        'aws-text-muted': '#8E8E9F', // Muted text for descriptions
        'aws-accent': '#6A4DFF',  // Vibrant purple accent
        'aws-pill': '#F5F5F7',    // Light pill background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'full': '9999px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    }
  },
  plugins: [],
}
