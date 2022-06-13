import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
const { spacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const ControlPlaceholder = () => <span className="w-4 h-4 bg-gray-200 rounded-full" />

export default function CodeBlock({ title, language, code }) {
  const resetDefaultStyle = { backgroundColor: '' }

  return (
    <>
      {title && (
        <span className="code-header">
          <span className="inline-flex items-center space-x-1.5">
            <ControlPlaceholder />
            <ControlPlaceholder />
            <ControlPlaceholder />
          </span>
          <span className="text-sm font-medium">{title}</span>
        </span>
      )}
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        wrapLongLines={false} // white-space: pre
        customStyle={resetDefaultStyle}
        lineNumberStyle={{
          minWidth: spacing[4],
          paddingRight: 0,
          marginRight: spacing[6],
          color: colors.gray[400]
        }}
      >
        {code}
      </SyntaxHighlighter>
    </>
  )
}
