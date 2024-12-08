import daisyui from 'daisyui'

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom theme settings can be added here if needed
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.lg-only': {
          display: 'none', // Hide by default
        },
        
        '@media (min-width: 1024px)': {
          '.lg-only': {
            display: 'block', // Show on lg and larger screens
          },
        },
      });
    },
    daisyui
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}


