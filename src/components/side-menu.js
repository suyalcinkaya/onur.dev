'use client'

import { useRouter, usePathname } from 'next/navigation'
import { RadioIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { Button } from '@/components/ui/button.jsx'
import { SubmitBookmarkDialog } from '@/components/submit-bookmark/dialog'
import { useKeyPress } from '@/hooks/useKeyPress'
import { cn } from '@/lib/utils'

const keyCodePathnameMapping = {
  Digit1: '/',
  Digit2: '/writing',
  Digit3: '/journey',
  Digit4: '/stack',
  Digit5: '/workspace',
  Digit6: '/bookmarks'
}

export const SideMenu = ({ children, title, bookmarks = [], isInner }) => {
  const router = useRouter()
  const pathname = usePathname()
  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping))

  function onKeyPress(event) {
    const key = event.code
    const targetPathname = keyCodePathnameMapping[key]
    if (targetPathname && targetPathname !== pathname) router.push(targetPathname)
  }

  const isWritingPath = pathname.startsWith('/writing')
  const isBookmarksPath = pathname.startsWith('/bookmarks')
  const currentBookmark = bookmarks.find((bookmark) => `/bookmarks/${bookmark.slug}` === pathname)

  return (
    <ScrollArea
      className={cn(
        'hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r',
        isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72'
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-tight">{title}</span>
            <div className="flex items-center gap-2">
              {(isWritingPath || isBookmarksPath) && (
                <Button variant="outline" size="xs" asChild>
                  <a
                    href={isWritingPath ? '/writing.xml' : '/bookmarks.xml'}
                    title="RSS feed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RadioIcon size={16} className="mr-2" />
                    RSS feed
                  </a>
                </Button>
              )}
              {isBookmarksPath && <SubmitBookmarkDialog bookmarks={bookmarks} currentBookmark={currentBookmark} />}
            </div>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  )
}
