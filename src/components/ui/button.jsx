import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-gray-950 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-gray-50 shadow-sm hover:bg-gray-900/90',
        destructive: 'bg-red-500 text-gray-50 shadow-xs hover:bg-red-500/90',
        outline: 'border border-gray-200 bg-transparent shadow-xs hover:bg-gray-100 hover:text-gray-900',
        secondary: 'bg-gray-100 text-gray-900 shadow-xs hover:bg-gray-100/80',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
        link: 'text-gray-900 underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded-md px-2.5 text-xs',
        sm: 'h-8 rounded-md px-2.5 text-sm',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
