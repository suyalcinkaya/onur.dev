import { Fragment } from 'react'
import NextLink from 'next/link'
import { Box, Flex } from '@chakra-ui/react'

// --- Components
import { Me } from 'components/icons'

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
        <Flex justify="space-between" alignItems="center" height="100%" m="0 auto" px={{ base: 6, md: 8, lg: 12 }}>
          <NextLink href="/">
            <a aria-label="onur.dev Logo">
              <Box as={Me} boxSize={{ base: 12, md: 14 }} />
            </a>
          </NextLink>
          <Flex>
            {navigations.map((nav, navIndex) => (
              <Fragment key={`nav_${navIndex}`}>
                <NextLink href={nav.url} passHref>
                  <Box as="a" px={{ base: '0.475rem', md: '1.125rem' }} fontWeight="medium">
                    {nav.name}
                  </Box>
                </NextLink>
              </Fragment>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </Fragment>
  )
}

export default Header
