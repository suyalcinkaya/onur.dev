'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const PageLayout = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <main className="flex max-h-dynamic-screen min-h-dynamic-screen flex-1 overflow-y-auto pb-24 pt-36">
      <AnimatePresence
        mode="wait"
        initial={false}
        // because router.push(...) doesn't scroll to top
        // onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <>
          <motion.div
            key={pathname}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        </>
      </AnimatePresence>
    </main>
  )
}

export default PageLayout
