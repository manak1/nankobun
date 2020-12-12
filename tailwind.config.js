/* eslint-disable prettier/prettier */
module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '480px',
        },
      })
    },
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
