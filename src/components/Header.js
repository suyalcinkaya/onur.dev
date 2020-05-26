import Link from 'next/link'

// --- Components
import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Text from 'components/Text'
import { Moon, Sun } from 'components/icons'

// --- Others
import useColorMode from 'hooks/useColorMode'

const Header = () => {
  const navigation = [
    {
      url: '/blog',
      name: 'Blog'
    },
    {
      url: '/about',
      name: 'About'
    },
    {
      url: '/',
      name: 'Home'
    }
  ]

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 2px"
        height={80}
        width="100%"
        bg={colorMode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(23, 25, 35, 0.8)'}
        css={{
          backdropFilter: 'saturate(180%) blur(20px)'
        }}
      >
        <Flex justifyContent="space-between" alignItems="center" height="100%" maxWidth={800} m="0 auto" px="1.5rem">
          <Box>
            <Text
              fontFamily="display"
              fontSize={{ _: 24, md: 26 }}
              fontWeight={600}
              // color="#000"
              letterSpacing="-0.025em"
            >
              {'O'}
            </Text>
          </Box>
          <Box>
            {navigation.map((nav, navIndex) => (
              <React.Fragment key={`nav_${navIndex}`}>
                <Link href={nav.url} passHref>
                  <Button as="a" type="button">
                    {nav.name}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
            <Button px={0} onClick={toggleColorMode}>
              <Box as={colorMode === 'light' ? Moon : Sun} width={18} />
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box height={80} />
    </>
  )
}

export default Header
