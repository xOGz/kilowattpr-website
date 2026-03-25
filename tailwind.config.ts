import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // shadcn compatibility layer (mapped to Kilowatt brand)
        background: '#121240',
        foreground: '#E8E5F0',
        card: { DEFAULT: '#383882', foreground: '#E8E5F0' },
        popover: { DEFAULT: '#222268', foreground: '#E8E5F0' },
        muted: { DEFAULT: '#1B1B5E', foreground: '#C8B890' },
        accent: { DEFAULT: '#2D2D75', foreground: '#E8E5F0' },
        destructive: { DEFAULT: '#FFB4AB', foreground: '#3A2400' },
        border: 'rgba(138, 125, 96, 0.3)',
        input: 'rgba(138, 125, 96, 0.2)',
        ring: '#F5A623',

        // Primary (Amber Gold — from logo)
        primary: {
          DEFAULT: '#FFF0D0',
          container: '#F5A623',
          fixed: '#FFBC42',
          'fixed-dim': '#E09500',
          foreground: '#3A2400',
        },
        'on-primary': {
          DEFAULT: '#3A2400',
          container: '#6B4400',
        },
        'inverse-primary': '#6B4400',

        // Secondary (Cyan — from logo solar panels)
        secondary: {
          DEFAULT: '#8BE8FF',
          container: '#3DD8F5',
          fixed: '#C3F0FF',
          'fixed-dim': '#5FE0FF',
        },
        'on-secondary': {
          DEFAULT: '#003545',
          container: '#004D64',
        },

        // Tertiary (Live Energy — bright cyan)
        tertiary: {
          DEFAULT: '#DEFCFF',
          container: '#00E5FF',
          fixed: '#79F5FF',
          'fixed-dim': '#00D4E8',
        },

        // Surface Stack (Deep Navy/Indigo — from logo background)
        surface: {
          DEFAULT: '#121240',
          dim: '#0E0E35',
          'container-lowest': '#0A0A2E',
          'container-low': '#1B1B5E',
          container: '#222268',
          'container-high': '#2D2D75',
          'container-highest': '#383882',
          bright: '#42428C',
          variant: '#383882',
          tint: '#F5A623',
        },

        // Text
        'on-surface': {
          DEFAULT: '#E8E5F0',
          variant: '#C8B890',
        },
        'on-background': '#E8E5F0',

        // Outline
        outline: {
          DEFAULT: '#8A7D60',
          variant: '#4D4232',
        },

        // Error
        error: {
          DEFAULT: '#FFB4AB',
          container: '#93000A',
        },

        // Legacy aliases
        solar: {
          yellow: '#F5A623',
          gold: '#E09500',
          dark: '#6B4400',
        },
        navy: {
          DEFAULT: '#1B1B5E',
          dark: '#121240',
          light: '#2D2D75',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        headline: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        label: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline-lg': ['2rem', { lineHeight: '1.25', fontWeight: '600', letterSpacing: '-0.02em' }],
        'headline-md': ['1.5rem', { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.01em' }],
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-lg': ['0.875rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.03em' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'full': '9999px',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      backdropBlur: {
        'glass': '16px',
        'glass-heavy': '32px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
