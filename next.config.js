const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withMdxEnhanced = require('next-mdx-enhanced')
const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')

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
    }
  }
)
