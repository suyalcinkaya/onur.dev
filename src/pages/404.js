import { NextSeo } from 'next-seo'

import PageTitle from '@/components/PageTitle'
import { OutlineButton } from '@/components/Button'

const seoTitle = '404: Not found'

export default function Custom404() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        openGraph={{
          title: seoTitle
        }}
        noindex={true}
        nofollow={true}
      />
      <div className="content">
        <PageTitle title="Not found" />
        <p>This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here...</p>
        <OutlineButton href="/" className="w-fit">
          Go home
        </OutlineButton>
      </div>
    </>
  )
}
