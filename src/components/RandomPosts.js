import SectionBlock from '@/components/SectionBlock'
import WritingCard from '@/components/WritingCard'
import { dateToISOString } from '@/lib/utils'

export const RandomPosts = ({ randomPosts = [] }) => {
  if (randomPosts.length === 0) return null

  return (
    <>
      <hr />
      <div className="content">
        <SectionBlock title="You might also enjoy">
          {randomPosts.map((post) => {
            const {
              title,
              date,
              slug,
              sys: { firstPublishedAt }
            } = post

            const dateTime = date || firstPublishedAt
            const dateString = dateToISOString(dateTime)

            return (
              <WritingCard
                key={`writing_${slug}`}
                slug={slug}
                title={title}
                dateTime={dateTime}
                dateString={dateString}
              />
            )
          })}
        </SectionBlock>
      </div>
    </>
  )
}
