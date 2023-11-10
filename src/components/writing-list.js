'use client'

import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useViewData } from '@/hooks/useViewData'
import { cn, dateWithDayAndMonthFormatter, dateWithMonthAndYearFormatter, viewCountFormatter } from '@/lib/utils'

export const WritingList = ({ items }) => {
  const viewData = useViewData()

  const itemsByYear = items.reduce((acc, item) => {
    const year = new Date(item.date || item.sys.firstPublishedAt).getFullYear()
    const yearArr = acc.find((item) => item[0] === year)
    if (!yearArr) {
      acc.push([year, [item]])
    } else {
      yearArr[1].push(item)
    }

    return acc
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <div className="text-sm">
        <div className="grid grid-cols-6 py-2 font-medium text-gray-500">
          <span className="col-span-1 hidden text-left md:grid">Year</span>
          <span className="col-span-6 md:col-span-5">
            <span className="grid grid-cols-4 items-center md:grid-cols-8">
              <span className="col-span-1 text-left">Date</span>
              <span className="col-span-2 md:col-span-6">Title</span>
              <span className="col-span-1 text-right">Views</span>
            </span>
          </span>
        </div>

        <div className="group/list-wrapper">
          {itemsByYear.map((item) => {
            const [year, itemsArr] = item

            return (
              <ul className="group/list list-none" key={year}>
                {itemsArr.map((item, itemIndex) => {
                  const {
                    title,
                    slug,
                    date,
                    sys: { firstPublishedAt }
                  } = item
                  const dateObj = new Date(date || firstPublishedAt)
                  const dateWithDayAndMonth = dateWithDayAndMonthFormatter.format(dateObj)
                  const dateWithMonthAndYear = dateWithMonthAndYearFormatter.format(dateObj)

                  const { view_count } = viewData?.find((item) => item.slug === slug) ?? {}
                  const formattedViewCount = view_count ? viewCountFormatter.format(view_count) : null

                  return (
                    <li
                      key={slug}
                      className="group/list-item grid grid-cols-6 p-0 group-hover/list-wrapper:text-gray-300"
                    >
                      <span
                        className={cn(
                          'pointer-events-none col-span-1 hidden items-center tabular-nums transition-colors duration-300 group-hover/list:text-gray-900 md:grid',
                          itemIndex === 0 && 'border-t border-gray-200'
                        )}
                      >
                        {itemIndex === 0 ? year : ''}
                      </span>
                      <Link
                        href={`/writing/${slug}`}
                        className="col-span-6 group-hover/list-item:text-gray-900 md:col-span-5"
                      >
                        <span className="grid grid-cols-4 items-center gap-2 border-t border-gray-200 py-4 md:grid-cols-8">
                          <span className="col-span-1 text-left tabular-nums">
                            <time dateTime={date} className="hidden md:block">
                              {dateWithDayAndMonth}
                            </time>
                            <time dateTime={date} className="md:hidden">
                              {dateWithMonthAndYear}
                            </time>
                          </span>
                          <span className="col-span-2 line-clamp-4 md:col-span-6">{title}</span>
                          <span className="col-span-1">
                            {formattedViewCount ? (
                              <m.span
                                key={`${slug}-views`}
                                className="flex justify-end"
                                title={`${formattedViewCount} views`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {formattedViewCount}
                              </m.span>
                            ) : (
                              <m.span key={`${slug}-views-loading`} />
                            )}
                          </span>
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
    </LazyMotion>
  )
}
