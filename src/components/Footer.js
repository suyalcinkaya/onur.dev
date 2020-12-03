import { Fragment } from 'react'
import { Button, Divider, Flex, Heading, IconButton, Text, Stack } from '@chakra-ui/react'

// --- Others
import { profiles } from 'utils/constants'

const Footer = () => (
  <Fragment>
    <Divider my={12} />
    <Stack as="section" spacing={6}>
      <Heading as="h3" size="md">
        If you find there's any value in what I do and feel generous to want to help, you can support directly.
      </Heading>
      <Button
        as="a"
        href="http://buymeacoff.ee/suyalcinkaya"
        target="_blank"
        rel="noopener noreferrer"
        leftIcon={
          <span role="img" aria-label="celebrate">
            ☕️
          </span>
        }
        colorScheme="blue"
      >
        {'Buy me a coffee →'}
      </Button>
    </Stack>
    <Divider my={12} />
    <Flex flexDir={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" mb={12}>
      <Flex justifyContent="center" alignItems="center" ml={{ md: -1 }} mb={{ base: 2, md: 0 }}>
        {profiles.map((profile, profileIndex) => (
          <IconButton
            key={`profile_${profileIndex}_${profile.name}`}
            as="a"
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={profile.name}
            title={profile.name}
            bg="transparent"
            px={1}
            mr={{ base: 2, md: 1 }}
          >
            {profile.icon}
          </IconButton>
        ))}
      </Flex>
      <div>
        <strong>onur</strong>
        <Text as="span" color="gray.500">
          {' dot '}
        </Text>
        <strong>suyalcinkaya</strong>
        <Text as="span" color="gray.500">
          {' at '}
        </Text>
        <strong>gmail</strong>
        <Text as="span" color="gray.500">
          {' dot '}
        </Text>
        <strong>com</strong>
      </div>
    </Flex>
  </Fragment>
)

export default Footer
