import hydrate from 'next-mdx-remote/hydrate'

import { getFiles, getFileBySlug } from 'lib/mdx'
import SnippetLayout from 'layouts/SnippetLayout'
import MDXComponents from 'components/MDXComponents'

export default function Snippet({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  })

  return <SnippetLayout frontMatter={frontMatter}>{content}</SnippetLayout>
}

export async function getStaticPaths() {
  const posts = await getFiles('snippets')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('snippets', params.slug)

  return { props: post }
}
