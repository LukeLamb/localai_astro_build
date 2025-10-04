/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Modern AI/Tech Color Palette
        primary: {
          DEFAULT: '#6366F1', // Indigo
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          DEFAULT: '#8B5CF6', // Purple
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
        },
        accent: {
          DEFAULT: '#06B6D4', // Cyan
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
        success: {
          DEFAULT: '#10B981', // Emerald
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        warning: {
          DEFAULT: '#F59E0B', // Amber
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        danger: {
          DEFAULT: '#EF4444', // Red
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Dark theme backgrounds
        dark: {
          DEFAULT: '#0F172A', // Slate 900
          lighter: '#1E293B', // Slate 800
          card: '#1E293B',    // Card background
          border: '#334155',  // Slate 700
        },
        // Light text on dark
        light: {
          DEFAULT: '#F1F5F9', // Slate 100
          muted: '#94A3B8',   // Slate 400
        },
      },
      fontFamily: {
        // Modern futuristic heading
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],

        // Body text - clean and readable
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],

        // Code/data display
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        // Modern glow effects
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.3)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)',
        'glow-success': '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)',
        // Glass morphism
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        // Modern gradients
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
        'gradient-success': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-mesh': 'radial-gradient(at 27% 37%, rgba(99, 102, 241, 0.2) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(139, 92, 246, 0.2) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(6, 182, 212, 0.2) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
