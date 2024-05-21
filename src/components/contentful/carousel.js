'use client'

import { useEffect, useState } from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

export function CarouselCmp({ images = [] }) {
  const [api, setApi] = useState()
  const [currentCaption, setCurrentCaption] = useState('')

  useEffect(() => {
    if (!api) return

    const currentCaption = images[api.selectedScrollSnap()].title
    setCurrentCaption(currentCaption)

    api.on('select', () => {
      const nextCaption = images[api.selectedScrollSnap()].title
      setCurrentCaption(nextCaption)
    })
  }, [api, images])

  if (!Array.isArray(images) || !images?.length) return null

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((imageItem, imageItemIndex) => (
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
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2.5 bg-white @4xl/writing:-left-12" />
        <CarouselNext className="-right-2.5 bg-white @4xl/writing:-right-12" />
      </Carousel>
      <div className="py-2 text-center text-xs font-light text-gray-500">{currentCaption}</div>
    </>
  )
}
