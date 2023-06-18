import cx from '@/lib/cx'

export const SideMenu = ({ children, className, title }) => {
  return (
    <div className="hidden lg:flex">
      <div
        className={cx(
          'relative h-full max-h-screen min-h-screen w-56 flex-none overflow-y-auto border-r bg-gray-50 p-3',
          className
        )}
      >
        {title && (
          <div className="mb-4 flex p-2">
            <span className="text-sm font-semibold">{title}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
