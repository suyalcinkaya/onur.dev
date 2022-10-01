import { AnimatePresence, motion } from 'framer-motion'

const PageLayout = ({ router, children, ...rest }) => {
  const {
    pathname,
    query: { slug }
  } = router

  return (
    <main className="flex min-h-screen pb-16 pt-32 overflow-hidden px-safe" {...rest}>
      <div className="px-4 md:px-16 mx-auto w-full max-w-screen-md">
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          // because router.push(...) doesn't scroll to top
          onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            key={slug ? `${pathname}/${slug}` : pathname}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="h-full"
            // transition={{ duration: 0.3, ease: [0.175, 0.85, 0.42, 0.96] }}
          >
            <>{children}</>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}

export default PageLayout
