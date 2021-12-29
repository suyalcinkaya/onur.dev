import { useEffect } from 'react'
import Prism from 'prismjs'

export default function CodeBlock({ title, language, code }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      {title && <span className="code-title">{title}</span>}
      <pre className={`language-${language}`}>
        <code>{code}</code>
      </pre>
    </>
  )
}
