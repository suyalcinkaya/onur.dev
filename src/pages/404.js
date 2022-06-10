import { NextSeo } from 'next-seo'

// --- Components
import Link from 'components/Link'
import PageTitle from 'components/PageTitle'

const title = '404: Page not found'

export default function Custom404() {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title
        }}
        noindex={true}
        nofollow={true}
      />
      <PageTitle
        title="404: Looks like you're lost."
        description={
          <p>
            This link might be broken, deleted, or moved. Nevertheless, you can simply go to the{' '}
            <Link href="/">homepage</Link> and everything will be alright.
          </p>
        }
      />
    </>
  )
}
