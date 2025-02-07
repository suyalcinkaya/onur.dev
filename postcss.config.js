module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: 'advanced',
        discardComments: {
          removeAll: true
        }
      }
    })
  }
}
