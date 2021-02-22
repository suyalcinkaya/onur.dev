import NextLink from 'next/link'

// --- Components
import BlogSeo from 'components/BlogSeo'
import { LinkButton, OutlineButton } from 'components/Button'
import LayoutCmp from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Share from 'components/Share'

// --- Icons
import TwitterIcon from 'components/icons/Twitter'

const SnippetLayout = ({ frontMatter, children, ...others }) => {
  return (
    <LayoutCmp {...others}>
      <BlogSeo url={`https://onur.dev/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <NextLink href="/snippets">
          <LinkButton className="mb-3 text-gray-400">&larr; Snippets</LinkButton>
        </NextLink>
        <PageHeading heading={frontMatter.title} />
        <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:justify-between">
          <Share title={frontMatter.title} url={`https://onur.dev/snippets/${frontMatter.slug}`} />
        </div>
        <div className="mt-16">
          <div className="prose mb-12">{children}</div>
          <OutlineButton
            as="a"
            href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/snippets/${frontMatter.slug}`)}`}
            isExternal
          >
            <TwitterIcon />
            <span>Discuss on Twitter</span>
          </OutlineButton>
        </div>
      </article>
    </LayoutCmp>
  )
}

export default SnippetLayout
