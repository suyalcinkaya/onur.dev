const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withMdxEnhanced = require('next-mdx-enhanced')
const mdxPrism = require('mdx-prism')
const readingTime = require('reading-time')

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV !== 'production'
      }
    }),
    withMdxEnhanced({
      layoutPath: './src/layouts',
      defaultLayout: true,
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
      extendFrontMatter: {
        process: (mdxContent) => ({
          wordCount: mdxContent.split(/\s+/gu).length,
          readingTime: readingTime(mdxContent)
        })
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
