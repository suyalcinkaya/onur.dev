import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import RichText from 'components/RichText'
import LikeButton from 'components/LikeButton'

// --- Others

import { getPost, getAllPosts } from 'lib/contentful'

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
        url={`https://onur.dev/writing/${slug}`}
      />
      <article>
        <div className="mb-6 space-y-2">
          <div className="flex items-baseline justify-between space-x-2">
            <h1>{title}</h1>
            <LikeButton slug={slug} />
          </div>
          <div>
            <time dateTime={date || firstPublishedAt} className="font-light text-gray-500">
              {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(date || firstPublishedAt))}
            </time>
          </div>
        </div>
        <RichText content={content} />
      </article>
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
    paths: allPosts?.map(({ slug }) => `/writing/${slug}`) ?? [],
    fallback: false
  }
}
