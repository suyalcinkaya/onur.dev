import NextLink from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/core'

// --- Components
import Button from 'components/Button'

// --- Others
import { HEADER_HEIGHT, navigations } from 'constant'

const Header = () => {
  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        height={HEADER_HEIGHT}
        width="100%"
        bg="hsla(0, 0%, 100%, 0.8)"
        css={{
          backdropFilter: 'saturate(180%) blur(5px)'
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          maxWidth="800px"
          m="0 auto"
          px={{ base: 6, sm: 0 }}
        >
          <Box>
            <NextLink href="/">
              <a aria-label="onur.dev Logo">
                <Text fontFamily="heading" fontSize="2xl">
                  onur
                </Text>
              </a>
            </NextLink>
          </Box>
          <Box>
            {navigations.map((nav, navIndex) => (
              <React.Fragment key={`nav_${navIndex}`}>
                <NextLink href={nav.url} passHref>
                  <Button as="a" type="button">
                    {nav.name}
                  </Button>
                </NextLink>
              </React.Fragment>
            ))}
          </Box>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default Header
