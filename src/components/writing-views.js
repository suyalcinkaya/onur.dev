'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useViewData } from '@/hooks/useViewData'
import { viewCountFormatter } from '@/lib/utils'

export const WritingViews = ({ slug }) => {
  const viewData = useViewData(slug)
  const { view_count } = viewData?.[0] ?? {}
  if (!view_count) return <m.span key={`${slug}-views-loading`} />
  const formattedViewCount = viewCountFormatter.format(view_count)

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key={`${slug}-views-loaded`}
        className="flex items-center text-sm"
        title={`${formattedViewCount} ${formattedViewCount === 1 ? 'view' : 'views'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
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
        <span>{formattedViewCount}</span>
      </m.div>
    </LazyMotion>
  )
}
