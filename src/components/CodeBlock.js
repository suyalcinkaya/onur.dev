import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'

export default function CodeBlock({ title, language, code }) {
  const resetDefaultStyle = { backgroundColor: '' }

  return (
    <>
      {title && <span className="code-title">{title}</span>}
      <SyntaxHighlighter language={language} customStyle={resetDefaultStyle}>
        {code}
      </SyntaxHighlighter>
    </>
  )
}
