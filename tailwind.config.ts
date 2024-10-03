import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      expo2: ['var(--font-expo2)'],
      expo2_italic: ['var(--font-expo2_italic)'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {
      colors: {
        body: '#1D1F23',
        primary: '#151618',
        accent: {
          DEFAULT: '#F6CD46',
          hover: '#E1B72E',
        },

      },
    },
    backgroundImage: {
      mainSlider: "url('/mainSlider_bg.png')",
    },
    keyframes: {
      shake: {
        '10%, 90%': { transform: 'translate3d(-1px, 0,0 )' },
        '20%, 80%': { transform: 'translate3d(2px, 0,0 )' },
        '30%, 50%, 70%': { transform: 'translate3d(-4px, 0,0 )' },
        '40%, 60%': { transform: 'translate3d(4px, 0,0 )' },
      },
    },
    animation: {
      shake: 'shake 1s ease-in-out',
    },
  },

  plugins: [],
}

export default config
