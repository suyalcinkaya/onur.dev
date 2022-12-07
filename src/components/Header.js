import { memo } from 'react'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { useScrollData } from 'scroll-data-hook'

const DynamicViews = dynamic(() => import('@/components/Views'))
import { SCROLL_THRESHOLD } from '@/lib/constants'

const Header = memo(({ headerTitle = null, pathname, slug, router }) => {
  const {
    position: { y: scrollY }
  } = useScrollData()
  const isWritingSlug = slug && pathname === '/writing/[slug]'

  const translateY = Math.max(110 - scrollY, 0)
  const opacity = Math.min(
    Math.max(((scrollY - SCROLL_THRESHOLD * (SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100).toFixed(2), 0),
    1
  )

  return (
    <header className="fixed top-0 inset-x-0 z-10 w-full h-12 bg-white mx-auto md:border-b md:border-gray-200 shadow-sm">
      <div className="flex items-center h-full content shadow md:shadow-none">
        {isWritingSlug ? (
          <div className="flex items-center justify-between gap-x-2 w-full">
            <div className="flex items-center gap-x-3">
              <NextLink href="/" title="Go back">
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NextLink>
              {headerTitle && (
                <span
                  className="text-sm font-bold line-clamp-1"
                  style={{ transform: `translateY(${translateY}%)`, opacity }}
                >
                  {headerTitle}
                </span>
              )}
            </div>
            <DynamicViews slug={slug} />
          </div>
        ) : (
          <div className="flex items-center justify-between w-full gap-x-1">
            <NextLink href="/" className="font-medium">
              Onur Şuyalçınkaya
            </NextLink>
            <div className="flex gap-4 md:gap-6 text-gray-500">
              <NextLink href="/about">About</NextLink>
              <NextLink href="/journey">Journey</NextLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
