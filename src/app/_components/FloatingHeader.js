import { memo } from 'react'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { ArrowLeftIcon, MenuIcon, SparklesIcon, Edit3Icon, NavigationIcon, Wand2Icon, BookmarkIcon } from 'lucide-react'

import { NavigationLink } from '@/app/_components/NavigationLink'
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet.jsx'
import { PROFILES } from '@/lib/constants'

const links = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <Edit3Icon size={16} />
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: <Wand2Icon size={16} />
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    icon: <BookmarkIcon size={16} />
  }
  /* {
    href: '/stars',
    label: 'GitHub Stars',
    icon: <StarIcon size={16} />
  } */
]

const FloatingHeader = ({ initialTitle, title, backLink, children }) => {
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
                  <div className="flex w-full flex-col gap-6 text-sm">
                    <div className="flex flex-col gap-4">
                      <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
                        <img
                          src="/assets/me.jpg"
                          alt="Onur Şuyalçınkaya"
                          width={40}
                          height={40}
                          loading="eager"
                          className="rounded-full border shadow-sm"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold">Onur Şuyalçınkaya</span>
                          <span className="text-gray-600">Software Engineer</span>
                        </div>
                      </Link>
                      <div className="flex flex-col gap-1">
                        {links.map((link) => (
                          <NavigationLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="text-xs font-medium text-gray-400">Online</span>
                      <div className="flex flex-col gap-1">
                        {Object.values(PROFILES).map((profile) => (
                          <NavigationLink
                            key={profile.url}
                            href={profile.url}
                            label={profile.title}
                            icon={profile.icon}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
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
}

export default memo(FloatingHeader)
