import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'

// --- Others
import { LAYOUT_WIDTH } from 'lib/constants'

const PageLayout = ({ children, ...rest }) => {
  const uniqueId = uuid()

  return (
    <main
      className="flex-1 py-16 overflow-hidden"
      style={{ paddingLeft: 'env(safe-area-inset-left)', paddingRight: 'env(safe-area-inset-right)' }}
      {...rest}
    >
      <div className="px-4 md:px-16 mx-auto" style={{ maxWidth: LAYOUT_WIDTH }}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={uniqueId}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.175, 0.85, 0.42, 0.96] }}
          >
            <>{children}</>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}

export default PageLayout
