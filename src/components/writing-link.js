'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { cn, getDateTimeFormat } from '@/lib/utils'

export const WritingLink = ({ post, viewCount, isMobile }) => {
  const pathname = usePathname()
  const isActive = pathname === `/writing/${post.slug}`
  const date = post.date || post.sys.firstPublishedAt
  const formattedDate = getDateTimeFormat(date)

  return (
    <LazyMotion features={domAnimation}>
      <Link
        key={post.slug}
        href={`/writing/${post.slug}`}
        className={cn(
          'flex flex-col gap-1',
          !isMobile && isActive ? 'bg-black text-white' : 'hover:bg-gray-200',
          isMobile ? 'border-b px-4 py-3 text-sm hover:bg-gray-100' : 'rounded-lg p-2'
        )}
      >
        <span className="font-medium">{post.title}</span>
        <span className={cn(isActive ? 'text-slate-400' : 'text-slate-500')}>
          <span>{formattedDate}</span>{' '}
          <span>
            {viewCount ? (
              <m.span
                key={`${post.slug}-views-loaded`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                &middot; {viewCount} {viewCount === 1 ? 'view' : 'views'}
              </m.span>
            ) : (
              <m.span key={`${post.slug}-views-loading`} />
            )}
          </span>
        </span>
      </Link>
    </LazyMotion>
  )
}
