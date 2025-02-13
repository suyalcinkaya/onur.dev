'use client'

import { memo, useMemo } from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

const Drawer = memo(({ shouldScaleBackground = true, ...props }) => {
  return useMemo(
    () => (
      <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        autoFocus={true} // https://github.com/emilkowalski/vaul/issues/517#issuecomment-2571619213
        {...props}
      />
    ),
    [shouldScaleBackground, props]
  )
})
Drawer.displayName = 'Drawer'

const DrawerTrigger = memo(DrawerPrimitive.Trigger)

const DrawerPortal = memo(DrawerPrimitive.Portal)

const DrawerClose = memo(DrawerPrimitive.Close)

const DrawerOverlay = memo(({ className, ...props }) => {
  return <DrawerPrimitive.Overlay className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
})
DrawerOverlay.displayName = 'DrawerOverlay'

const DrawerContent = memo(({ className, children, ...props }) => {
  return useMemo(
    () => (
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
          className={cn(
            'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-gray-200 bg-white',
            className
          )}
          {...props}
        >
          <div className="mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full bg-gray-100" />
          {children}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    ),
    [className, children, props]
  )
})
DrawerContent.displayName = 'DrawerContent'

function DrawerHeader({ className, ...props }) {
  return <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
}

function DrawerFooter({ className, ...props }) {
  return <div className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />
}

const DrawerTitle = memo(({ className, ...props }) => {
  return (
    <DrawerPrimitive.Title className={cn('text-lg leading-none font-semibold tracking-tight', className)} {...props} />
  )
})
DrawerTitle.displayName = 'DrawerTitle'

const DrawerDescription = memo(({ className, ...props }) => {
  return <DrawerPrimitive.Description className={cn('text-sm/snug text-gray-500', className)} {...props} />
})
DrawerDescription.displayName = 'DrawerDescription'

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
}
