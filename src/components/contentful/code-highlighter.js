import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function CodeHighlighter({ code, language }) {
  return (
    <SyntaxHighlighter language={language} customStyle={{ padding: '16px' }} style={githubGist} showLineNumbers={true}>
      {code}
    </SyntaxHighlighter>
  )
}
