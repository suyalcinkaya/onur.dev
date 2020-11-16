import { Flex, IconButton, Text } from '@chakra-ui/react'

// --- Others
import { profiles } from 'utils/constants'

const Footer = () => (
  <Flex
    flexDir={{ base: 'column', md: 'row' }}
    alignItems="center"
    justifyContent="space-between"
    my={{ base: 8, md: 12 }}
  >
    <Flex justifyContent="center" alignItems="center" ml={{ md: -1 }} mb={{ base: 2, md: 0 }}>
      {profiles.map((profile, profileIndex) => (
        <IconButton
          as="a"
          key={`profile_${profileIndex}_${profile.name}`}
          href={profile.url}
          target="_blank"
          bg="transparent"
          rel="noopener noreferrer"
          title={profile.name}
          aria-label={profile.name}
          px={1}
          mr={{ base: 2, md: 1 }}
        >
          {profile.icon}
        </IconButton>
      ))}
    </Flex>
    <div>
      <strong>onur</strong>
      <Text as="span" color="gray.600">
        {' dot '}
      </Text>
      <strong>suyalcinkaya</strong>
      <Text as="span" color="gray.600">
        {' at '}
      </Text>
      <strong>gmail</strong>
      <Text as="span" color="gray.600">
        {' dot '}
      </Text>
      <strong>com</strong>
    </div>
  </Flex>
)

export default Footer
