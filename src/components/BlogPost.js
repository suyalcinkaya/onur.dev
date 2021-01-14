import { useRouter } from 'next/router'
import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'

// --- Other
import { getReadingTime } from 'lib/helper'

const BlogPost = ({ title, summary, slug, publishedAt, readingTime }) => {
  const router = useRouter()
  const readingDuration = getReadingTime(readingTime.minutes)

  return (
    <article
      className="md:hover:bg-gray-100 md:rounded-lg md:p-4 md:-mx-4 md:cursor-pointer md:transition-colors md:duration-200 md:ease-in-out"
      onClick={() => router.push(`/blog/${slug}`)}
    >
      <Card
        title={title}
        primaryText={
          <div className="text-gray-500">
            <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
            <span className="ml-1">&bull;</span>
            <span className="ml-1">{readingDuration}</span>
          </div>
        }
        secondaryText={summary}
      />
    </article>
  )
}

export default BlogPost
