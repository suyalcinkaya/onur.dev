'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { ArrowDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button.jsx'
import { BookmarkCard } from '@/components/bookmark-card'
import { getRaindrops } from '@/lib/raindrop'
import { cn } from '@/lib/utils'
import { TWEETS_COLLECTION_ID } from '@/lib/constants'

async function fetchDataByPageIndex(id, pageIndex) {
  const raindrops = await getRaindrops(id, pageIndex)
  return raindrops
}

export const BookmarkList = ({ initialData, id }) => {
  const [data, setData] = useState(initialData.items)
  const [pageIndex, setPageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    if (!isReachingEnd && !isLoading) setPageIndex((prevPageIndex) => prevPageIndex + 1)
  }

  const fetchInfiniteData = useCallback(async () => {
    setIsLoading(true)
    const newData = await fetchDataByPageIndex(id, pageIndex)
    setData((prevData) => [...prevData, ...newData.items])
    setIsLoading(false)
  }, [id, pageIndex])

  useEffect(() => {
    if (pageIndex > 0) fetchInfiniteData()
  }, [pageIndex, fetchInfiniteData])

  const getChunks = useCallback(() => {
    const firstChunk = []
    const lastChunk = []
    data.forEach((element, index) => {
      if (index % 2 === 0) {
        firstChunk.push(element)
      } else {
        lastChunk.push(element)
      }
    })
    return [[...firstChunk], [...lastChunk]]
  }, [data])

  const chunks = useMemo(() => getChunks(), [getChunks])
  const isReachingEnd = data.length >= initialData.count
  const isTweetCollection = id === TWEETS_COLLECTION_ID

  return (
    <div>
      <div className="flex flex-col gap-4 @lg:hidden">
        {data.map((bookmark, bookmarkIndex) => {
          return (
            <div
              key={`bookmark_${bookmarkIndex}`}
              className={cn('grid gap-4', isTweetCollection ? 'h-fit' : 'place-content-start')}
            >
              <BookmarkCard key={bookmark._id} bookmark={bookmark} />
            </div>
          )
        })}
      </div>
      <div className="hidden @lg:grid @lg:grid-cols-2 @lg:gap-4">
        {chunks.map((chunk, chunkIndex) => {
          return (
            <div
              key={`chunk_${chunkIndex}`}
              className={cn('grid gap-4', isTweetCollection ? 'h-fit' : 'place-content-start')}
            >
              {chunk.map((bookmark) => {
                return <BookmarkCard key={bookmark._id} bookmark={bookmark} />
              })}
            </div>
          )
        })}
      </div>
      <div className="mt-8 flex min-h-[4rem] items-center justify-center text-sm lg:mt-12">
        {!isReachingEnd ? (
          <>
            {isLoading ? (
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-current border-t-transparent text-black"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={handleLoadMore}
                disabled={isLoading}
                className="w-full justify-center bg-white"
              >
                Load more
                <ArrowDownIcon size={16} />
              </Button>
            )}
          </>
        ) : (
          <span>{`That's all for now. Come back later for more.`}</span>
        )}
      </div>
    </div>
  )
}
