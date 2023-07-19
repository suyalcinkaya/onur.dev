import { Tweet, TweetSkeleton } from 'react-tweet'

export const TweetCard = ({ bookmark }) => {
  const match = bookmark.link.match(/\/status\/(\d+)/)
  const tweetId = match[1]
  if (!tweetId) return null

  return (
    <div className="relative w-full min-w-full overflow-hidden">
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
