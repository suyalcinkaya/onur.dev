import { memo } from 'react'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { ArrowLeftIcon, MenuIcon } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx'
import { MainMenuContent } from '@/components/MainMenuContent'

export const FloatingHeader = memo(({ initialTitle, title, backLink, children }) => {
  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto h-12 w-full border-b bg-white text-sm font-medium lg:hidden">
      <div className="flex h-full items-center px-5">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            {backLink ? (
              <Link href={backLink} title="Go back" className="link-card block">
                <ArrowLeftIcon size={16} />
              </Link>
            ) : (
              <Sheet>
                <SheetTrigger className="link-card">
                  <MenuIcon size={16} />
                </SheetTrigger>
                <SheetContent>
                  <MainMenuContent />
                </SheetContent>
              </Sheet>
            )}
            {initialTitle && <span className="line-clamp-2 font-bold">{initialTitle}</span>}
            {title && (
              <Balancer ratio="0.35">
                <span className="line-clamp-2 font-bold">{title}</span>
              </Balancer>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </header>
  )
})
