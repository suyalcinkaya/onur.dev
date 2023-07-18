import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'

import { RichText } from '@/app/_components/contentful/RichText'
import { PageTitle } from '@/app/_components/PageTitle'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { Views } from '@/app/_components/Views'
import { getPost, getPostSeo, getAllPosts } from '@/lib/contentful'
import { getDateTimeFormat } from '@/lib/utils'

export async function generateStaticParams() {
  const allPosts = (await getAllPosts()) ?? []
  return allPosts.map((post) => ({ slug: post.slug }))
}

async function fetchData(slug) {
  const { isEnabled } = draftMode()
  const data = await getPost(slug, isEnabled)
  if (!data?.post) notFound()

  return {
    post: data?.post
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
    url: `https://onur.dev/writing/${slug}`
  }

  return (
    <>
      <div className="relative flex w-full flex-col bg-white">
        <FloatingHeader initialTitle={title} backLink="/writing">
          <Views slug={slug} />
        </FloatingHeader>
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
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
    </>
  )
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
