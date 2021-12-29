import { NextSeo, ArticleJsonLd } from 'next-seo'

// --- Other
import { ogImageUrl } from 'lib/helper'

const BlogSeo = ({ title, description, publishedAt, url }) => {
  const date = new Date(publishedAt).toISOString()

  const featuredImage = {
    url: ogImageUrl(title),
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
            publishedTime: date
          },
          url,
          title: `${title} — Onur Şuyalçınkaya`,
          description: description,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Onur Şuyalçınkaya"
        dateModified={date}
        datePublished={date}
        description={description}
        images={[featuredImage]}
        publisherLogo="/images/me.png"
        publisherName="Onur Şuyalçınkaya"
        title={title}
        url={url}
      />
    </>
  )
}

export default BlogSeo
