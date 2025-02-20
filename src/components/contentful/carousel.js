'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel as CarouselBase,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export function Carousel({ images = [] }) {
  const [api, setApi] = useState()
  const [currentCaption, setCurrentCaption] = useState('')

  const memoizedOpts = useMemo(
    () => ({
      align: 'start',
      loop: true
    }),
    []
  )

  const handleSelect = useCallback(() => {
    if (!api) return
    const nextCaption = images[api.selectedScrollSnap()].title
    setCurrentCaption(nextCaption)
  }, [api, images])

  useEffect(() => {
    if (!api) return

    // Set initial caption
    const initialCaption = images[api.selectedScrollSnap()].title
    setCurrentCaption(initialCaption)

    // Subscribe to the select event with the debounced handler
    api.on('select', handleSelect)

    // Cleanup the event listener on unmount or when dependencies change
    return () => {
      api.off('select', handleSelect)
    }
  }, [api, handleSelect, images])

  // Memoize the list of CarouselItem components
  const memoizedCarouselItems = useMemo(
    () =>
      images.map((imageItem, imageItemIndex) => (
        <CarouselItem key={`carousel_image_item-${imageItemIndex}`}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img
                  src={imageItem.url}
                  alt={imageItem.title}
                  loading="lazy"
                  className="aspect-square border-none object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      )),
    [images]
  )

  if (!Array.isArray(images) || !images.length) return null

  return (
    <>
      <CarouselBase setApi={setApi} opts={memoizedOpts} className="w-full">
        <CarouselContent>{memoizedCarouselItems}</CarouselContent>
        <CarouselPrevious className="-left-2.5 bg-white @4xl/writing:-left-12" />
        <CarouselNext className="-right-2.5 bg-white @4xl/writing:-right-12" />
      </CarouselBase>
      <div className="py-2 text-center text-xs font-light text-gray-500">{currentCaption}</div>
    </>
  )
}
