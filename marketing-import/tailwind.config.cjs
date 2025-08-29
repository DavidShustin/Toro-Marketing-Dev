/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        border:     'hsl(var(--border))',
        ring:       'hsl(var(--ring))',
        input:      'hsl(var(--input))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary:    { DEFAULT: 'hsl(var(--primary))',    foreground: 'hsl(var(--primary-foreground))' },
        secondary:  { DEFAULT: 'hsl(var(--secondary))',  foreground: 'hsl(var(--secondary-foreground))' },
        destructive:{ DEFAULT: 'hsl(var(--destructive))',foreground: 'hsl(var(--destructive-foreground))' },
        muted:      { DEFAULT: 'hsl(var(--muted))',      foreground: 'hsl(var(--muted-foreground))' },
        accent:     { DEFAULT: 'hsl(var(--accent))',     foreground: 'hsl(var(--accent-foreground))' },
        popover:    { DEFAULT: 'hsl(var(--popover))',    foreground: 'hsl(var(--popover-foreground))' },
        card:       { DEFAULT: 'hsl(var(--card))',       foreground: 'hsl(var(--card-foreground))' },

        'toro-dark':  '#2d2d2d',
        'toro-light': '#f8f8f8',
        'toro-gold':  '#976811',
        'toro-gold-dark':   '#7A520E',
        'toro-gold-darker': '#5E3F0A',
        'toro-gold-light':  '#E5C76E',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
