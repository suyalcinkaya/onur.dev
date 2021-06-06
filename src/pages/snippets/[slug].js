import { MDXRemote } from 'next-mdx-remote'

import { getFiles, getFileBySlug } from 'lib/mdx'
import SnippetLayout from 'layouts/SnippetLayout'
import MDXComponents from 'components/MDXComponents'

export default function Snippet({ mdxSource, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </SnippetLayout>
  )
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
