import Box from 'components/Box'

const Layout = ({ children, ...others }) => (
  <Box as="main" mt={{ _: 30, md: 50 }} mx="auto" maxWidth={700} w="100%" px="1.5rem" {...others}>
    {children}
  </Box>
)

export default Layout
