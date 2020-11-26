import { Fragment } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Button, Flex, Stack } from '@chakra-ui/react'

// --- Others
import { HEADER_HEIGHT, navigations } from 'utils/constants'

const Header = () => {
  return (
    <Fragment>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        height={HEADER_HEIGHT}
        width="100%"
        bg="hsla(0, 0%, 100%, 0.8)"
        style={{ backdropFilter: 'saturate(180%) blur(5px)', WebkitBackdropFilter: 'saturate(180%) blur(5px)' }}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          height="100%"
          m="0 auto"
          px={{ base: 6, md: 8, lg: 12 }}
          ml={-4}
        >
          <NextLink href="/">
            <a aria-label="onur.dev Logo">
              <Box boxSize={{ base: 16, md: 20 }}>
                <Image src="/images/optimized-me.png" alt="onur.dev Logo" width={80} height={80} />
              </Box>
            </a>
          </NextLink>
          <Stack isInline spacing={1}>
            <Button
              as="a"
              href="https://ko-fi.com/suyalcinkaya"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              leftIcon={
                <span role="img" aria-label="Donate">
                  ☕️
                </span>
              }
              fontWeight="medium"
              px={{ base: '0.475rem', md: '1.125rem' }}
            >
              Donate
            </Button>
            {navigations.map((nav, navIndex) => (
              <Fragment key={`nav_${navIndex}`}>
                <NextLink href={nav.url} passHref>
                  <Button as="a" variant="ghost" fontWeight="medium" px={{ base: 1, md: 4 }}>
                    {nav.name}
                  </Button>
                </NextLink>
              </Fragment>
            ))}
          </Stack>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </Fragment>
  )
}

export default Header
