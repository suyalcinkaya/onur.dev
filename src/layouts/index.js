import NextImage from 'next/image'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import Button from 'components/Button'
import LayoutCmp from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Share from 'components/Share'

// --- Icons
import TwitterIcon from 'components/icons/Twitter'

// --- Others
import { getReadingTime } from 'lib/helper'

const Layout = ({ frontMatter, children, ...others }) => {
  const readingTime = getReadingTime(frontMatter.readingTime.minutes)

  return (
    <LayoutCmp {...others}>
      <BlogSeo url={`https://onur.dev/${readingTime.slug}`} {...frontMatter} />
      <article>
        <PageHeading>{frontMatter.title}</PageHeading>
        <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <NextImage height={400} width={400} src="/images/og.jpg" alt="Onur Şuyalçınkaya" />
            </div>
            <div className="flex flex-col ml-3">
              <p className="font-medium">Onur Şuyalçınkaya</p>
              <p className="text-sm text-gray-500">
                <time dateTime={frontMatter.publishedAt}>
                  {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
                </time>
                {' • '}
                {readingTime}
              </p>
            </div>
          </div>
          <Share title={frontMatter.title} url={`https://onur.dev/${frontMatter.slug}`} />
        </div>
        <div className="mt-16">
          <div className="prose mb-12">{children}</div>
          <Button
            as="a"
            variant="solid"
            href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/${frontMatter.slug}`)}`}
            isExternal
          >
            <TwitterIcon />
            <span>Discuss on Twitter</span>
          </Button>
        </div>
      </article>
    </LayoutCmp>
  )
}

export default Layout
