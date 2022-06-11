import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'

// --- Others
import { LAYOUT_WIDTH } from 'lib/constants'

const transition = {
  duration: 0.2,
  ease: [0.175, 0.85, 0.42, 0.96]
}

const PageLayout = ({ children, ...rest }) => {
  const uniqueId = uuid()

  return (
    <main
      className="flex-1 py-12 md:py-16 overflow-hidden"
      style={{ paddingLeft: 'env(safe-area-inset-left)', paddingRight: 'env(safe-area-inset-right)' }}
      {...rest}
    >
      <div className="py-4 px-4 sm:px-6 md:px-16 mx-auto overflow-hidden" style={{ maxWidth: LAYOUT_WIDTH }}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={uniqueId}
            initial="enter"
            animate="enter"
            exit="exit"
            variants={{
              exit: { y: 10, opacity: 0, transition },
              enter: { y: 0, opacity: 1, transition }
            }}
          >
            <>{children}</>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}

export default PageLayout
