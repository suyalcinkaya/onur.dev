import NextImage from 'next/image'
import NextLink from 'next/link'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import { LinkButton, OutlineButton } from 'components/Button'
import LayoutCmp from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Share from 'components/Share'

// --- Icons
import TwitterIcon from 'components/icons/Twitter'

// --- Others
import { getReadingTime } from 'lib/helper'

const WritingLayout = ({ frontMatter, children, ...others }) => {
  const readingTime = getReadingTime(frontMatter.readingTime.minutes)

  return (
    <LayoutCmp {...others}>
      <BlogSeo url={`https://onur.dev/${readingTime.slug}`} {...frontMatter} />
      <article>
        <NextLink href="/writing">
          <LinkButton className="mb-3 text-gray-400">&larr; Writing</LinkButton>
        </NextLink>
        <PageHeading heading={frontMatter.title} />
        <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gray-600">
              <NextImage height={400} width={400} src="/images/og.jpg" alt="Onur Şuyalçınkaya" />
            </div>
            <div className="flex flex-col ml-3">
              <p className="font-medium">Onur Şuyalçınkaya</p>
              <p className="text-sm text-gray-400">
                <time dateTime={frontMatter.publishedAt}>
                  {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
                </time>
                {' • '}
                {readingTime}
              </p>
            </div>
          </div>
          <Share title={frontMatter.title} url={`https://onur.dev/writing/${frontMatter.slug}`} />
        </div>
        <div className="mt-16">
          <div className="prose mb-12">{children}</div>
          <div className="mb-1">
            <OutlineButton
              as="a"
              href={`https://twitter.com/search?q=${encodeURIComponent(
                `https://onur.dev/writing/${frontMatter.slug}`
              )}`}
              isExternal
            >
              <TwitterIcon height={20} width={20} />
              <span>Discuss on Twitter</span>
            </OutlineButton>
          </div>
        </div>
      </article>
    </LayoutCmp>
  )
}

export default WritingLayout
