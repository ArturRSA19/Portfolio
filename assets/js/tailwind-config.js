// Tailwind CSS Configuration
const tailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8B5CF6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22D3EE',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        ink: {
          950: '#0A0A0F',
          900: '#0F0F14',
          800: '#131318',
          700: '#1A1A22'
        }
      },
      boxShadow: {
        glow: '0 10px 25px -5px rgba(139,92,246,0.45), 0 10px 10px -5px rgba(34,211,238,0.25)'
      }
    }
  }
};

// Apply Tailwind configuration
if (typeof tailwind !== 'undefined') {
  tailwind.config = tailwindConfig;
}
