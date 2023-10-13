'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import supabase from '@/lib/supabase/public'
import { SUPABASE_TABLE_NAME } from '@/lib/constants'

export const WritingViews = ({ slug }) => {
  const [viewCount, setViewCount] = useState(null)

  useEffect(() => {
    const getViews = async () => {
      const { data, error } = await supabase.from(SUPABASE_TABLE_NAME).select('view_count').eq('slug', slug)
      if (error) console.info(error)
      else setViewCount(data[0]?.view_count ?? 0)
    }

    getViews()
  }, [slug])

  useEffect(() => {
    const channel = supabase
      .channel('supabase_realtime')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: SUPABASE_TABLE_NAME,
          filter: `slug=eq.${slug}`
        },
        (payload) => {
          if (payload.new.slug === slug) {
            setViewCount(payload.new.view_count)
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [slug])

  if (!viewCount) return <motion.span key={`${slug}-views-loading`} />

  return (
    <motion.div
      key={`${slug}-views-loaded`}
      className="flex items-center gap-1 text-sm"
      title={`${viewCount} ${viewCount === 1 ? 'view' : 'views'}`}
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
      <span>{viewCount}</span>
    </motion.div>
  )
}
