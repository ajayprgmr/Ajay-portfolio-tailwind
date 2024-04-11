/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'mobile-img': '360px', // Change 'mobile_img_w' to 'width' and '50' to 'mobile-img'
      },
      backgroundColor: {
        'custom': '#CDE6FA',
      },
    },
  },
  plugins: [],
}
