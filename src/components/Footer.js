import { Fragment } from 'react'
import { Box, Button, Divider, Flex, Heading, IconButton, Text, Stack } from '@chakra-ui/react'

// --- Icons
import External from 'components/icons/External'

// --- Others
import { BUY_ME_COFFEE_URL, profiles } from 'utils/constants'

const Footer = () => (
  <Fragment>
    <Divider my={12} />
    <Stack as="section" spacing={6}>
      <Heading as="h3" size="md">
        If you find there's any value in what I do and feel generous to want to help, you can support directly.
      </Heading>
      <Button
        as="a"
        href={BUY_ME_COFFEE_URL}
        target="_blank"
        rel="noopener noreferrer"
        leftIcon={
          <span role="img" aria-label="coffee">
            ☕️
          </span>
        }
        variant="solid"
      >
        <Box pos="relative">
          Buy me a coffee
          <Box pos="absolute" top={0} right={-5}>
            <External height={14} width={14} />
          </Box>
        </Box>{' '}
        &nbsp;
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
