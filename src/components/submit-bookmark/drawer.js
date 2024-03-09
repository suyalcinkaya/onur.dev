'use client'

import { useState } from 'react'
import { SendIcon } from 'lucide-react'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button.jsx'
import { SubmitBookmarkForm } from '@/components/submit-bookmark/form'
import { SUBMIT_BOOKMARK_FORM_TITLE, SUBMIT_BOOKMARK_FORM_DESCRIPTION } from '@/lib/constants'

export const SubmitBookmarkDrawer = ({ bookmarkCollections, currentBookmarkCollection }) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="xs" className="relative">
          <SendIcon size={16} className="mr-2" />
          Submit
          <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-6">
        <DrawerHeader className="sm:text-center">
          <DrawerTitle>{SUBMIT_BOOKMARK_FORM_TITLE}</DrawerTitle>
          <DrawerDescription className="m-0">{SUBMIT_BOOKMARK_FORM_DESCRIPTION}</DrawerDescription>
        </DrawerHeader>
        <SubmitBookmarkForm
          setFormOpen={setOpen}
          bookmarkCollections={bookmarkCollections}
          currentBookmarkCollection={currentBookmarkCollection}
          className="py-8"
        />
      </DrawerContent>
    </Drawer>
  )
}
