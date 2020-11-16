import { Box, Button, Divider, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import tinytime from 'tinytime'

// --- Components
import { BlogSeo, Layout as LayoutCom, PageHeading, Share } from 'components'

// --- Others
import { baseTheme, lightTheme } from 'styles/prism'

const Container = styled(LayoutCom)`
  ${baseTheme}
  ${lightTheme}
`

const Layout = ({ frontMatter, children }) => {
  const slug = frontMatter.__resourcePath.split('/')[0]

  return (
    <Container>
      <BlogSeo url={`https://onur.dev/${slug}`} {...frontMatter} />
      <article>
        <Stack spacing={4} mb={10}>
          <PageHeading>{frontMatter.title}</PageHeading>
          <Box>
            <Text color="gray.500">
              <time dateTime={frontMatter.publishedAt}>
                {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
              </time>
              {' • '}
              {frontMatter.readingTime.text}
            </Text>
          </Box>
          <Box>
            <Share title={frontMatter.title} url={`https://onur.dev/${slug}`} />
          </Box>
        </Stack>
        {children}
        <Box mt={30}>
          <Divider my={6} borderColor="gray.300" />
          <Button
            as="a"
            href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            // variant="outline"
            colorScheme="twitter"
          >
            {'Discuss on Twitter →'}
          </Button>
        </Box>
      </article>
    </Container>
  )
}

export default Layout
