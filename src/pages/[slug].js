import { Suspense } from 'react'

import PageTitle from '@/components/PageTitle'
import PageSeo from '@/components/PageSeo'
import RichText from '@/components/contentful/RichText'
import { getAllPages, getPage } from '@/lib/contentful'

export default function Page({ page: { title, content, url, ...rest } }) {
  return (
    <>
      <PageSeo title={title} url={url} {...rest} />
      <PageTitle title={title} />
      <Suspense fallback={null}>
        <RichText content={content} />
      </Suspense>
    </>
  )
}

export async function getStaticProps({ params: { slug }, preview = false }) {
  const page = (await getPage(slug, preview)) ?? {}

  return {
    props: { page, headerTitle: page?.title || '' }
  }
}

export async function getStaticPaths({ preview = false }) {
  const allPages = await getAllPages(preview)

  return {
    paths: allPages?.filter(({ hasCustomPage }) => !Boolean(hasCustomPage)).map(({ url }) => `/${url}`) ?? [],
    fallback: false
  }
}
