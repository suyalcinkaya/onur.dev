import { motion } from 'framer-motion'

// --- Components
import Box from 'components/Box'
import Footer from 'components/Footer'

const easing = [0.175, 0.85, 0.42, 0.96]

const vars = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5, ease: easing } }
}

const Layout = ({ children, ...others }) => (
  <Box as="main" mt={{ _: 60, md: 80 }} mx="auto" maxWidth={700} w="100%" px="2rem" {...others}>
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={vars}>
        <Box m="0 auto 4rem auto">{children}</Box>
        <Footer />
      </motion.div>
    </motion.div>
  </Box>
)

export default Layout
