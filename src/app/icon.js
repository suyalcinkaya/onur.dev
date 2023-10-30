import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%'
        }}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12 22.9272C12.7383 22.9272 13.3433 22.3838 13.4458 21.6147C14.4609 14.7651 15.394 13.8115 21.9771 13.063C22.7358 12.9707 23.3203 12.335 23.3203 11.5967C23.3203 10.8481 22.7461 10.2329 21.9873 10.1201C15.4453 9.20752 14.6353 8.40771 13.4458 1.56836C13.3125 0.80957 12.728 0.266113 12 0.266113C11.2515 0.266113 10.6567 0.80957 10.5337 1.57861C9.53906 8.41797 8.60596 9.37158 2.0332 10.1201C1.25391 10.2227 0.679688 10.8379 0.679688 11.5967C0.679688 12.335 1.2334 12.9502 2.0127 13.063C8.56494 13.9961 9.36475 14.7856 10.5337 21.625C10.6875 22.394 11.2822 22.9272 12 22.9272Z"
            fill="#f3f4f6"
          ></path>
        </svg> */}
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000">
          <path
            d="M 0 16 C 0 4, 4 0, 16 0 S 32 4, 32 16, 28 32 16 32, 0 28, 0 16"
            transform="rotate(0,16,16) translate(0,0)"
          />
        </svg>
      </div>
    ),
    size
  )
}
