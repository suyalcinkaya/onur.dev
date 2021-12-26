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
      domains: ['images.ctfassets.net', 'assets.ctfassets.net'],
      deviceSizes: [320, 375, 768, 1024, 1280]
    },
    // future: { webpack5: true },
    async redirects() {
      return [
        /* {
          source: '/:slug',
          destination: '/writing/:slug',
          permanent: true
        } */
        {
          source: '/turkiyeden-gitmek-berline-uzanan-bir-goc-hikayesi-bolum-1-nedenler',
          destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler',
          permanent: true
        },
        {
          source: '/my-2020-year-in-review',
          destination: '/writing/2020-year-in-review',
          permanent: true
        },
        {
          source: '/what-i-have-learned-from-working-with-html5-video-over-a-month',
          destination: '/writing/what-i-have-learned-from-working-with-html5-video-over-a-month',
          permanent: true
        },
        {
          source: '/useFetch-react-hook',
          destination: '/writing/useFetch-react-hook',
          permanent: true
        },
        {
          source: '/understanding-react-memo',
          destination: '/writing/understanding-react-memo',
          permanent: true
        }
      ]
    }
  }
)
