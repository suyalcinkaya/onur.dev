import NextLink from 'next/link'
import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'
import { GhostButton } from 'components/Button'
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageTitle from 'components/PageTitle'

// --- Others
import { getLast3Posts } from 'lib/contentful'
import { mixtapes, projects, profiles } from 'lib/constants'

export default function Home({ recentPosts }) {
  return (
    <Layout>
      <PageTitle
        title={
          <>
            <span role="img" aria-label="Waving Hand" className="mr-4">
              👋🏼
            </span>
            Hey, I'm Onur
          </>
        }
        description={
          <>
            I'm a <Link href={profiles.linkedin.url}>Software Engineer</Link>,{' '}
            <Link href={profiles.github.url}>JavaScript enthusiast</Link>,{' '}
            <Link href={profiles.soundcloud.url}>DJ</Link>, <Link href={profiles.linkedin.url}>writer</Link> and
            minimalist, living in Berlin, Germany. I'm currently developing things at{' '}
            <Link href="https://hey.car">heycar</Link>.
          </>
        }
      />
      <div className="space-y-16">
        <div>
          <div className="flex items-center justify-between border-b border-gray-200">
            <h3>Recent Posts</h3>
            <NextLink href="/blog" passHref>
              <GhostButton as="a">See All &rarr;</GhostButton>
            </NextLink>
          </div>
          {/* <p>I express myself in writing and below are some of my latest posts.</p> */}
          <div className="space-y-10 mt-8">
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
                  url={`/blog/${slug}`}
                />
              )
            })}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between border-b border-gray-200">
            <h3>Popular Mixtapes</h3>
            <GhostButton as="a" href={profiles.soundcloud.url} isExternal>
              See All &rarr;
            </GhostButton>
          </div>
          <div className="space-y-8 mt-8">
            {mixtapes.map((mixtape) => {
              const { title, description, url } = mixtape
              return <Card key={`mixtape_${url}`} title={title} description={description} url={url} />
            })}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between border-b border-gray-200">
            <h3>Some Projects</h3>
            <GhostButton as="a" href={profiles.github.url} isExternal>
              See All &rarr;
            </GhostButton>
          </div>
          <div className="space-y-8 mt-8">
            {projects.map((project) => {
              const { title, description, url } = project
              return <Card key={`project_${url}`} title={title} description={description} url={url} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const recentPosts = (await getLast3Posts(preview)) ?? []

  return {
    props: { recentPosts }
  }
}
