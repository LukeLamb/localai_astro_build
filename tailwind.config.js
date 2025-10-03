/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Steampunk Base Colors
        brass: {
          DEFAULT: '#B8860B',
          light: '#DAA520',
          dark: '#967117',
        },
        copper: {
          DEFAULT: '#CD7F32',
          light: '#E8A75C',
          dark: '#A66029',
        },
        mahogany: {
          DEFAULT: '#3E2723',
          light: '#5D4037',
          dark: '#1B0000',
        },
        leather: {
          DEFAULT: '#654321',
          light: '#8B6B47',
          dark: '#3E2415',
        },
        patina: {
          DEFAULT: '#2E8B57',
          light: '#3CB371',
          dark: '#1E5A3A',
        },
        
        // Cyberpunk Neon Colors
        electric: {
          DEFAULT: '#00F0FF',
          light: '#80F8FF',
          dark: '#00B8CC',
        },
        neon: {
          pink: '#FF006E',
          green: '#39FF14',
          purple: '#8B00FF',
          blue: '#00F0FF',
        },
        matrix: {
          DEFAULT: '#00FF41',
          light: '#80FF98',
          dark: '#00CC33',
        },
        
        // Neutral Foundation
        void: {
          DEFAULT: '#0A0E27',
          light: '#1A1E3F',
          dark: '#000000',
        },
        charcoal: {
          DEFAULT: '#36454F',
          light: '#556570',
          dark: '#1A2329',
        },
        parchment: {
          DEFAULT: '#F5F5DC',
          light: '#FFFFF0',
          dark: '#E5E5CC',
        },
        
        // Legacy mappings for existing components
        primary: {
          DEFAULT: '#B8860B', // Brass gold
          50: '#F5F5DC',
          100: '#E5E5CC',
          200: '#DAA520',
          300: '#CD7F32',
          400: '#B8860B',
          500: '#967117',
          600: '#7A5C12',
          700: '#654321',
          800: '#4E3419',
          900: '#3E2723',
        },
        secondary: {
          DEFAULT: '#00F0FF', // Electric blue
          50: '#E0FEFF',
          100: '#C0FDFF',
          200: '#80F8FF',
          300: '#40F4FF',
          400: '#00F0FF',
          500: '#00B8CC',
          600: '#009099',
          700: '#006866',
          800: '#004033',
          900: '#001819',
        },
      },
      fontFamily: {
        // Victorian elegance
        display: ['Playfair Display', 'Georgia', 'serif'],
        victorian: ['Cinzel', 'Georgia', 'serif'],
        
        // Modern tech
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        cyber: ['Orbitron', 'Exo 2', 'monospace'],
        
        // Code/Matrix style
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        
        // Historical documents
        serif: ['EB Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'brass': '0 4px 6px -1px rgba(184, 134, 11, 0.3), 0 2px 4px -1px rgba(184, 134, 11, 0.2)',
        'neon-blue': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.3)',
        'victorian': 'inset 0 0 10px rgba(184, 134, 11, 0.3), 0 0 20px rgba(0, 240, 255, 0.2)',
      },
      backgroundImage: {
        'brass-gradient': 'linear-gradient(135deg, #B8860B 0%, #CD7F32 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #00F0FF 0%, #8B00FF 100%)',
        'victorian-cyber': 'linear-gradient(135deg, #B8860B 0%, #00F0FF 50%, #8B00FF 100%)',
        'dark-brass': 'linear-gradient(135deg, #3E2723 0%, #0A0E27 100%)',
      },
    },
  },
  plugins: [],
}

