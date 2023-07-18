'use client'

import { useEffect, useState, useCallback } from 'react'
import { Link2Icon, ArrowDownIcon } from 'lucide-react'

import { LoadingSpinner } from '@/app/_components/LoadingSpinner'
import { Button } from '@/app/_components/Button'
import { getCollection } from '@/lib/raindrop'

async function fetchDataByPageIndex(id, pageIndex = 0) {
  const collection = await getCollection(id, pageIndex)
  return collection
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

  const chunks = getChunks(data)
  const isReachingEnd = data.length >= initialData.count

  return (
    <div>
      <div className="grid gap-4 @lg:grid-cols-2">
        {chunks.map((chunk, chunkIndex) => {
          return (
            <div key={`chunk_${chunkIndex}`} className="grid place-content-start gap-4">
              {chunk.map((bookmark) => {
                return (
                  <a
                    key={bookmark._id}
                    className="flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-100"
                    href={bookmark.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="overflow-hidden rounded-md">
                      <img
                        src={bookmark.cover}
                        alt={bookmark.title}
                        width={400}
                        height={300}
                        loading="lazy"
                        className="h-full w-full animate-reveal rounded-none bg-[url('/assets/fallback.webp')] bg-cover bg-center bg-no-repeat object-cover"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/assets/fallback.webp'
                        }}
                      />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3>{bookmark.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <Link2Icon size={16} />
                        {bookmark.domain}
                      </span>
                      <span className="line-clamp-6 text-sm">{bookmark.excerpt || bookmark.note}</span>
                    </div>
                  </a>
                )
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
