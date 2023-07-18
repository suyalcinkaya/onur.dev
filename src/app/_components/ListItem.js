'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import cx from '@/lib/cx'

export const ListItem = ({ title, description, path }) => {
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <Link
      key={path}
      href={path}
      className={cx('flex flex-col gap-1 rounded-lg p-2', isActive ? 'bg-black' : 'hover:bg-gray-200')}
    >
      <span className={cx('font-medium', isActive && 'text-white')}>{title}</span>
      {description && <span className={cx(isActive ? 'text-slate-300' : 'text-slate-500')}>{description}</span>}
    </Link>
  )
}
