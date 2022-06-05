import dynamic from 'next/dynamic'
import tinytime from 'tinytime'

// --- Layouts
import PageLayout from 'layouts/PageLayout'

// --- Components
import BlogSeo from 'components/BlogSeo'
import RichText from 'components/RichText'

// --- Others

import { getPost, getAllPosts } from 'lib/contentful'

const LikeButton = dynamic(() => import('components/LikeButton'), { ssr: false })

export default function Post({ post }) {
  const {
    title,
    description,
    date,
    slug,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = post

  return (
    <>
      <BlogSeo
        title={title}
        description={description}
        publishedAt={date || firstPublishedAt}
        updatedAt={updatedAt}
        url={`https://onur.dev/blog/${slug}`}
      />
      <PageLayout>
        <article>
          <div className="mb-6 space-y-2">
            <h1>{title}</h1>
            <div className="flex items-center space-x-4">
              <time dateTime={date || firstPublishedAt} className="font-light text-gray-500">
                {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(date || firstPublishedAt))}
              </time>
              <LikeButton slug={slug} />
            </div>
          </div>
          <RichText content={content} />
        </article>
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  return {
    props: {
      post: data?.post ?? null
    }
  }
}

export async function getStaticPaths({ preview = false }) {
  const allPosts = await getAllPosts(preview)

  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false
  }
}
