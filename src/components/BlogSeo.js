import { Fragment } from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString()
  const featuredImage = {
    url: `https://onur.dev${image}`,
    alt: title
  }

  return (
    <Fragment>
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
        publisherLogo="/images/me.jpg"
        publisherName="Onur Şuyalçınkaya"
        title={title}
        url={url}
      />
    </Fragment>
  )
}

export default BlogSeo
