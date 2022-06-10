import { useEffect, useState } from 'react'
import { handleViews, incrementLikes } from 'lib/supabase'

import { OutlineButton } from 'components/Button'
import LikeIcon from 'components/icons/Like'

const LikeButton = ({ slug }) => {
  const [supabaseDataLoading, setSupabaseDataLoading] = useState(true)
  const [supabaseData, setSupabaseData] = useState({ likes: null, views: null })

  useEffect(async () => {
    const data = await handleViews(slug)

    setSupabaseData({
      likes: data.likes,
      views: data.views
    })
    setSupabaseDataLoading(false)
  }, [slug])

  async function incrementLikeCount() {
    setSupabaseDataLoading(true)
    const data = await incrementLikes(slug)
    setSupabaseData((prevState) => ({
      ...prevState,
      likes: data.likes
    }))
    setSupabaseDataLoading(false)
  }

  return (
    <OutlineButton
      title="Like"
      className="px-3 py-1.5 space-x-2"
      disabled={supabaseDataLoading}
      onClick={() => !supabaseDataLoading && incrementLikeCount()}
    >
      <LikeIcon height={14} width={14} />
      <span>{supabaseData?.likes ?? '—'}</span>
    </OutlineButton>
  )
}

export default LikeButton
