import { Tweet, TweetSkeleton } from 'react-tweet'

import cx from '@/lib/cx'
import styles from '@/components/TweetCard/TweetCard.module.css'

export const TweetCard = ({ bookmark }) => {
  const match = bookmark.link.match(/\/status\/(\d+)/) ?? []
  const tweetId = match[1]
  if (!tweetId) return null

  return (
    <div className={cx('thumbnail-shadow relative w-full min-w-full overflow-hidden rounded-xl', styles.tweetCard)}>
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
