import { Box, Button, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import LayoutCmp from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Share from 'components/Share'
import Twitter from 'components/icons/Twitter'

// --- Others
import { baseTheme, lightTheme } from 'styles/prism'

const Container = styled(LayoutCmp)`
  ${baseTheme}
  ${lightTheme}
`

const Layout = ({ frontMatter, children }) => {
  const slug = frontMatter.__resourcePath.split('/')[0]

  return (
    <Container>
      <BlogSeo url={`https://onur.dev/${slug}`} {...frontMatter} />
      <Stack as="article" spacing={16}>
        <Stack spacing={6}>
          <PageHeading>{frontMatter.title}</PageHeading>
          <Stack spacing={2}>
            <Text color="gray.500">
              <time dateTime={frontMatter.publishedAt}>
                {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
              </time>
              {' • '}
              {frontMatter.readingTime.text}
            </Text>
            <Share title={frontMatter.title} url={`https://onur.dev/${slug}`} />
          </Stack>
        </Stack>
        <Stack spacing={6}>
          <Box>{children}</Box>
          <Button
            as="a"
            href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Twitter />}
            colorScheme="twitter"
            alignSelf="flex-start"
          >
            {'Discuss on Twitter →'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Layout
