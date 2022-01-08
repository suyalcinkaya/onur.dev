import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
const { spacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const ControlPlaceholder = () => <div className="w-4 h-4 bg-gray-300 rounded-full" />

export default function CodeBlock({ title, language, code }) {
  const resetDefaultStyle = { backgroundColor: '' }

  return (
    <>
      {title && (
        <div className="code-header">
          <div className="inline-flex items-center space-x-1.5">
            <ControlPlaceholder />
            <ControlPlaceholder />
            <ControlPlaceholder />
          </div>
          <span className="text-sm font-medium">{title}</span>
        </div>
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
