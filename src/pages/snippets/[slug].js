import NextLink from 'next/link'

// --- Layouts
import PageLayout from 'layouts/PageLayout'

// --- Components
import BlogSeo from 'components/BlogSeo'
import CodeBlock from 'components/CodeBlock'
import { LinkButton } from 'components/Button'
import PageTitle from 'components/PageTitle'
import Share from 'components/Share'

// --- Others
import { getCodeSnippet, getAllCodeSnippets } from 'lib/contentful'

export default function Snippet({ codeSnippet }) {
  const {
    title,
    description,
    slug,
    code,
    language,
    sys: { firstPublishedAt, publishedAt: updatedAt }
  } = codeSnippet

  return (
    <>
      <BlogSeo
        title={title}
        description={description}
        publishedAt={firstPublishedAt}
        updatedAt={updatedAt}
        url={`https://onur.dev/snippets/${slug}`}
      />
      <PageLayout>
        <article>
          <div className="mb-12 space-y-4">
            <div className="relative">
              <div className="absolute -top-10 md:-top-14 left-0">
                <NextLink href="/snippets">
                  <LinkButton className="mb-8 text-gray-400">&larr; Snippets</LinkButton>
                </NextLink>
              </div>
              <PageTitle title={title} isSlugTitle />
            </div>
            <Share title={title} url={`https://onur.dev/snippets/${slug}`} />
          </div>
          <CodeBlock language={language} code={code} />
        </article>
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ params: { slug }, preview = false }) {
  const data = await getCodeSnippet(slug, preview)

  return {
    props: {
      // preview,
      codeSnippet: data?.codeSnippet ?? null
    }
  }
}

export async function getStaticPaths() {
  const allCodeSnippets = (await getAllCodeSnippets()) ?? []

  return {
    paths: allCodeSnippets?.map(({ slug }) => `/snippets/${slug}`) ?? [],
    fallback: false
  }
}
