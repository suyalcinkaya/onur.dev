// --- Components
import Box from 'components/Box'
import Footer from 'components/Footer'

const Layout = ({ children, ...others }) => (
  <Box as="main" mt={{ _: 30, md: 50 }} mx="auto" maxWidth={700} w="100%" px="1.5rem" {...others}>
    <Box m="0 auto 4rem auto">{children}</Box>
    <Footer />
  </Box>
)

export default Layout
