import * as React from 'react'

function SvgBookmarks(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M13 7a2 2 0 012 2v12l-5-3-5 3V9a2 2 0 012-2h6z" />
      <path d="M9.265 4A2 2 0 0111 3h6a2 2 0 012 2v12l-1-.6" />
    </svg>
  )
}

export default SvgBookmarks
