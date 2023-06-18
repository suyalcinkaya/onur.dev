'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import cx from '@/lib/cx'
import { getDateTimeFormat } from '@/lib/utils'

export const WritingLink = ({ post }) => {
  const pathname = usePathname()

  const isActive = pathname === `/writing/${post.slug}`
  const date = getDateTimeFormat(post.date)

  return (
    <Link
      key={post.slug}
      href={`/writing/${post.slug}`}
      className={cx('flex flex-col gap-1 rounded-lg p-2', isActive ? 'bg-black text-white' : 'hover:bg-gray-200')}
    >
      <span className="font-medium">{post.title}</span>
      <span className={cx(isActive ? 'text-slate-400' : 'text-slate-500')}>{date}</span>
    </Link>
  )
}
