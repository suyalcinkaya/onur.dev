import * as React from 'react'

function SvgCopyLink(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1012 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 11-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1012 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
    </svg>
  )
}

export default SvgCopyLink
