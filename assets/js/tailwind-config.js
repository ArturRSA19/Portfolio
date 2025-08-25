// Tailwind CSS Configuration
const tailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'ui-sans-serif', 'system-ui'] 
      },
      colors: {
        brand: {
          50: '#f0fdfd',
          100: '#ccfbf8',
          200: '#99f6f2',
          300: '#5eebe7',
          400: '#26d7d3',
          500: '#0FC2C0',
          600: '#008F8C',
          700: '#0d7377',
          800: '#155e63',
          900: '#164e52'
        }
      },
      boxShadow: {
        glow: '0 10px 25px -5px rgba(15,194,192,0.45), 0 10px 10px -5px rgba(15,194,192,0.25)'
      }
    }
  }
};

// Apply Tailwind configuration
if (typeof tailwind !== 'undefined') {
  tailwind.config = tailwindConfig;
}
