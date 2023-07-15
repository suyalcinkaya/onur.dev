'use client'

import { useEffect, useState } from 'react'
import { Link2Icon, ChevronDownIcon } from 'lucide-react'

import { LoadingSpinner } from '@/app/_components/LoadingSpinner'
import { OutlineButton } from '@/app/_components/Button'
import { getCollection, PER_PAGE } from '@/lib/raindrop'

async function fetchData(id, pageIndex = 0) {
  const collection = await getCollection(id, pageIndex)
  return collection
}

export const BookmarkList = ({ initialData, id }) => {
  const [data, setData] = useState(initialData.items)
  const [pageIndex, setPageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isReachingEnd, setIsReachingEnd] = useState(initialData.count <= PER_PAGE)

  const handleLoadMore = () => {
    if (!isReachingEnd) setPageIndex((prevPageIndex) => prevPageIndex + 1)
  }

  useEffect(() => {
    const fetchInfiniteData = async () => {
      setIsLoading(true)
      const newData = await fetchData(id, pageIndex)
      const finalData = [...data, ...newData.items]
      setData(finalData)
      setIsLoading(false)
      setIsReachingEnd(finalData.length >= newData.count)
    }

    if (pageIndex > 0 && !isReachingEnd) {
      fetchInfiniteData(id, pageIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex])

  const firstChunk = []
  const lastChunk = []
  data.forEach((element, index) => {
    if (index % 2 === 0) {
      firstChunk.push(element)
    } else {
      lastChunk.push(element)
    }
  })
  const chunks = [[...firstChunk], [...lastChunk]]

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
                    className="flex min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100"
                    href={bookmark.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="overflow-hidden rounded-md">
                      {bookmark.cover && (
                        <object
                          data={bookmark.cover}
                          name={bookmark.title}
                          width={300}
                          height={240}
                          type="image/png"
                          className="pointer-events-none aspect-auto h-auto min-h-[120px] w-full animate-reveal overflow-hidden rounded-md border object-cover"
                        >
                          <img
                            src="/assets/fallback.webp"
                            alt={bookmark.title}
                            width={300}
                            height={180}
                            loading="lazy"
                            className="aspect-[240/160] h-full w-full rounded-none object-cover"
                          />
                        </object>
                      )}
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
      <div className="mt-12 flex min-h-[4rem] items-center justify-center lg:mt-20">
        {!isReachingEnd ? (
          <>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <OutlineButton as="button" onClick={handleLoadMore} disabled={isLoading}>
                Load More
                <ChevronDownIcon size={16} />
              </OutlineButton>
            )}
          </>
        ) : (
          <p>{`That's all for now. Come back later for more.`}</p>
        )}
      </div>
    </div>
  )
}
