import { useRouter } from 'next/router'
import { Badge, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import tinytime from 'tinytime'

// --- Other
import { safariOnly } from 'utils/helper'

const TagsContainer = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  column-gap: 0.5rem;

  ${safariOnly(`
    margin-bottom: -0.5rem;
  `)}
`

// gap is not supported on Safari yet
const TagBadge = styled(Badge)`
  ${safariOnly(`
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  `)}
`

const BlogPost = (frontMatter) => {
  const router = useRouter()

  const {
    publishedAt,
    readingTime: { text: readingDuration },
    summary,
    title,
    tags
  } = frontMatter

  const pathFiles = frontMatter.__resourcePath.split('/')
  const slug = pathFiles[pathFiles.length - 2]

  return (
    <Stack
      as="article"
      spacing={1}
      p={{ md: 4 }}
      m={{ md: -4 }}
      rounded={{ md: 'normal' }}
      cursor={{ md: 'pointer' }}
      transition={{ md: 'background 200ms ease-in-out' }}
      _hover={{ md: { bg: 'gray.100' } }}
      onClick={() => router.push(`/${slug}`)}
    >
      <Stack isInline spacing={1} color="gray.500">
        <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
        <span>&bull;</span>
        <span>{readingDuration}</span>
      </Stack>
      <Heading as="h3" fontSize="xl" fontWeight="medium" lineHeight="base">
        {title}
      </Heading>
      <Text color="gray.500">{summary}</Text>
      {tags?.length > 0 && (
        <TagsContainer pt={2} pb={1}>
          {tags.map((tag, tagIndex) => (
            <TagBadge
              key={`tag_${tagIndex}`}
              variant="outline"
              fontSize="xxs"
              lineHeight="taller"
              letterSpacing="1px"
              fontWeight="normal"
              px={2}
            >
              {tag}
            </TagBadge>
          ))}
        </TagsContainer>
      )}
    </Stack>
  )
}

export default BlogPost
