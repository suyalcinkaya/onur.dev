---
title: Converting 10 Digit Timestamp To Date
description: Converting 10 digit timestamp might seem confusing.
date: '2019-01-24'
---

Converting/reading 10 digit timestamp might seem confusing. I found this value in a field of a JSON response from an API where I was expecting a date. At the first, I couldn't figure out how to convert it to date for UI. After some research I found that the 10-digit timestamps represent the number of seconds.

Anyway, history lesson finished. How do you convert that to something useful in Javascript?

<div class="filename">Timestamp</div>

```jsx
const ts = 1504095567183
```

## Native

```jsx
new Date(ts)
```

## Moment.js

```jsx
moment(ts)
```

## Day.js

```jsx
dayjs.unix(ts)
```