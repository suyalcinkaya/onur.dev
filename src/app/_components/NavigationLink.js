'use client'

import { memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'

import cx from '@/lib/cx'

export const NavigationLink = memo(({ href, label, icon }) => {
  const pathname = usePathname()

  const isInternal = href.startsWith('/')
  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
      >
        <span className="inline-flex items-center gap-2 font-medium">
          {icon} {label}
        </span>
        <ArrowUpRight size={16} />
      </a>
    )
  }

  const splittedPathname = pathname.split('/')
  const currentPathname = splittedPathname[1]
  const isActive = currentPathname === href.split('/')[1]

  return (
    <Link
      key={href}
      href={href}
      className={cx('flex items-center gap-2 rounded-lg p-2', isActive ? 'bg-black text-white' : 'hover:bg-gray-200')}
    >
      {icon}
      <span className={cx('font-medium', isActive && 'text-white')}>{label}</span>
    </Link>
  )
})
