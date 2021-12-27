import NextLink from 'next/link'
import ErrorPage from 'next/error'

// --- Components
import { LinkButton } from 'components/Button'
import CodeBlock from 'components/CodeBlock'
import Layout from 'components/Layout'
import Share from 'components/Share'

// --- Others
import { getCodeSnippet, getAllCodeSnippets } from 'lib/contentful'

export default function Snippet({ codeSnippet, preview }) {
  if (!codeSnippet) return <ErrorPage statusCode={404} />

  return (
    <Layout preview={preview}>
      <article>
        <NextLink href="/snippets">
          <LinkButton className="mb-3 text-gray-400">&larr; Snippets</LinkButton>
        </NextLink>
        <div className="mb-12">
          <h1 className="text-3xl mb-4">{codeSnippet.title}</h1>
          <Share title={codeSnippet.title} url={`https://onur.dev/snippets/${codeSnippet.slug}`} />
        </div>
        <CodeBlock language={codeSnippet.language} code={codeSnippet.code} />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getCodeSnippet(params.slug, preview)

  return {
    props: {
      preview,
      codeSnippet: data?.codeSnippet ?? null
    }
  }
}

export async function getStaticPaths() {
  const allCodeSnippets = (await getAllCodeSnippets()) ?? []

  return {
    paths: allCodeSnippets?.map(({ slug }) => `/snippets/${slug}`) ?? [],
    fallback: true
  }
}
