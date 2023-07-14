import cx from '@/lib/cx'

export const SideMenu = ({ children, title, isInner }) => {
  return (
    <div className="hidden lg:flex">
      <div
        className={cx(
          'relative h-full max-h-dynamic-screen min-h-dynamic-screen flex-none overflow-y-auto border-r bg-zinc-50 p-3',
          isInner ? 'w-96' : 'w-72'
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
