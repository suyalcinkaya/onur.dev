import { forwardRef } from 'react'

import cx from '@/lib/cx'

export const OutlineButton = forwardRef(({ as = 'a', className, ...rest }, ref) => {
  const As = as
  return (
    <As
      ref={ref}
      className={cx(
        'btn shadow-xs border border-gray-400 border-opacity-30 px-3 py-2.5 transition-all duration-200',
        'hover:border-opacity-50 hover:shadow-sm',
        className
      )}
      {...rest}
    />
  )
})
