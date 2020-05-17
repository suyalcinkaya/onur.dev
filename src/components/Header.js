import Link from 'next/link'

// --- Components
import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Text from 'components/Text'

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

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 2px"
        height={70}
        width="100%"
        bg="white"
      >
        <Flex justifyContent="space-between" alignItems="center" height="100%" maxWidth={800} m="0 auto" px="1.5rem">
          <Box>
            <Text fontSize={20} fontWeight={500} color="#000" letterSpacing="-0.02em">
              Onur
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
          </Box>
        </Flex>
      </Box>
      <Box height={70} />
    </>
  )
}

export default Header
