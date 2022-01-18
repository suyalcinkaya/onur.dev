// --- Layouts
import PageLayout from 'layouts/PageLayout'

// --- Components
import PageTitle from 'components/PageTitle'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { getAllPages, getPage } from 'lib/contentful'

export default function Page({ page }) {
  const { title, content, ...rest } = page

  return (
    <>
      <PageSeo title={title} {...rest} />
      <PageLayout>
        <PageTitle title={title} description={<RichText content={content} />} />
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ params: { slug }, preview = false }) {
  const page = (await getPage(slug, preview)) ?? {}

  return {
    props: { page }
  }
}

export async function getStaticPaths({ preview = false }) {
  const allPages = await getAllPages(preview)

  return {
    paths: allPages?.filter(({ hasCustomPage }) => !Boolean(hasCustomPage)).map(({ url }) => `/${url}`) ?? [],
    fallback: false
  }
}
