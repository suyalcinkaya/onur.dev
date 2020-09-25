import { Box, Flex, Text } from '@chakra-ui/core'

// --- Others
import { profiles } from 'constant'

const Footer = () => (
  <Flex flexDir={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" my={12}>
    <Flex justifyContent="center" alignItems="center" ml={{ md: -3 }} mb={{ base: 2, md: 0 }}>
      {profiles.map((profile, profileIndex) => (
        <Box
          as="a"
          key={`profile_${profileIndex}_${profile.name}`}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          title={profile.name}
          aria-label={profile.name}
          color="gray.700"
          px={1}
        >
          {profile.icon}
        </Box>
      ))}
    </Flex>
    <Box fontSize="sm">
      <Text as="span">onur</Text>
      <Text as="span" color="gray.500">{' dot '}</Text>
      <Text as="span">suyalcinkaya</Text>
      <Text as="span" color="gray.500">{' at '}</Text>
      <Text as="span">gmail</Text>
      <Text as="span" color="gray.500">{' dot '}</Text>
      <Text as="span">com</Text>
    </Box>
  </Flex>
)

export default Footer
