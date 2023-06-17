import cx from '@/lib/cx'

export const SideMenu = ({ children, className, title }) => {
  return (
    <div
      className={cx(
        'hidden h-full max-h-screen min-h-screen w-56 flex-shrink-0 border-r bg-gray-50 p-3 lg:block',
        className
      )}
    >
      {title && (
        <div className="mb-4 flex p-2">
          <span className="font-semibold text-sm">{title}</span>
        </div>
      )}
      {children}
    </div>
  )
}
