export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    "bg-gradient-to-r",
    "bg-clip-text",
    "text-transparent",
    "from-[#7C4DFF]",
    "via-[#4FC3F7]",
    "to-[#00E5FF]",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B0C10',
        accent: '#6C63FF',
        glow: '#4FC3F7',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}

