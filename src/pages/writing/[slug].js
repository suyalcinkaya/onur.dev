import { Fragment, memo, Suspense } from 'react'
import NextLink from 'next/link'

import WritingSeo from '@/components/WritingSeo'
import RichText from '@/components/contentful/RichText'
import SectionBlock from '@/components/SectionBlock'
import { getPost, getAllPosts, getRandomPosts } from '@/lib/contentful'
import { getDateTimeFormat, dateToISOString } from '@/lib/utils'

const Post = memo(({ post, randomPosts }) => {
  const {
    title,
    description,
    date,
    slug,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = post

  const postDate = date || firstPublishedAt
  const dateString = getDateTimeFormat(postDate)

  return (
    <>
      <WritingSeo
        title={title}
        description={description}
        publishedAt={postDate}
        updatedAt={updatedAt}
        url={`https://onur.dev/writing/${slug}`}
      />
      <div className="flex flex-col gap-12">
        <article className="content">
          <div className="flex flex-col gap-y-3 mb-6">
            <h1>{title}</h1>
            <time dateTime={postDate} className="block font-light text-gray-500">
              {dateString}
            </time>
          </div>
          <Suspense fallback={null}>
            <RichText content={content} />
          </Suspense>
        </article>
        {randomPosts.length > 0 && (
          <>
            <hr />
            <div className="content">
              <SectionBlock title="You might also enjoy">
                {randomPosts.map((post) => {
                  const {
                    title,
                    date,
                    slug,
                    sys: { firstPublishedAt }
                  } = post

                  const postDate = date || firstPublishedAt
                  const dateString = dateToISOString(postDate)

                  return (
                    <Fragment key={`post_${slug}`}>
                      <NextLink href={`/writing/${slug}`} className="tabular-nums">
                        <span className="flex items-baseline gap-4">
                          <span className="shrink whitespace-nowrap text-gray-400">{dateString}</span>
                          <span className="underline underline-offset-4">{title}</span>
                        </span>
                      </NextLink>
                    </Fragment>
                  )
                })}
              </SectionBlock>
            </div>
          </>
        )}
      </div>
    </>
  )
})

export async function getStaticProps({ params, preview = false }) {
  const [data, randomPosts] = await Promise.all([getPost(params.slug, preview), getRandomPosts(params.slug, preview)])

  return {
    props: {
      post: data?.post ?? null,
      headerTitle: data?.post?.title ?? '',
      randomPosts: randomPosts ?? []
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
