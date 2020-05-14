import Link from 'next/link'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import styled from 'styled-components'

// --- Components
import { Box, CodeBlock, Layout, Text } from 'components'
import getSlugs from '../../utils/getSlugs'

export default function BlogPost({ title, frontmatter, markdownBody, readingTime }) {
  if (!frontmatter) return null

  const router = useRouter()

  return (
    <Layout
      title={`${frontmatter.title} - ${title}`}
      type="article"
      date={new Date(frontmatter.date).toISOString()}
      url={`https://onur.dev${router.asPath}`}
      image={frontmatter.imageUrl}
    >
      <Box as="article">
        <Box mb={50}>
          <Text as="h1" fontSize={{ _: 36, md: 48 }} fontWeight={500} mt={0} mb={8} color="#000">
            {frontmatter.title}
          </Text>
          <Box display="flex" flexDirection="column" justifyContent="space-between" color="gray700">
            <Box display="flex" alignItems="center">
              <img
                src="/static/me.jpg"
                alt="Onur Şuyalçınkaya"
                height={24}
                width={24}
                loading="lazy"
              />
              <Text pl={8}>Onur Şuyalçınkaya</Text>
            </Box>
            <Text fontSize={14} pt={8}>
              {dayjs(frontmatter.date).format('DD MMM, YYYY')} • {readingTime}
            </Text>
          </Box>
        </Box>
        {frontmatter.imageUrl && (
          <figure>
            <img
              src={frontmatter.imageUrl}
              alt={frontmatter.imageAlt || frontmatter.title}
              width="100%"
              height={220}
              loading="lazy"
            />
            <a href={frontmatter.imageSource} target="_blank">
              <Text as="figcaption" fontSize={12} fontWeight={500} color="gray500" pl={6}>
                {frontmatter.imageAlt}
              </Text>
            </a>
          </figure>
        )}
        <Box mt={frontmatter.imageUrl && 600}>
          <ReactMarkdown
            source={markdownBody}
            renderers={{
              code: CodeBlock
            }}
          />
        </Box>
      </Box>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params

  const content = await import(`posts/${slug}.md`)
  const config = await import(`../../../siteconfig.json`)
  const data = matter(content.default)

  const readingTime = await require('reading-time')
  const stats = readingTime(data.content.toString())

  return {
    props: {
      title: config.title,
      readingTime: stats.text,
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/blog/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false // so that 404s properly appear if something's not matching
  }
}
