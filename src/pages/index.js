import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'
import SectionBlock from 'components/SectionBlock'
import Link from 'components/Link'
import PageTitle from 'components/PageTitle'

// --- Others
import { getLast3Posts } from 'lib/contentful'
import { mixtapes, projects, profiles } from 'lib/constants'

export default function Home({ recentPosts }) {
  return (
    <>
      <PageTitle
        title={
          <>
            <span role="img" aria-label="Waving Hand" className="mr-4">
              👋🏼
            </span>
            Hey, I'm Onur
          </>
        }
      />
      <p>
        I'm a <Link href={profiles.linkedin.url}>software engineer</Link>,{' '}
        <Link href={profiles.github.url}>javascript enthusiast</Link>, <Link href={profiles.soundcloud.url}>dj</Link>,{' '}
        <Link href={profiles.medium.url}>writer</Link>, and minimalist, living in Berlin, Germany. I'm currently
        developing things at <Link href="https://hey.car">heycar</Link>.
      </p>
      <div className="flex flex-col gap-y-8 mt-12">
        <SectionBlock title="Recent Posts" url="/writing">
          {recentPosts.map((post) => {
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
        </SectionBlock>

        <SectionBlock title="Popular Mixtapes" url={`${profiles.soundcloud.url}?ref=onur.dev`}>
          {mixtapes.map((mixtape) => {
            const { title, description, url } = mixtape
            return <Card key={`mixtape_${url}`} title={title} description={description} url={url} />
          })}
        </SectionBlock>

        <SectionBlock title="Some Projects" url={`${profiles.github.url}?ref=onur.dev`}>
          {projects.map((project) => {
            const { title, description, url } = project
            return <Card key={`project_${url}`} title={title} description={description} url={url} />
          })}
        </SectionBlock>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const recentPosts = (await getLast3Posts(preview)) ?? []

  return {
    props: { recentPosts, headerTitle: 'Home' }
  }
}
