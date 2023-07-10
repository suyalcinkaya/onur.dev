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
      className={cx('flex flex-col gap-1 rounded-lg p-2', isActive ? 'bg-black text-white' : 'hover:bg-gray-200')}
    >
      <span className="font-medium">{title}</span>
      {description && <span className={cx(isActive ? 'text-slate-400' : 'text-slate-500')}>{description} items</span>}
    </Link>
  )
}
