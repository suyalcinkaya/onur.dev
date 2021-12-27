import NextImage from 'next/image'
import NextLink from 'next/link'

import ErrorPage from 'next/error'
import tinytime from 'tinytime'

import { LinkButton } from 'components/Button'
import LayoutCmp from 'components/Layout'
import RichText from 'components/RichText'
import Share from 'components/Share'

import { getPost, getAllPosts } from 'lib/contentful'

export default function Post({ post, preview }) {
  if (!post) return <ErrorPage statusCode={404} />

  return (
    <LayoutCmp preview={preview}>
      <article>
        <NextLink href="/blog">
          <LinkButton className="mb-3 text-gray-400">&larr; Blog</LinkButton>
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
                    {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(post.date || post.sys.publishedAt))}
                  </time>
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
