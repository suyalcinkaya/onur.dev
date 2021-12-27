import NextLink from 'next/link'

// --- Components
import BlogPost from 'components/WritingCard'
import { GhostButton } from 'components/Button'
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

import { getAllPosts } from 'lib/contentful'

export default function Home({ recentPosts }) {
  console.log(`recentPosts`, recentPosts)

  return (
    <Layout>
      <PageHeading
        heading={
          <>
            <span role="img" aria-label="Waving Hand" className="mr-4">
              👋🏼
            </span>
            Hey, I'm Onur
          </>
        }
        description={
          <>
            I'm a <Link href="https://www.linkedin.com/in/onursuyalcinkaya/">Frontend Engineer</Link>,{' '}
            <Link href="https://github.com/suyalcinkaya">JavaScript enthusiast</Link>,{' '}
            <Link href="https://soundcloud.com/jagerman">DJ</Link>,{' '}
            <Link href="https://medium.com/@suyalcinkaya">writer</Link> and minimalist, living in Berlin, Germany. I'm
            currently developing things at <Link href="https://hey.car">heycar</Link>.
          </>
        }
      />
      <div>
        <div className="flex items-center justify-between border-b border-gray-200">
          <h3>Recent Posts</h3>
          <NextLink href="/blog" passHref>
            <GhostButton as="a">See All &rarr;</GhostButton>
          </NextLink>
        </div>
        {/* <p>I express myself in writing and below are some of my latest posts.</p> */}
        <div className="space-y-10 mt-8">
          {recentPosts.map((post) => (
            <div key={post.slug}>
              <BlogPost
                title={post.title}
                summary={post.description}
                publishedAt={post.date || post.sys.firstPublishedAt}
                slug={post.slug}
                readingTime={{ minutes: 10 }}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const recentPosts = (await getAllPosts(3, preview)) ?? []
  return {
    props: { recentPosts }
  }
}
