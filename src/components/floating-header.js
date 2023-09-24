import { memo } from 'react'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { ArrowLeftIcon } from 'lucide-react'

import { MobileDrawer } from '@/components/drawer'
import { Button } from '@/components/ui/button.jsx'

export const FloatingHeader = memo(({ initialTitle, title, backLink, children }) => {
  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center border-b bg-white text-sm font-medium lg:hidden">
      <div className="flex h-full items-center px-3">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-1">
            {backLink ? (
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <Link href={backLink} title="Go back">
                  <ArrowLeftIcon size={16} />
                </Link>
              </Button>
            ) : (
              <MobileDrawer />
            )}
            {initialTitle && <span className="line-clamp-2 font-bold">{initialTitle}</span>}
            {title && (
              <Balancer ratio={0.35}>
                <span className="line-clamp-2 font-bold">{title}</span>
              </Balancer>
            )}
          </div>
          <div className="flex min-w-[50px] justify-end">{children}</div>
        </div>
      </div>
    </header>
  )
})
