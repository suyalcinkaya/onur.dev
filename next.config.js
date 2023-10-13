module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['images.ctfassets.net', 'assets.ctfassets.net'],
    deviceSizes: [320, 375, 768, 1024, 1280]
  },
  async redirects() {
    return [
      {
        source: '/turkiyeden-gitmek-berline-uzanan-bir-goc-hikayesi-bolum-1-nedenler',
        destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek',
        permanent: true
      },
      {
        source: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler',
        destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek',
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
      },
      {
        source: '/blog/:slug',
        destination: '/writing/:slug',
        permanent: true
      },
      {
        source: '/bookmarks/18259129',
        destination: '/bookmarks/apps-and-tools',
        permanent: true
      },
      {
        source: '/bookmarks/15968768',
        destination: '/bookmarks/design',
        permanent: true
      },
      {
        source: '/bookmarks/23598938',
        destination: '/bookmarks/fonts',
        permanent: true
      },
      {
        source: '/bookmarks/16949672',
        destination: '/bookmarks/frontend',
        permanent: true
      },
      {
        source: '/bookmarks/15807896',
        destination: '/bookmarks/portfolio',
        permanent: true
      },
      {
        source: '/bookmarks/15807897',
        destination: '/bookmarks/reading',
        permanent: true
      },
      {
        source: '/bookmarks/15896982',
        destination: '/bookmarks/tweets',
        permanent: true
      },
      {
        source: '/bookmarks/15969648',
        destination: '/bookmarks/vs-code',
        permanent: true
      },
      {
        source: '/bookmarks/25589709',
        destination: '/bookmarks/wallpapers',
        permanent: true
      },
      {
        source: '/bookmarks/16338467',
        destination: '/bookmarks/websites',
        permanent: true
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@supabase/supabase-js', 'react-tweet']
  }
}
