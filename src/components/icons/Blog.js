import * as React from 'react'

function SvgBlog(props) {
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
      <path d="M16 6h3a1 1 0 011 1v11a2 2 0 01-4 0V5a1 1 0 00-1-1H5a1 1 0 00-1 1v12a3 3 0 003 3h11M8 8h4M8 12h4M8 16h4" />
    </svg>
  )
}

export default SvgBlog
