import { NextSeo, ArticleJsonLd } from 'next-seo'

// --- Other
import { ogImageUrl } from 'lib/helper'

const BlogSeo = ({ title, summary, publishedAt, url, ogTitle }) => {
  const date = new Date(publishedAt).toISOString()

  const featuredImage = {
    url: ogImageUrl(ogTitle || title),
    alt: title
  }

  return (
    <>
      <NextSeo
        title={`${title} — Onur Şuyalçınkaya`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Onur Şuyalçınkaya"
        dateModified={date}
        datePublished={date}
        description={summary}
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
