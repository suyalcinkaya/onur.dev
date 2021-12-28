import NextImage from 'next/image'
import NextLink from 'next/link'
import ErrorPage from 'next/error'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import { LinkButton } from 'components/Button'
import Layout from 'components/Layout'
import RichText from 'components/RichText'
import Share from 'components/Share'

// --- Others
import { getPost, getAllPosts } from 'lib/contentful'

export default function Post({ post }) {
  if (!post) return <ErrorPage statusCode={404} />

  const {
    title,
    description,
    date,
    slug,
    content,
    sys: { publishedAt }
  } = post

  const publishDate = new Date(date || publishedAt)

  return (
    <>
      <BlogSeo
        title={title}
        description={description}
        publishedAt={publishDate}
        url={`https://onur.dev/blog/${slug}`}
      />
      <Layout>
        <article>
          <div className="mb-12 space-y-4">
            <div className="relative">
              <div className="absolute -top-12 left-0">
                <NextLink href="/blog">
                  <LinkButton className="mb-8 text-gray-400">&larr; Blog</LinkButton>
                </NextLink>
              </div>
              <h1 className="font-medium text-3xl">{title}</h1>
            </div>
            <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gray-200">
                  <NextImage src="/images/me.jpg" width={96} height={96} alt="Onur Şuyalçınkaya" />
                </div>
                <div className="flex flex-col ml-3 space-y-0.5">
                  <p className="text-base">Onur Şuyalçınkaya</p>
                  <time className="text-sm text-gray-400" dateTime={publishDate}>
                    {tinytime('{MMMM} {DD}, {YYYY}').render(publishDate)}
                  </time>
                </div>
              </div>
              <Share title={title} url={`https://onur.dev/blog/${slug}`} />
            </div>
          </div>
          <RichText content={content} />
        </article>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  return {
    props: {
      // preview,
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
