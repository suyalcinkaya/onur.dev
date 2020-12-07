import { useRouter } from 'next/router'
import { Box, Stack } from '@chakra-ui/react'
import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'

// --- Other
import { getReadingTime } from 'utils/helper'

const BlogPost = (frontMatter) => {
  const router = useRouter()

  const pathFiles = frontMatter.__resourcePath.split('/')
  const slug = pathFiles[pathFiles.length - 2]
  const readingTime = getReadingTime(frontMatter.readingTime.minutes)

  return (
    <Box
      as="article"
      p={{ md: 4 }}
      m={{ md: -4 }}
      rounded={{ md: 'normal' }}
      cursor={{ md: 'pointer' }}
      transition={{ md: 'background 200ms ease-in-out' }}
      _hover={{ md: { bg: 'gray.100' } }}
      onClick={() => router.push(`/${slug}`)}
    >
      <Card
        title={frontMatter.title}
        primaryText={
          <Stack isInline spacing={1} color="gray.500">
            <time dateTime={frontMatter.publishedAt}>
              {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
            </time>
            <span>&bull;</span>
            <span>{readingTime}</span>
          </Stack>
        }
        secondaryText={frontMatter.summary}
      />
    </Box>
  )
}

export default BlogPost
