import useSWR from 'swr'
import { AnimatePresence, motion } from 'framer-motion'

import { fetcher } from '@/lib/utils'

const Views = ({ slug }) => {
  const { data, error } = useSWR(`/api/handleViews?slug=${slug}`, fetcher)
  if (error) return null

  /* if (!data) {
    return (
      <div role="status" className="w-14 h-4 rounded-lg motion-safe:animate-pulse bg-slate-200">
        <span className="sr-only">Loading</span>
      </div>
    )
  } */

  return (
    <AnimatePresence mode="wait">
      {!data ? (
        <motion.span key="loading" />
      ) : (
        <motion.div
          key="loaded"
          className="flex items-center gap-1 text-sm"
          title={`${data.views} views`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
            ></path>
            <circle
              cx="12"
              cy="12"
              r="2.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></circle>
          </svg>
          <span>{data.views}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Views
