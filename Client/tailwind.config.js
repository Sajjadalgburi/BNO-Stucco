import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: ['black', 'forest', 'luxury', 'coffee', 'lofi', 'garden', 'sunset'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
};
