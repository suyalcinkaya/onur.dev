'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva('text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

function Label({ className, ...props }) {
  return <LabelPrimitive.Root className={cn(labelVariants(), className)} {...props} />
}

export { Label }
