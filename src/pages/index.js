import NextLink from 'next/link'

// --- Components
import BlogPost from 'components/BlogPost'
import Button from 'components/Button'
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

const Home = () => (
  <Layout>
    <PageHeading>
      <span role="img" className="mr-4">
        👋🏼
      </span>
      Hey, I'm Onur
    </PageHeading>
    <p>
      I'm a <Link href="https://www.linkedin.com/in/onursuyalcinkaya/">Frontend Engineer</Link>,{' '}
      <Link href="https://github.com/suyalcinkaya">JavaScript enthusiast</Link>,{' '}
      <Link href="https://soundcloud.com/jagerman">DJ</Link>,{' '}
      <Link href="https://medium.com/@suyalcinkaya">writer</Link> and minimalist, living in Berlin, Germany. I'm
      currently developing things at <Link href="https://hey.car">heycar</Link>.
    </p>
    <div className="mt-12 space-y-8 md:space-y-6">
      <div className="space-y-2">
        <h2>Recent Writings</h2>
        <p>Writing mostly about code, design, and my notions to learn, not to teach.</p>
      </div>
      <div className="space-y-8 md:space-y-6">
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
            title="Bir Yazılımcı Olarak Türkiye’den Gitmek (Bölüm 1: Nedenler)"
            summary="28 yaşında Berlin'de yaşamaya başlayan genç bir adamın hikayesi..."
            publishedAt="2020-11-24"
            slug="bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler"
            readingTime={{ minutes: 9 }}
          />
        </div>
        <div>
          <BlogPost
            title="Bir Yazılımcı Olarak Türkiye’den Gitmek (Bölüm 1: Nedenler)"
            summary="28 yaşında Berlin'de yaşamaya başlayan genç bir adamın hikayesi..."
            publishedAt="2020-11-24"
            slug="bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler"
            readingTime={{ minutes: 9 }}
          />
        </div>
        <div>
          <NextLink href="/writing" passHref>
            <Button variant="link">See All Writings &rarr;</Button>
          </NextLink>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
