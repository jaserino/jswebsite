/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
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
          '0px 0px 7px #54CCEC',
          '0px 0px 10px #54CCEC',
          '0px 0px 21px #54CCEC',
          '0px 0px 42px #54CCEC',
          '0px 0px 82px #54CCEC',
          '0px 0px 102px #54CCEC',
          '0px 0px 151px #54CCEC',
        ],
      },
      fontFamily: {
        orbitron: ['Orbitron'],
        zeb: ['zebulon'],
      },

      colors: {
        'cyber-blue': '#1C77D4',
        'cyber-light': '#54CCEC',
        'cyber-dark': '#0C386E',
        'cyber-purple': '#785DAC',
        'cyber-pink': '#C6A3CF',
        'cyber-gray': '#363651',
      },
    },
  },
  plugins: [],
};
