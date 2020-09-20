import { Heading, Link, Stack, Text } from '@chakra-ui/core'

const MusicCard = (props) => {
  const { description, likeCount, playCount, title, url } = props

  return (
    <Link
      href={url}
      css={{
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none'
        }
      }}
      isExternal
    >
      <Stack spacing={1}>
        <Heading as="h3" fontFamily="sans" fontSize="md" fontWeight="medium">
          {title} — {description}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {playCount}
          {'+ plays'}
          {' • '}
          {likeCount}
          {'+ likes'}
        </Text>
      </Stack>
    </Link>
  )
}

export default MusicCard
