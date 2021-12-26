import NextImage from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import tinytime from 'tinytime'

import { LinkButton } from 'components/Button'
import LayoutCmp from 'components/Layout'
import RichText from 'components/RichText'
import Share from 'components/Share'

import { getPost, getAllPosts } from 'lib/contentful'

/* import { MDXRemote } from 'next-mdx-remote'

import { getFiles, getFileBySlug } from 'lib/mdx'
import WritingLayout from 'layouts/WritingLayout'
import MDXComponents from 'components/MDXComponents' */

/* export default function WritingSlug({ mdxSource, frontMatter }) {
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
} */

export default function Post({ post, preview }) {
  console.log(`post`, post)
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <LayoutCmp preview={preview}>
      <article>
        <NextLink href="/posts">
          <LinkButton className="mb-3 text-gray-400">&larr; Posts</LinkButton>
        </NextLink>
        <div className="mb-12">
          <h1 className="text-3xl mb-4">{post.title}</h1>
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gray-200">
                <NextImage height={400} width={400} src="/images/og.jpg" alt="Onur Şuyalçınkaya" />
              </div>
              <div className="flex flex-col ml-3">
                <p className="font-medium">Onur Şuyalçınkaya</p>
                <p className="text-sm text-gray-400">
                  <time dateTime={post.date || post.sys.publishedAt}>
                    {tinytime('{MM} {DD}, {YYYY}').render(new Date(post.date || post.sys.publishedAt))}
                  </time>
                  {' • '}
                  10 minutes
                </p>
              </div>
            </div>
            <Share title={post.title} url={`https://onur.dev/writing/${post.slug}`} />
          </div>
        </div>
        <RichText content={post.content} />
      </article>
    </LayoutCmp>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true
  }
}
