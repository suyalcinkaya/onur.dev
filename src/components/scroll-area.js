import { cn } from '@/lib/utils'

export const ScrollArea = ({ className, ...rest }) => (
  <div className={cn('scrollable-area relative w-full', className)} {...rest} />
)
