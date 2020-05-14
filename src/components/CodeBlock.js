import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={atomOneLight}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
