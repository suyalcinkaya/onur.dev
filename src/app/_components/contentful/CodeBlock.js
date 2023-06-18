'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const DynamicSyntaxHighlighter = dynamic(() => import('react-syntax-highlighter/dist/cjs/prism-async-light'))
import { AnimatePresence, motion } from 'framer-motion'
const { spacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

import ShowInView from '@/app/_components/ShowInView'
import { OutlineButton } from '@/app/_components/Button'

export default function CodeBlock({ title, language, code }) {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(code)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <ShowInView rootMargin="50px">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-gray-200" />
            <span className="h-4 w-4 rounded-full bg-gray-200" />
            <span className="h-4 w-4 rounded-full bg-gray-200" />
          </span>
          {title && <p className="m-0 text-sm font-medium">{title}</p>}
        </div>
        <OutlineButton as="button" className="px-1 py-1 text-xs" disabled={copied} onClick={onCopy}>
          <AnimatePresence mode="wait">
            <motion.span
              key={copied ? 'copied' : 'copy'}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className="inline-flex w-16 items-center justify-center gap-0.5"
              // transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                    ></path>
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </OutlineButton>
      </div>
      <div className="pre-code">
        <DynamicSyntaxHighlighter
          language={language}
          showLineNumbers
          wrapLongLines={false} // white-space: pre
          customStyle={{ backgroundColor: '' }}
          lineNumberStyle={{
            minWidth: spacing[4],
            paddingRight: 0,
            marginRight: spacing[6],
            color: colors.gray[400]
          }}
        >
          {code}
        </DynamicSyntaxHighlighter>
      </div>
    </ShowInView>
  )
}
