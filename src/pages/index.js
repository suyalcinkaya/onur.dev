import { Fragment } from 'react'
import { Grid, Stack } from '@chakra-ui/react'

// --- Components
import BlogPost from 'components/BlogPost'
import Layout from 'components/Layout'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'

// --- Other
import { frontMatter as blogPosts } from './**/*.mdx' // Thanks to babel-plugin-import-glob-array

const Home = () => {
  const sortedBlogPosts = blogPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return (
    <Layout>
      <Stack spacing={12}>
        <Stack spacing={8}>
          <PageHeading>Onur Şuyalçınkaya</PageHeading>
          <p>
            <Link href="https://www.linkedin.com/in/onursuyalcinkaya/">Frontend Engineer</Link>,{' '}
            <Link href="https://github.com/suyalcinkaya">JavaScript enthusiast</Link>,{' '}
            <Link href="https://soundcloud.com/jagerman">DJ</Link>,{' '}
            <Link href="https://medium.com/@suyalcinkaya">writer</Link> and minimalist. Currently living in Berlin,
            Germany and developing things at <Link href="https://hey.car">heycar</Link>. Writing mostly about code,
            design, and my notions to learn, not to teach.
          </p>
        </Stack>
        <Grid gridGap={12}>
          {sortedBlogPosts.map((frontMatter) => (
            <Fragment key={frontMatter.title}>
              <BlogPost {...frontMatter} />
            </Fragment>
          ))}
        </Grid>
      </Stack>
    </Layout>
  )
}

export default Home
