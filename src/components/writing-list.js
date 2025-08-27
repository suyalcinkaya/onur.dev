'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import NextLink from 'next/link'
import { useMemo } from 'react'

import { useViewData } from '@/hooks/useViewData'
import { cn, dateWithDayAndMonthFormatter, dateWithMonthAndYearFormatter, viewCountFormatter } from '@/lib/utils'

export const WritingList = ({ items }) => {
  const viewData = useViewData()

  // Preprocess viewData into a map for efficient lookups
  const viewDataMap = useMemo(() => {
    const map = new Map()
    viewData?.forEach((item) => {
      map.set(item.slug, item.view_count)
    })
    return map
  }, [viewData])

  // Memoize animation props
  const animationProps = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    }),
    []
  )

  // Memoize the items mapping to prevent unnecessary re-renders
  const renderedItems = useMemo(() => {
    return items.map((item) => {
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

            const view_count = viewDataMap.get(slug)
            const formattedViewCount = view_count ? viewCountFormatter.format(view_count) : null

            return (
              <li key={slug} className="group/list-item grid grid-cols-6 p-0 group-hover/list-wrapper:text-gray-300">
                <span
                  className={cn(
                    'pointer-events-none col-span-1 hidden items-center tabular-nums transition-colors duration-300 group-hover/list:text-gray-900 md:grid',
                    itemIndex === 0 && 'border-t border-gray-200'
                  )}
                >
                  {itemIndex === 0 ? year : ''}
                </span>
                <NextLink
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
                    {formattedViewCount && (
                      <span className="col-span-1">
                        <m.span
                          key={`${slug}-views`}
                          className="flex justify-end tabular-nums"
                          title={`${formattedViewCount} views`}
                          {...animationProps}
                        >
                          {formattedViewCount}
                        </m.span>
                      </span>
                    )}
                  </span>
                </NextLink>
              </li>
            )
          })}
        </ul>
      )
    })
  }, [animationProps, items, viewDataMap])

  return useMemo(
    () => (
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

          <div className="group/list-wrapper">{renderedItems}</div>
        </div>
      </LazyMotion>
    ),
    [renderedItems]
  )
}
