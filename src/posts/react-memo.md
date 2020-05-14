---
title: Upon React.memo() Usage
description: React.memo() increases the performance of functional components by preventing useless renderings. But such performance tweaks must be applied wisely.
date: '2020-01-20'
---

Many new features are released in React v16.6.0. `React.memo` is one of the cool features in it. `memo` means memorizing. This is a performance optimization feature for the function components. `React.memo()` is similar to `PureComponent` that it will help us control when our components rerender.

> Components will only rerender if its props have changed! Normally all of our React components in our tree will go through a render when changes are made. With PureComponent and React.memo(), we can have only some components render.

`memo` has made it easier to avoid the continuous rendering process that we could do with the `shouldComponentUpdate()` method. A compiled package to prevent unwanted re-rendered operations.

I'll try to explain it with a simple example.

Let's consider it in a simple way. We have a parent component called `Parent` the main logic in it and a child component called `Child` simply console logging and renders some text.

<div class="filename">Child.js</div>

```jsx
const Child = () => {
  console.log('Log from Child component.')
  return <div>This is Child component.</div>
}
```

<div class="filename">Parent.js</div>

```jsx
const Parent = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <span>Text: {text}</span>
      <input placeholder="Type a text" onChange={(event) => setText(event.target.value)} />
      <Child />
    </div>
  )
}
```

In `Parent.js`, the console will log "_Log from Child component._" **every time you type in the input**. It's because every time we set the state with the `onChange` function, the whole `Parent` component re-renders and therefore updates the `Child` component. Since the `Child` component is static, we do not have to render it every time we set the text state.

To prevent this, we needed to use the `shouldComponentUpdate()` method. Now we can overcome this problem with `memo`.

### Here are 2 ways:

##### 1) If you'd like to memoize the `Child` component from components to components, just import it and use React.memo() inside _that_ component:

<div class="filename">Method1.js</div>

```jsx
import Child from '...'
const MemoizedChild = React.memo(Child) // Memoize the Child component

const Parent = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <span>Text: {text}</span>
      <input placeholder="Type a text" onChange={(event) => setText(event.target.value)} />
      {/* Use the memoized component like before */}
      <MemoizedChild />
    </div>
  )
}

export default Parent
```

##### 2) If you'd like to globally memoize the `Child` component, go with the following:

<div class="filename">Method2.js</div>

```jsx
import React from 'react'

const Child = () => {
  console.log('Log from Child component.')
  return <div>This is Child component.</div>
}

export default React.memo(Child) // Export the Child component memoized default/globally
```

With these methods, we're now preventing unnecessary re-rendering problem. See you on next one!