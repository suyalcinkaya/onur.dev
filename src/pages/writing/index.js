import tinytime from 'tinytime'

// --- Components
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { getAllPosts, getPage } from 'lib/contentful'

export default function Writing({ allPosts, page: { title, content, ...rest } }) {
  return (
    <>
      <PageSeo title={title} {...rest} />
      <PageTitle title={title || 'Writing'} />
      {content && <RichText content={content} />}
      <div className="flex flex-col gap-y-6">
        {allPosts.map((post) => {
          const {
            title,
            // description,
            date,
            slug,
            sys: { firstPublishedAt }
          } = post

          return (
            <Card
              key={`post_${slug}`}
              title={title}
              description={
                <time dateTime={date || firstPublishedAt}>
                  {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(date || firstPublishedAt))}
                </time>
              }
              url={`/writing/${slug}`}
            />
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? []
  const page = (await getPage('blog', preview)) ?? {}

  return {
    props: { allPosts, page, headerTitle: page?.title || 'Writing' }
  }
}
