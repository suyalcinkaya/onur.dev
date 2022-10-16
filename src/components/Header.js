import { memo } from 'react'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { useScrollData } from 'scroll-data-hook'

import { GhostButton } from '@/components/Button'
const DynamicLikeButton = dynamic(() => import('@/components/LikeButton'))
import { useContextProvider } from '@/components/providers/ContextProvider'
import { NAVIGATIONS, SCROLL_THRESHOLD } from '@/lib/constants'

const Header = memo(({ headerTitle = null, pathname, slug }) => {
  const {
    position: { y: scrollY }
  } = useScrollData()
  const { setIsSidebarOpen } = useContextProvider()
  const isWritingSlug = slug && pathname === '/writing/[slug]'

  const translateY = Math.max(110 - scrollY, 0)
  const opacity = Math.min(
    Math.max(((scrollY - SCROLL_THRESHOLD * (SCROLL_THRESHOLD / (scrollY ** 2 / 100))) / 100).toFixed(2), 0),
    1
  )

  return (
    <header className="fixed top-0 inset-x-0 z-10 w-full h-12 bg-white mx-auto md:border-b md:border-gray-200 shadow-sm">
      <div className="flex items-center h-full max-w-screen-md shadow md:shadow-none md:mx-auto py-1 px-3 md:px-16">
        {isWritingSlug ? (
          <div className="flex items-center justify-between gap-x-2 w-full">
            <div className="flex items-center gap-x-3 w-full">
              <GhostButton
                as={NextLink}
                href="/writing"
                title="Back to Writing"
                className="px-2 py-2 md:px-2 md:py-2 hover:bg-gray-100"
              >
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </GhostButton>
              {headerTitle && (
                <span
                  className="text-sm font-bold line-clamp-1"
                  style={{ transform: `translateY(${translateY}%)`, opacity }}
                >
                  {headerTitle}
                </span>
              )}
            </div>
            <DynamicLikeButton slug={slug} />
          </div>
        ) : (
          <div className="flex items-center gap-x-3">
            <GhostButton
              as="button"
              title="Open Sidebar"
              className="md:hidden px-2 py-2 md:px-2 md:py-2 hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </GhostButton>
            {headerTitle && (
              <span
                className="text-sm font-bold line-clamp-1 md:hidden"
                style={{ transform: `translateY(${translateY}%)`, opacity }}
              >
                {headerTitle}
              </span>
            )}
            <div className="hidden md:flex items-center gap-x-1">
              {NAVIGATIONS.header.map((headerNav) => {
                const { title, url } = headerNav
                const isActive = (slug ? `/${slug}` : pathname) === url

                return (
                  <GhostButton
                    key={`headerNav_${url}`}
                    as={NextLink}
                    href={url}
                    className={isActive ? 'bg-gray-100' : 'hover:bg-gray-100'}
                  >
                    {title}
                  </GhostButton>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
