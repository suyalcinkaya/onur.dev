'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import { memo, useMemo, useState } from 'react'
import { highlight } from 'sugar-high'

import { Button } from '@/components/ui/button'

export const CodeBlock = memo(({ title, code }) => {
  const [copied, setCopied] = useState(false)
  const codeHTML = highlight(code)

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(code)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="size-3.5 rounded-full bg-gray-200" />
            <span className="size-3.5 rounded-full bg-gray-200" />
            <span className="size-3.5 rounded-full bg-gray-200" />
          </span>
          {title && <p className="m-0 text-sm">{title}</p>}
        </div>
        <Button variant="outline" size="xs" className="rounded-lg text-xs" disabled={copied} onClick={onCopy}>
          <LazyMotion features={domAnimation}>
            <m.span
              key={copied ? 'copied' : 'copy'}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.3 }}
              className="inline-flex w-14 items-center justify-center gap-0.5"
            >
              {useMemo(
                () =>
                  copied ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-0.5"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      Copy
                    </>
                  ),
                [copied]
              )}
            </m.span>
          </LazyMotion>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <div className="flex size-full flex-col overflow-x-auto overflow-y-hidden rounded-b-lg border-x border-b border-gray-200">
          <div className="horizontal-scroll-area">
            <pre>
              <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
            </pre>
          </div>
        </div>
      </div>
    </>
  )
})
CodeBlock.displayName = 'CodeBlock'
