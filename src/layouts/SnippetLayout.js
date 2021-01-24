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

const SnippetLayout = ({ frontMatter, children, ...others }) => {
  const readingTime = getReadingTime(frontMatter.readingTime.minutes)

  return (
    <LayoutCmp {...others}>
      <BlogSeo url={`https://onur.dev/${readingTime.slug}`} {...frontMatter} />
      <article>
        <PageHeading heading={frontMatter.title} />
        <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
          <Share title={frontMatter.title} url={`https://onur.dev/snippets/${frontMatter.slug}`} />
        </div>
        <div className="mt-16">
          <div className="prose mb-12">{children}</div>
          <Button
            as="a"
            variant="solid"
            href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/snippets/${frontMatter.slug}`)}`}
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

export default SnippetLayout
