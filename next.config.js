const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: './src/layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})()
