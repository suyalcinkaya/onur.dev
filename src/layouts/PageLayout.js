'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const PageLayout = ({ children, ...rest }) => {
  const pathname = usePathname()

  return (
    <main className="flex min-h-screen py-32 overflow-hidden px-safe">
      <AnimatePresence
        mode="wait"
        initial={false}
        // because router.push(...) doesn't scroll to top
        onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        {...rest}
      >
        <>
          <motion.div
            key={pathname}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            className="h-full w-full"
            // transition={{ duration: 0.3 }}
            // transition={{ duration: 0.3, ease: [0.175, 0.85, 0.42, 0.96] }}
          >
            <>{children}</>
          </motion.div>
        </>
      </AnimatePresence>
    </main>
  )
}

export default PageLayout
