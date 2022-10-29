import { NextSeo, ArticleJsonLd } from 'next-seo'

import { getOgImageUrl } from '@/lib/utils'

const WritingSeo = ({ title, description, publishedAt, updatedAt, url }) => {
  const publishedDate = new Date(publishedAt).toISOString()
  const featuredImage = {
    url: getOgImageUrl({ title }),
    alt: title
  }

  return (
    <>
      <NextSeo
        title={`${title} — Onur Şuyalçınkaya`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedDate
          },
          url,
          title: `${title} — Onur Şuyalçınkaya`,
          description: description,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        images={[featuredImage]}
        datePublished={publishedDate}
        {...(updatedAt && {
          dateModified: new Date(updatedAt).toISOString()
        })}
        authorName="Onur Şuyalçınkaya"
        description={description}
        publisherName="Onur Şuyalçınkaya"
        publisherLogo="/images/me.png"
      />
    </>
  )
}

export default WritingSeo
