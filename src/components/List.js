'use client'

import Link from 'next/link'
import useSWR from 'swr'

import { fetcher } from '@/lib/utils'

export const List = ({ items }) => {
  const { data, error } = useSWR('/api/getViews', fetcher, {
    keepPreviousData: true,
    refreshInterval: 1000 * 60 // 1 minute
  })

  const itemsEntriesByYear = items.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear()

    const yearArr = acc.find((item) => item[0] === year)
    if (!yearArr) {
      acc.push([year, [item]])
    } else {
      yearArr[1].push(item)
    }

    return acc
  }, [])

  return (
    <div className="text-sm">
      <header className="grid grid-cols-6 text-gray-500 py-3">
        <span className="hidden md:grid col-span-1 text-left">Year</span>
        <span className="col-span-6 md:col-span-5">
          <span className="grid grid-cols-4 md:grid-cols-8 items-center">
            <span className="col-span-1 text-left">Date</span>
            <span className="col-span-2 md:col-span-6">Title</span>
            <span className="col-span-1 text-right">Views</span>
          </span>
        </span>
      </header>

      <div className="group">
        {itemsEntriesByYear.map((customItems, index) => {
          const [year, itemsArr] = customItems

          return (
            <ul className="list-none" key={year}>
              {itemsArr.map((item, itemIndex) => {
                const { title, slug, date } = item

                const dateWithDayAndMonth = Intl.DateTimeFormat('tr-TR', {
                  day: '2-digit',
                  month: '2-digit'
                }).format(new Date(date))

                const dateWithMonthAndYear = Intl.DateTimeFormat('en-US', {
                  month: '2-digit',
                  year: 'numeric'
                }).format(new Date(date))

                const views = data?.find((item) => item.slug === slug)?.view_count || 0
                const formattedViews = new Intl.NumberFormat('en-US').format(views)

                return (
                  <li key={slug} className="grid grid-cols-6 p-0 group-hover:text-gray-300">
                    <span
                      className={`hidden md:grid col-span-1 items-center text-gray-500 pointer-events-none ${
                        itemIndex === 0 ? 'border-t border-gray-200' : ''
                      }`}
                    >
                      {itemIndex === 0 ? year : ''}
                    </span>
                    <Link href={`/writing/${slug}`} className="col-span-6 md:col-span-5 hover:text-black">
                      <span className="grid grid-cols-4 md:grid-cols-8 gap-2 items-center py-3 border-t border-gray-200">
                        <span className="col-span-1 text-left">
                          <time dateTime={date} className="hidden md:block">
                            {dateWithDayAndMonth}
                          </time>
                          <time dateTime={date} className="md:hidden">
                            {dateWithMonthAndYear}
                          </time>
                        </span>
                        <span className="col-span-2 md:col-span-6 line-clamp-4">{title}</span>
                        <span className="col-span-1 text-right">{data && formattedViews}</span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>
    </div>
  )
}
