'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { ArrowDownIcon } from 'lucide-react'

import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Button } from '@/components/Button'
import { BookmarkCard } from '@/components/BookmarkCard'
import { getRaindrops } from '@/lib/raindrop'
import cx from '@/lib/cx'

async function fetchDataByPageIndex(id, pageIndex) {
  const raindrops = await getRaindrops(id, pageIndex)
  return raindrops
}

export const BookmarkList = ({ initialData, id }) => {
  const [data, setData] = useState(initialData.items)
  const [pageIndex, setPageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    if (!isReachingEnd || !isLoading) setPageIndex((prevPageIndex) => prevPageIndex + 1)
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
  const isTweetCollection = id === '15896982'

  return (
    <div>
      <div className="grid gap-4 @lg:grid-cols-2">
        {chunks.map((chunk, chunkIndex) => {
          return (
            <div
              key={`chunk_${chunkIndex}`}
              className={cx('grid gap-4', isTweetCollection ? 'h-fit' : 'place-content-start')}
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
              <LoadingSpinner />
            ) : (
              <Button as="button" onClick={handleLoadMore} disabled={isLoading} className="w-full justify-center">
                Load more
                <ArrowDownIcon size={16} />
              </Button>
            )}
          </>
        ) : (
          <p>{`That's all for now. Come back later for more.`}</p>
        )}
      </div>
    </div>
  )
}
