import { memo } from 'react'
import tinytime from 'tinytime'

// --- Components
import WritingSeo from 'components/WritingSeo'
import RichText from 'components/RichText'

// --- Others
import { getPost, getAllPosts } from 'lib/contentful'

const Post = memo(({ post }) => {
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
      <WritingSeo
        title={title}
        description={description}
        publishedAt={date || firstPublishedAt}
        updatedAt={updatedAt}
        url={`https://onur.dev/writing/${slug}`}
      />
      <article>
        <div className="flex flex-col gap-y-2 mb-6">
          <h1>{title}</h1>
          <time dateTime={date || firstPublishedAt} className="block font-light text-gray-500">
            {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(date || firstPublishedAt))}
          </time>
        </div>
        <RichText content={content} />
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
