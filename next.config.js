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
    async redirects() {
      return [
        {
          source: '/turkiyeden-gitmek-berline-uzanan-bir-goc-hikayesi-bolum-1-nedenler',
          destination: '/blog/bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler',
          permanent: true
        },
        {
          source: '/what-i-have-learned-from-working-with-html5-video-over-a-month',
          destination: '/blog/what-i-have-learned-from-working-with-html5-video-over-a-month',
          permanent: true
        },
        {
          source: '/useFetch-react-hook',
          destination: '/blog/useFetch-react-hook',
          permanent: true
        },
        {
          source: '/understanding-react-memo',
          destination: '/blog/understanding-react-memo',
          permanent: true
        },
        {
          source: '/writing/:slug',
          destination: '/blog/:slug',
          permanent: true
        }
      ]
    }
  }
)
