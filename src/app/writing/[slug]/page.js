import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import RichText from '@/app/_components/contentful/RichText'
import PageTitle from '@/app/_components/PageTitle'
import { getAllPosts, getPost, getPostSeo } from '@/lib/contentful'
import { getDateTimeFormat, getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

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
          ...openGraphImage,
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
  const data = await getPost(slug)
  if (!data?.post) notFound()

  return {
    post: data.post
  }
}

export default async function WritingSlug({ params }) {
  const { slug } = params
  const { post } = await fetchData(slug)

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
        <div className="content-wrapper">
          <article className="content">
            <PageTitle
              title={title}
              subtitle={
                <time dateTime={postDate} className="text-gray-400">
                  {dateString}
                </time>
              }
              className="mb-6 flex flex-col gap-3"
            />
            <RichText content={content} />
          </article>
        </div>
      </Suspense>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
    </>
  )
}
