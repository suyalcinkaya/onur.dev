'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { cn, getDateTimeFormat, viewCountFormatter } from '@/lib/utils'

export const WritingLink = ({ post, viewCount, isMobile }) => {
  const pathname = usePathname()
  const isActive = pathname === `/writing/${post.slug}`
  const date = post.date || post.sys.firstPublishedAt
  const formattedDate = getDateTimeFormat(date)
  const formattedViewCount = viewCount ? viewCountFormatter.format(viewCount) : null

  return (
    <LazyMotion features={domAnimation}>
      <Link
        key={post.slug}
        href={`/writing/${post.slug}`}
        className={cn(
          'flex flex-col gap-1 transition-colors duration-300',
          !isMobile && isActive ? 'bg-black text-white' : 'hover:bg-gray-200',
          isMobile ? 'border-b px-4 py-3 text-sm hover:bg-gray-100' : 'rounded-lg p-2'
        )}
      >
        <span className="font-medium">{post.title}</span>
        <span className={cn('transition-colors duration-300', isActive ? 'text-slate-400' : 'text-slate-500')}>
          <span>{formattedDate}</span>{' '}
          <span>
            {formattedViewCount ? (
              <m.span
                key={`${post.slug}-views-loaded`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                &middot; {formattedViewCount} {formattedViewCount === 1 ? 'view' : 'views'}
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
