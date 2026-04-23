/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Viscano Design Tokens ──────────────────────
        'obsidian':   '#0A0A0A',  // Primary BG — page, nav, hero
        'surface':    '#0F0F0F',  // Card / section surface
        'off-white':  '#F5F3EE',  // Text Primary — body copy on dark
        'mid-grey':   '#555555',  // Text Secondary — muted labels, meta
        'sec-green':  '#1A7A4A',  // Security Differentiator — shield, callouts
        'signal-red': '#C0392B',  // P0 / urgent tags / error states
        'royal-blue': '#1A5CA8',  // Links / informational cards
      },
      fontFamily: {
        // Heading 1–3 / Body / Caption → Neue Haas Grotesk
        // Ships natively on macOS/iOS; Inter is the web fallback for Windows/Android
        sans: [
          '"Neue Haas Grotesk Display"',
          '"HelveticaNeue"',
          '"Helvetica Neue"',
          'Inter',
          'Arial',
          'sans-serif',
        ],
        // Display / Hero / Pull quotes → DM Serif Display
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        // Section labels / paths / data → DM Mono
        mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
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
