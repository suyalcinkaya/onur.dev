import { cn } from '@/lib/utils'

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-gray-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Input }
