import { NextSeo } from 'next-seo'

// --- Others
import { cachedGenerateOgImageUrl } from 'utils/helpers'

const PageSeo = ({ title, url, seoTitle, seoDescription }) => {
  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      canonical={`https://onur.dev/${url}`}
      openGraph={{
        url: `https://onur.dev/${url}`,
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: cachedGenerateOgImageUrl(title),
            alt: title,
            type: 'image/jpeg'
          }
        ]
      }}
    />
  )
}

export default PageSeo
