'use client'

import throttle from 'lodash.throttle'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { LuArrowLeft as ArrowLeftIcon, LuRadio as RadioIcon } from 'react-icons/lu'
import Balancer from 'react-wrap-balancer'

import { LoadingSpinner } from '@/components/loading-spinner'
import { Button } from '@/components/ui/button'

const THROTTLE_DELAY = 16 // 60fps
const BALANCER_RATIO = 0.35
const SCROLL_TRANSLATE_BASE = 100
const SCROLL_OPACITY_DIVISOR = 100

const MobileDrawer = dynamic(() => import('@/components/mobile-drawer').then((mod) => mod.MobileDrawer))
const SubmitBookmarkDrawer = dynamic(
  () => import('@/components/submit-bookmark/drawer').then((mod) => mod.SubmitBookmarkDrawer),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
)
import { MOBILE_SCROLL_THRESHOLD, SCROLL_AREA_ID } from '@/lib/constants'

const calculateOpacity = (scrollY) => {
  return Math.min(
    Math.max(
      (
        (scrollY - MOBILE_SCROLL_THRESHOLD * (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / SCROLL_OPACITY_DIVISOR))) /
        SCROLL_OPACITY_DIVISOR
      ).toFixed(2),
      0
    ),
    1
  )
}

export const FloatingHeader = memo(({ scrollTitle, title, goBackLink, bookmarks, currentBookmark, children }) => {
  const [transformValues, setTransformValues] = useState({ translateY: 0, opacity: scrollTitle ? 0 : 1 })
  const pathname = usePathname()
  const isWritingIndexPage = pathname === '/writing'
  const isWritingPath = pathname.startsWith('/writing')
  const isBookmarksIndexPage = pathname === '/bookmarks'
  const isBookmarkPath = pathname.startsWith('/bookmarks')

  const memoizedMobileDrawer = useMemo(() => <MobileDrawer />, [])

  const onScroll = useCallback((e) => {
    const scrollY = e.target.scrollTop
    const translateY = Math.max(SCROLL_TRANSLATE_BASE - scrollY, 0)
    const opacity = calculateOpacity(scrollY)
    setTransformValues({ translateY, opacity })
  }, [])

  const throttledOnScroll = useMemo(() => throttle(onScroll, THROTTLE_DELAY), [onScroll])

  useEffect(() => {
    const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`)

    if (scrollTitle) {
      scrollAreaElem?.addEventListener('scroll', throttledOnScroll, {
        passive: true
      })
    }
    return () => {
      scrollAreaElem?.removeEventListener('scroll', throttledOnScroll)
      throttledOnScroll.cancel() // Clean up throttle
    }
  }, [scrollTitle, throttledOnScroll])

  const memoizedSubmitBookmarkDrawer = useMemo(
    () => <SubmitBookmarkDrawer bookmarks={bookmarks} currentBookmark={currentBookmark} />,
    [bookmarks, currentBookmark]
  )

  const memoizedBalancer = useMemo(
    () => (
      <Balancer ratio={BALANCER_RATIO}>
        <span className="line-clamp-2 font-semibold tracking-tight">{title}</span>
      </Balancer>
    ),
    [title]
  )

  return (
    <header
      className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden"
      role="banner"
    >
      <div className="flex size-full items-center px-3">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-1">
            {goBackLink ? (
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <NextLink href={goBackLink} title="Go back">
                  <ArrowLeftIcon size={16} />
                </NextLink>
              </Button>
            ) : (
              memoizedMobileDrawer
            )}
            <div className="flex flex-1 items-center justify-between">
              {scrollTitle && (
                <span
                  className="line-clamp-2 font-semibold tracking-tight"
                  style={{
                    transform: `translateY(${transformValues.translateY}%)`,
                    opacity: transformValues.opacity
                  }}
                >
                  {scrollTitle}
                </span>
              )}
              {title && memoizedBalancer}
              <div className="flex items-center gap-2">
                {(isWritingIndexPage || isBookmarksIndexPage) && (
                  <Button variant="outline" size="xs" asChild>
                    <a
                      href={isWritingIndexPage ? '/writing.xml' : '/bookmarks.xml'}
                      title="RSS feed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RadioIcon size={16} className="mr-2" />
                      RSS feed
                    </a>
                  </Button>
                )}
                {isBookmarkPath && memoizedSubmitBookmarkDrawer}
              </div>
            </div>
          </div>
          {/* This is a hack to show writing views with framer motion reveal effect */}
          {scrollTitle && isWritingPath && <div className="flex min-w-[50px] justify-end">{children}</div>}
        </div>
      </div>
    </header>
  )
})
FloatingHeader.displayName = 'FloatingHeader'
