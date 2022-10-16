import { NextSeo } from 'next-seo'

import { getOgImageUrl } from '@/lib/utils'

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
            url: getOgImageUrl({ title, url }),
            alt: title,
            type: 'png'
          }
        ]
      }}
    />
  )
}

export default PageSeo
