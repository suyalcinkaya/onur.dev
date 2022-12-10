import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import RichText from '@/components/contentful/RichText'
import SectionBlock from '@/components/SectionBlock'
import WritingCard from '@/components/WritingCard'
import { getAllPosts, getPost, getRandomPosts, getPostSeo } from '@/lib/contentful'
import { getDateTimeFormat, dateToISOString, getOgImageUrl } from '@/lib/utils'
import { sharedOpenGraphImage } from '@/app/shared-metadata'

async function fetchData(slug) {
  const [data, randomPosts] = await Promise.all([getPost(slug), getRandomPosts(slug)])
  if (!data?.post) notFound()

  return {
    post: data.post,
    headerTitle: data.post.title ?? '',
    randomPosts: randomPosts ?? []
  }
}

export async function generateStaticParams() {
  const allPosts = (await getAllPosts()) ?? []

  return allPosts.map((post) => ({
    slug: `/writing/${post.slug}`
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const seoData = (await getPostSeo(slug)) ?? null
  if (!seoData) return null

  const {
    title,
    description,
    date,
    slug: postSlug,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = seoData

  const url = `https://onur.dev/writing/${postSlug}`
  const postDate = date || firstPublishedAt
  const publishedTime = new Date(postDate).toISOString()
  const modifiedTime = new Date(updatedAt).toISOString()

  return {
    title: `${title} — Onur Şuyalçınkaya`,
    description,
    openGraph: {
      title: `${title} — Onur Şuyalçınkaya`,
      description,
      images: [
        {
          ...sharedOpenGraphImage,
          url: getOgImageUrl({ title }),
          alt: title
        }
      ],
      type: 'article',
      publishedTime,
      ...(updatedAt && {
        modifiedTime
      }),
      url
    },
    alternates: {
      canonical: url
    }
  }
}

export default async function WritingSlug({ params }) {
  const { slug } = params
  const { post, randomPosts } = await fetchData(slug)

  const {
    title,
    description,
    date,
    content,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = post

  const postDate = date || firstPublishedAt
  const dateString = getDateTimeFormat(postDate)

  const datePublished = new Date(postDate).toISOString()
  const dateModified = new Date(updatedAt).toISOString()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    title,
    description,
    datePublished,
    dateModified,
    authorName: 'Onur Şuyalçınkaya',
    image: [getOgImageUrl({ title })],
    url: `https://onur.dev/writing/${slug}`
  }

  return (
    <>
      <div className="flex flex-col gap-12">
        <article className="content">
          <div className="flex flex-col gap-y-3 mb-6">
            <h1>{title}</h1>
            <time dateTime={postDate}>{dateString}</time>
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

                  const dateTime = date || firstPublishedAt
                  const dateString = dateToISOString(dateTime)

                  return (
                    <WritingCard
                      key={`writing_${slug}`}
                      slug={slug}
                      title={title}
                      dateTime={dateTime}
                      dateString={dateString}
                    />
                  )
                })}
              </SectionBlock>
            </div>
          </>
        )}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
    </>
  )
}
