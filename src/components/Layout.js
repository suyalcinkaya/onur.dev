import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// --- Components
import Footer from 'components/Footer'

const easing = [0.175, 0.85, 0.42, 0.96]

const vars = {
  exit: { y: 20, opacity: 0, transition: { duration: 0.3, ease: easing } },
  enter: { y: 0, opacity: 1, transition: { duration: 0.3, ease: easing } }
}

const Layout = ({ children, ...others }) => (
  <Box
    as="main"
    mx="auto"
    pl="env(safe-area-inset-left)"
    pr="env(safe-area-inset-right)"
    my={{ base: 10, sm: 12 }}
    maxWidth={768}
    overflow="hidden"
    {...others}
  >
    <motion.div initial="exit" animate="enter" exit="exit" variants={vars}>
      <Box px={{ base: 4, sm: 6, md: 10 }}>
        {children}
        <Footer />
      </Box>
    </motion.div>
  </Box>
)

export default Layout
