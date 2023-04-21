import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import RichText from '@/components/contentful/RichText'
import PageTitle from '@/components/PageTitle'
import { RandomPosts } from '@/components/RandomPosts'
import { getAllPosts, getPost, getRandomPosts, getPostSeo } from '@/lib/contentful'
import { getDateTimeFormat, getOgImageUrl, fetcher } from '@/lib/utils'
import { sharedOpenGraphImage } from '@/app/shared-metadata'

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

  const siteUrl = `/writing/${postSlug}`
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
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}

export async function generateStaticParams() {
  const allPosts = (await getAllPosts()) ?? []
  return allPosts.map((post) => ({ slug: post.slug }))
}

async function fetchData(slug) {
  const [data, randomPosts] = await Promise.all([getPost(slug), getRandomPosts(slug)])
  if (!data?.post) notFound()

  return {
    post: data.post,
    headerTitle: data.post.title ?? '',
    randomPosts: randomPosts ?? []
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
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: 'Onur Şuyalçınkaya'
    },
    image: {
      '@type': 'ImageObject',
      height: '630',
      width: '1200',
      url: getOgImageUrl({ title })
    },
    url: `https://onur.dev/writing/${slug}`
  }

  return (
    <>
      <Suspense fallback={null}>
        <article className="content">
          <PageTitle
            title={title}
            subtitle={<time dateTime={postDate}>{dateString}</time>}
            className="flex flex-col gap-3 mb-6"
          />
          <RichText content={content} />
        </article>
      </Suspense>
      <Suspense fallback={null}>
        <RandomPosts randomPosts={randomPosts} />
      </Suspense>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
    </>
  )
}
