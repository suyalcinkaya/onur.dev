import { Box } from '@chakra-ui/core'
import { motion } from 'framer-motion'

// --- Components
import Footer from 'components/Footer'

const easing = [0.175, 0.85, 0.42, 0.96]

const vars = {
  exit: { y: 20, opacity: 0, transition: { duration: 0.3, ease: easing } },
  enter: { y: 0, opacity: 1, transition: { duration: 0.3, ease: easing } }
}

const Layout = ({ children, ...others }) => (
  <Box mx="auto" px={6} my={{ base: 10, sm: 12 }} maxWidth={{ md: 640 }} {...others}>
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={vars}>
        <Box>{children}</Box>
        <Footer />
      </motion.div>
    </motion.div>
  </Box>
)

export default Layout
