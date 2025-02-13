module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      optimize: {
        minify: true
      }
    },
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
