module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'mobile-img': '360px',
        'tab-img': '500px',
      },
      backgroundColor: {
        custom: '#CDE6FA',
      },
      transitionProperty: {
        custom: 'opacity, transform', // Define custom transition properties
      },
      transitionDuration: {
        custom: '0.7s', // Define custom transition duration
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(15px)',
          },
          '50%': {
            transform: 'translateY(-15px)', // Adjust the distance for the bounce effect
          },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite ease-in-out', // Adjust the cubic-bezier values as needed
      },
    },
  },
  plugins: [require('daisyui')],
}
