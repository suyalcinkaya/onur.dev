'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import cx from '@/lib/cx'

export const NavigationLink = ({ href, label, icon }) => {
  const pathname = usePathname()
  const splittedPathname = pathname.split('/')
  console.log('splittedPathname', splittedPathname)
  const currentPathname = splittedPathname[1]
  console.log('currentPathname', currentPathname)
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
}
