import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'

// --- Other
import { getReadingTime } from 'lib/helper'

const WritingCard = ({ title, summary, slug, publishedAt, readingTime }) => {
  const readingDuration = getReadingTime(readingTime.minutes)

  return (
    <Card
      title={title}
      secondaryText={
        <>
          <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
          <span className="ml-1">&bull;</span>
          <span className="ml-1">{readingDuration}</span>
        </>
      }
      url={`/blog/${slug}`}
    />
  )
}

export default WritingCard
