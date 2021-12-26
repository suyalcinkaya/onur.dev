import NextLink from 'next/link'

import { getAllPosts } from 'lib/contentful'

// --- Components
import BlogPost from 'components/WritingCard'
import { GhostButton } from 'components/Button'
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

export default function Home({ allPosts }) {
  console.log(`allPosts`, allPosts)

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
      <p></p>
      <div>
        <div className="flex items-center justify-between">
          <h2>Recent Writings</h2>
          <NextLink href="/writing" passHref>
            <GhostButton as="a">See All &rarr;</GhostButton>
          </NextLink>
        </div>
        {/* <p>I express myself in writing and below are some of my latest posts.</p> */}
        <div className="space-y-10 mt-8">
          <div>
            <BlogPost
              title="2020 — Year in Review"
              summary="It's probably the best and the worst year I've ever had."
              publishedAt="2020-12-30"
              slug="2020-year-in-review"
              readingTime={{ minutes: 3 }}
            />
          </div>
          <div>
            <BlogPost
              title="Bir Yazılımcı Olarak Türkiye'den Gitmek (Bölüm 1: Nedenler)"
              summary="28 yaşında Berlin'de yaşamaya başlayan genç bir adamın hikayesi..."
              publishedAt="2020-11-24"
              slug="bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler"
              readingTime={{ minutes: 9 }}
            />
          </div>
          <div>
            <BlogPost
              title="useFetch: A Custom React Hook"
              summary="What about extracting that recurrent logic into a reusable piece of code (hook) and reuse it where the need be?"
              publishedAt="2020-05-24"
              slug="useFetch-react-hook"
              readingTime={{ minutes: 10 }}
            />
          </div>

          {allPosts.map((post) => (
            <div key={post.slug}>
              <BlogPost
                title={post.title}
                summary={post.description}
                publishedAt={post.sys.firstPublishedAt}
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
  const allPosts = (await getAllPosts(preview)) ?? []
  return {
    props: { allPosts }
  }
}
