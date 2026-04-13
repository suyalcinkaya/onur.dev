import { cn } from '@/lib/utils'

export const PageTitle = ({ title, subtitle, className, ...rest }) => {
  return (
    <div className={cn('mb-6', className)}>
      <h1 className="text-balance" {...rest}>
        {title}
      </h1>
      {subtitle}
    </div>
  )
}
