'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { RadioIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { Button } from '@/components/ui/button.jsx'
import { useKeyPress } from '@/hooks/useKeyPress'
import { cn } from '@/lib/utils'

export const SideMenu = ({ children, title, href, isInner }) => {
  const router = useRouter()
  useKeyPress(onKeyPress, ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6'])

  function onKeyPress(event) {
    event.preventDefault()

    if (event.code === 'Digit1') {
      router.push('/')
    } else if (event.code === 'Digit2') {
      router.push('/writing')
    } else if (event.code === 'Digit3') {
      router.push('/journey')
    } else if (event.code === 'Digit4') {
      router.push('/stack')
    } else if (event.code === 'Digit5') {
      router.push('/workspace')
    } else if (event.code === 'Digit6') {
      router.push('/bookmarks')
    }
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
            {(isWritingHref || isBookmarksHref) && (
              <Button variant="outline" size="xs" asChild>
                <Link
                  href={isWritingHref ? '/writing.xml' : '/bookmarks.xml'}
                  title="RSS feed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RadioIcon size={16} className="mr-2" />
                  RSS feed
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  )
}
