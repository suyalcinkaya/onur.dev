import NextLink from 'next/link'
import { Box, Button, Flex, Grid, IconButton, Text } from '@chakra-ui/react'

// --- Others
import { BUY_ME_COFFEE_URL, profiles, MAX_WIDTH, footerNavigations } from 'utils/constants'

const Footer = () => (
  <Box as="footer" bg="black" color="white" mt={{ base: 12, md: 16 }} py={12}>
    <Box maxW={MAX_WIDTH} mx="auto" px={{ base: 4, sm: 6, md: 16 }}>
      <Grid
        templateColumns={{ md: 'repeat(3, 1fr)' }}
        templateRows={{ md: 'repeat(3, 1fr)' }}
        autoFlow={{ md: 'column' }}
        gap={6}
      >
        {footerNavigations.map((footerNav, footerNavIndex) => (
          <NextLink key={`footerNav_${footerNavIndex}`} href={footerNav.url} passHref>
            <Button as="a" variant="link" justifyContent="flex-start" color="inherit" w="fit-content">
              {footerNav.name}
            </Button>
          </NextLink>
        ))}
        <Button
          as="a"
          href={BUY_ME_COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          justifyContent="flex-start"
          color="inherit"
          w="fit-content"
        >
          Buy me a coffee
        </Button>
        <Button
          variant="link"
          justifyContent="flex-start"
          color="inherit"
          w="fit-content"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Scroll to top &uarr;
        </Button>
      </Grid>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        mt={8}
        mx={{ md: -1 }}
      >
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
              _hover={{ color: 'gray.400' }}
            >
              {profile.icon}
            </IconButton>
          ))}
        </Flex>
        <div>
          <strong>onur</strong>
          <Text as="span" color="gray.400">
            {' dot '}
          </Text>
          <strong>suyalcinkaya</strong>
          <Text as="span" color="gray.400">
            {' at '}
          </Text>
          <strong>gmail</strong>
          <Text as="span" color="gray.400">
            {' dot '}
          </Text>
          <strong>com</strong>
        </div>
      </Flex>
    </Box>
  </Box>
)

export default Footer
