import { Box, Flex, Text } from '@chakra-ui/core'

// --- Others
import { profiles } from 'utils/constants'

const Footer = () => (
  <Flex flexDir={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" mt={16} mb={12}>
    <Flex justifyContent="center" alignItems="center" ml={{ md: -1 }} mb={{ base: 2, md: 0 }}>
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
      <Text as="span" fontWeight="bold">onur</Text>
      <Text as="span" color="gray.600">{' dot '}</Text>
      <Text as="span" fontWeight="bold">suyalcinkaya</Text>
      <Text as="span" color="gray.600">{' at '}</Text>
      <Text as="span" fontWeight="bold">gmail</Text>
      <Text as="span" color="gray.600">{' dot '}</Text>
      <Text as="span" fontWeight="bold">com</Text>
    </Box>
  </Flex>
)

export default Footer
