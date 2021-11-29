module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.svelte']
    // safelist: ['bg-red-500']
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
