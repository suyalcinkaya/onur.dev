import { useEffect, useState } from 'react'
import { incrementLikes } from 'lib/supabase'
import useSWR from 'swr'

// --- Components
import { OutlineButton } from 'components/Button'

const fetcher = (url) => fetch(url).then((res) => res.json())

const LikeButton = ({ slug }) => {
  if (!slug) return null

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

  /* useEffect(async () => {
    const data = await handleViews(slug)

    setSupabaseData({
      likes: data.likes,
      views: data.views
    })
    setSupabaseDataLoading(false)
  }, []) */

  async function incrementLikeCount() {
    setSupabaseDataLoading(true)
    const data = await incrementLikes(slug)
    setSupabaseData((prevState) => ({
      ...prevState,
      likes: data.likes
    }))
    setSupabaseDataLoading(false)
  }

  if (!supabaseData?.likes && supabaseData?.likes !== 0) {
    return <div className="w-20 h-7 rounded-lg animate-pulse bg-slate-200" />
  }

  return (
    <OutlineButton
      title="Like"
      role="button"
      className="flex items-center gap-x-2 px-3 py-1.5"
      disabled={supabaseDataLoading}
      onClick={() => !supabaseDataLoading && incrementLikeCount()}
    >
      <svg width="16" height="16" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
      <span>{supabaseData?.likes}</span>
    </OutlineButton>
  )
}

export default LikeButton
