'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
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

export const SideMenu = ({ children, title, href, bookmarkCollections, isInner }) => {
  const router = useRouter()
  const pathname = usePathname()
  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping))

  function onKeyPress(event) {
    const key = event.code
    const targetPathname = keyCodePathnameMapping[key]
    if (targetPathname && targetPathname !== pathname) router.push(targetPathname)
  }

  const isWritingHref = href === '/writing'
  const isBookmarksHref = href === '/bookmarks'

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
            <div className="text-sm font-semibold tracking-tight">
              {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
            </div>
            <div className="flex items-center gap-2">
              {(isWritingHref || isBookmarksHref) && (
                <Button variant="outline" size="xs" asChild>
                  <a
                    href={isWritingHref ? '/writing.xml' : '/bookmarks.xml'}
                    title="RSS feed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RadioIcon size={16} className="mr-2" />
                    RSS feed
                  </a>
                </Button>
              )}
              {isBookmarksHref && <SubmitBookmarkDialog bookmarkCollections={bookmarkCollections} />}
            </div>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  )
}
