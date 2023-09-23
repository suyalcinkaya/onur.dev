import { cn } from '@/lib/utils'

export const SideMenu = ({ children, title, isInner }) => {
  return (
    <div className="hidden lg:flex">
      <div
        className={cn(
          'relative scrollable-container flex-none border-r bg-zinc-50 p-3',
          isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72'
        )}
      >
        {title && (
          <div className="mb-2 flex p-2">
            <span className="text-sm font-semibold">{title}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
