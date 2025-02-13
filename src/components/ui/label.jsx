'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cva } from 'class-variance-authority'
import { memo } from 'react'

import { cn } from '@/lib/utils'

const labelVariants = cva('text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

const Label = memo(({ className, ...props }) => {
  return <LabelPrimitive.Root className={cn(labelVariants(), className)} {...props} />
})
Label.displayName = 'Label'

export { Label }
