/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        textneon: [
          '0px 0px 0px #fff',
          '0px 0px 1px #54CCEC',
          '0px 0px 2px #1C77D4',
        ],
        hoverneon: [
          '0px 0px 7px #54CCEC',
          '0px 0px 10px #54CCEC',
          '0px 0px 21px #54CCEC',
          '0px 0px 42px #54CCEC',
          '0px 0px 82px #54CCEC',
          '0px 0px 102px #54CCEC',
          '0px 0px 151px #54CCEC',
        ],
        sidenavneon: [
          '0px 0px 7px #fff',
          '0px 0px 10px #54CCEC',
          '0px 0px 21px #1C77D4',
          '0px 0px 42px #0C386E',
          '0px 0px 82px #0C386E',
        ],
      },
      fontFamily: {
        orbitron: ['Orbitron'],
      },

      colors: {
        'cyber-blue': '#1C77D4',
        'cyber-light': '#54CCEC',
        'cyber-dark': '#0C386E',
        'cyber-purple': '#785DAC',
        'cyber-pink': '#C6A3CF',
        'cyber-gray': '#363651',
      },

      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 79.999%, 86%, 100% ': {
            opacity: 1,
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%, 80%, 85.999%': {
            opacity: 0.2,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
