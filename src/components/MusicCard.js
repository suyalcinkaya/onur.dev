import { Heading, Stack, Text } from '@chakra-ui/react'

import Link from 'components/Link'

const MusicCard = (props) => {
  const { description, likeCount, playCount, title, url } = props

  return (
    <Stack spacing={2}>
      <Link href={url}>
        <Heading as="h3" fontSize="lg">
          {title} — {description}
        </Heading>
      </Link>
      <Text color="gray.500" lineHeight="shorter">
        {playCount}
        {'+ plays'}
        {' • '}
        {likeCount}
        {'+ likes'}
      </Text>
    </Stack>
  )
}

export default MusicCard
