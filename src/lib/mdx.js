import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'

import MDXComponents from 'components/MDXComponents'

const root = path.join(process.cwd(), 'src')

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
      rehypePlugins: [mdxPrism]
    }
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8')
    const { data, content } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(content)
      },
      ...allPosts
    ]
  }, [])
}
