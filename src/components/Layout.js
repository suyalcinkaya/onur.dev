import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// --- Others
import { MAX_WIDTH } from 'utils/constants'

const easing = [0.175, 0.85, 0.42, 0.96]

const vars = {
  exit: { y: 10, opacity: 0, transition: { duration: 0.25, ease: easing } },
  enter: { y: 0, opacity: 1, transition: { duration: 0.25, ease: easing } }
}

const Layout = ({ children, ...others }) => (
  <Box
    as="main"
    pl="env(safe-area-inset-left)"
    pr="env(safe-area-inset-right)"
    mt={{ base: 12, md: 20 }}
    overflow="hidden"
    {...others}
  >
    <motion.div initial="exit" animate="enter" exit="exit" variants={vars}>
      <Box px={{ base: 4, sm: 6, md: 16 }} maxW={MAX_WIDTH} mx="auto">
        {children}
      </Box>
    </motion.div>
  </Box>
)

export default Layout
