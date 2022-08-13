import { useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import debounce from 'lodash.debounce'

// --- Components
import { OutlineButton } from 'components/Button'

// --- Others
import { incrementLikes } from 'lib/supabase'
import { fetcher } from 'lib/helper'

const LikeButton = ({ slug }) => {
  const [liked, setLiked] = useState(false)
  const [likeAmount, setLikeAmount] = useState(0)
  const [supabaseDataLoading, setSupabaseDataLoading] = useState(true)
  const [supabaseData, setSupabaseData] = useState({ likes: null, views: null })
  const { data } = useSWR(`/api/handleViews?slug=${slug}`, fetcher)

  useEffect(() => {
    if (data) {
      setSupabaseData({
        likes: data.likes,
        views: data.views
      })
      setSupabaseDataLoading(false)
    }
  }, [data])

  useEffect(() => {
    if (likeAmount > 0 && liked) debouncedIncrementLikeCount(likeAmount)
  }, [likeAmount, liked])

  const incrementLikeCount = async (likeAmountProp) => {
    setSupabaseDataLoading(true)
    const latestData = await incrementLikes({ slug, likeAmount: likeAmountProp })
    setSupabaseData((prevSupabaseDataState) => ({
      ...prevSupabaseDataState,
      likes: latestData.likes
    }))
    setLikeAmount(0) // reset like amount
    setSupabaseDataLoading(false)
  }

  const debouncedIncrementLikeCount = useCallback(
    debounce((likeAmountProp) => incrementLikeCount(likeAmountProp), 1000),
    []
  )

  const handleLike = () => {
    setLikeAmount((prevLikeAmountState) => prevLikeAmountState + 1)
    if (!liked) setLiked(true)
  }

  if (!supabaseData?.likes && supabaseData?.likes !== 0) {
    return <div className="w-20 h-7 rounded-lg animate-pulse bg-slate-200" />
  }

  return (
    <OutlineButton
      as="button"
      title="Like"
      className="!justify-center !px-3 !py-1.5"
      disabled={supabaseDataLoading}
      onClick={() => !supabaseDataLoading && handleLike()}
    >
      {liked ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="fill-rose-600">
          <path fill="none" d="M0 0H24V24H0z" />
          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path fill="none" d="M0 0H24V24H0z" />
          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
        </svg>
      )}

      <span>{supabaseData.likes + likeAmount}</span>
    </OutlineButton>
  )
}

export default LikeButton
