const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV !== 'production'
      }
    })
  ],
  {
    trailingSlash: false,
    images: {
      deviceSizes: [320, 375, 768, 1024, 1280]
    },
    async redirects() {
      return [
        {
          source: '/turkiyeden-gitmek-berline-uzanan-bir-goc-hikayesi-bolum-1-nedenler',
          destination: '/bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler',
          permanent: true
        },
        {
          source: '/my-2020-year-in-review',
          destination: '/2020-year-in-review',
          permanent: true
        }
      ]
    }
  }
)
