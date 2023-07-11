'use client'

import { memo } from 'react'
import { useParams } from 'next/navigation'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import Balancer from 'react-wrap-balancer'
import { useScrollData } from 'scroll-data-hook'
import { ArrowLeftIcon } from 'lucide-react'

const DynamicViews = dynamic(() => import('@/app/_components/Views'))
import { SCROLL_THRESHOLD } from '@/lib/constants'

const FloatingHeader = ({ initialTitle, title, backLink = '/' }) => {
  const {
    position: { y: scrollY }
  } = useScrollData()

  const { slug } = useParams()

  const translateY = Math.max(130 - scrollY, 0)
  const opacity = Math.min(
    Math.max(((scrollY - SCROLL_THRESHOLD * (SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100).toFixed(4), 0),
    1
  )

  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto h-12 w-full border-b bg-white text-sm font-medium lg:hidden">
      <div className="flex h-full items-center px-3 lg:px-8">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <NextLink href={backLink} title="Go back" className="link-card block lg:hidden">
              <ArrowLeftIcon size={16} />
            </NextLink>
            {initialTitle && <span className="line-clamp-2 font-bold">{initialTitle}</span>}
            {title && (
              <Balancer ratio="0.35">
                <span className="line-clamp-2 font-bold" style={{ transform: `translateY(${translateY}%)`, opacity }}>
                  {title}
                </span>
              </Balancer>
            )}
          </div>
          <DynamicViews slug={slug} isWritingSlug />
        </div>
      </div>
    </header>
  )
}

export default memo(FloatingHeader)
