import { MDXRemote } from 'next-mdx-remote'

import { getFiles, getFileBySlug } from 'lib/mdx'
import WritingLayout from 'layouts/WritingLayout'
import MDXComponents from 'components/MDXComponents'

export default function WritingSlug({ mdxSource, frontMatter }) {
  return (
    <WritingLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </WritingLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('writing')

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
  const post = await getFileBySlug('writing', params.slug)

  return { props: post }
}
