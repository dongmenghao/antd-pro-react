// tailwind.css 配置教程 https://zhuanlan.zhihu.com/p/489410215
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#1890ff',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {},
  plugins: [],
};
