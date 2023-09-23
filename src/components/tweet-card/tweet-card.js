import { Tweet, TweetSkeleton } from 'react-tweet'

import { cn } from '@/lib/utils'
import styles from '@/components/tweet-card/tweet-card.module.css'

export const TweetCard = ({ bookmark }) => {
  const match = bookmark.link.match(/\/status\/(\d+)/) ?? []
  const tweetId = match[1]
  if (!tweetId) return null

  return (
    <div className={cn('thumbnail-shadow relative w-full min-w-full overflow-hidden rounded-xl', styles.tweetCard)}>
      <Tweet
        id={tweetId}
        fallback={
          <div>
            <TweetSkeleton />
          </div>
        }
      />
    </div>
  )
}
