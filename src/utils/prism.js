import { css } from '@emotion/core'

const prismTheme = css`
  @font-face {
    font-family: 'Jetbrains Mono';
    src: url('/static/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
      url('/static/fonts/JetBrainsMono-Regular.woff') format('woff');
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: rgb(26, 32, 44);
    background: none;
    font-family: 'Jetbrains Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    hyphens: none;
    width: 100%;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1.5rem 0;
    overflow: auto;
    min-width: 100%;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: rgb(247, 250, 252);
    border: 1px solid rgb(226, 232, 240);
    border-radius: 0.5rem;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .mdx-marker {
    display: block;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    background-color: #e9f1fe;
    box-shadow: inset 3px 0px 0 0px blue;
    min-width: fit-content;
  }

  .remark-code-title {
    padding: 0.5rem 1rem;
    font-family: 'Jetbrains Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    background: rgb(226, 232, 240);
    color: rgb(26, 32, 44);
    border: 1px solid rgb(226, 232, 240);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 1rem;
    width: 100%;

    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`

export default prismTheme
