import { cn } from '@/lib/utils'
import { SCROLL_AREA_ID } from '@/lib/constants'

export const ScrollArea = ({ hasScrollTitle = false, className, ...rest }) => (
  <div
    id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
    className={cn('scrollable-area relative w-full', className)}
    {...rest}
  />
)
