import { memo, Suspense } from 'react'

// --- Components
import WritingSeo from 'components/WritingSeo'
import RichText from 'components/RichText'

// --- Others
import { useHasMounted } from 'hooks/useHasMounted'
import { getPost, getAllPosts } from 'lib/contentful'
import { getDateString } from 'lib/helper'

const Post = memo(({ post }) => {
  const hasMounted = useHasMounted()
  const {
    title,
    description,
    date,
    slug,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = post

  const postDate = date || firstPublishedAt
  const dateString = getDateString(postDate)

  return (
    <>
      <WritingSeo
        title={title}
        description={description}
        publishedAt={postDate}
        updatedAt={updatedAt}
        url={`https://onur.dev/writing/${slug}`}
      />
      <article>
        <div className="flex flex-col gap-y-3 mb-6">
          <h1>{title}</h1>
          {hasMounted ? (
            <time dateTime={postDate} className="block font-light text-gray-500">
              {dateString}
            </time>
          ) : (
            <div className="text-gray-500">—</div>
          )}
        </div>
        <Suspense fallback={null}>
          <RichText content={content} />
        </Suspense>
      </article>
    </>
  )
})

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  return {
    props: {
      post: data?.post ?? null,
      headerTitle: data?.post?.title ?? ''
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

export default Post
