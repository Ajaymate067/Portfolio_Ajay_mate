/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts,jsx,js,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F5FAFF',
        'secondary-bg': '#EAF5FF',
        'primary-blue': '#3B82F6',
        'accent-blue': '#60A5FA',
        'deep-navy': '#102A43',
        'text-primary': '#142D4E',
        'text-secondary': '#64748B',
        'border': '#DCEBFA',
        'glass': 'rgba(255,255,255,0.7)',
        'glass-border': 'rgba(220,235,250,0.5)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};

