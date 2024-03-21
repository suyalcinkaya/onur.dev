import { CommandIcon } from 'lucide-react'

import { MenuContent } from '@/components/menu-content'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" title="Toggle drawer">
          <CommandIcon size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80%]">
        <div className="overflow-y-auto p-4">
          <MenuContent />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
