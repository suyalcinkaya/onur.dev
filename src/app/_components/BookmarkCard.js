import { Link2Icon } from 'lucide-react'

import { TweetCard } from '@/app/_components/TweetCard'

export const BookmarkCard = ({ bookmark }) => {
  // Tweets collection id is 15896982
  if (bookmark.link && bookmark.collectionId === 15896982) {
    return <TweetCard bookmark={bookmark} />
  }

  return (
    <a
      key={bookmark._id}
      className="flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-100"
      href={bookmark.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="overflow-hidden rounded-md">
        <img
          src={bookmark.cover}
          alt={bookmark.title}
          width={400}
          height={300}
          loading="lazy"
          className="h-full w-full rounded-none bg-[url('/assets/fallback.webp')] bg-cover bg-center bg-no-repeat object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/assets/fallback.webp'
          }}
        />
      </span>
      <div className="flex flex-col gap-1">
        <h3>{bookmark.title}</h3>
        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
          <Link2Icon size={16} />
          {bookmark.domain}
        </span>
        <span className="line-clamp-6 text-sm">{bookmark.excerpt || bookmark.note}</span>
      </div>
    </a>
  )
}
