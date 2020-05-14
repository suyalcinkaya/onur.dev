---
title: Removing Array Dublicates In ES6
description: Here are 4 ways to filter out duplicates from an array and return only the unique values.
date: '2019-01-25'
---

Here are 4 ways to filter out duplicates from an array and return only the unique values.

## 1. Set

`Set` is one of the cool thing happening in ES6. It's a new data structure that store unique values of any type. You can iterate through the elements of a set in insertion order. A value in the `Set` may only occur once; it is unique in the Set's collection.

<div class="filename">Set</div>

```jsx
const array = ['🦄', 1, 2, '🦄', '🦄', 3, 2]

[...new Set(array)]

// ['🦄', 1, 2, 3];
```

## 2. Filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

<div class="filename">Filter</div>

```jsx
const array = ['🦄', 1, 2, '🦄', '🦄', 3, 2]

array.filter((item, index) => array.indexOf(item) === index)

// ['🦄', 1, 2, 3];
```

### Retrieve the duplicate values

```jsx
const array = ['🦄', 1, 2, '🦄', '🦄', 3, 2]

array.filter((item, index) => array.indexOf(item) !== index)

// ['🦄','🦄', 2]
```

## 3. Reduce

In order to understand this option, let's understand what these two methods are doing: `reduce` and `includes`.

### .reduce()

The `reduce()` method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

### .includes()

The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

<div class="filename">.includes()</div>

```jsx
const array = ['🦄', 1, 2, '🦄', '🦄', 3, 2]

array.includes('🦄') // true
array.includes('3') // true
array.includes('23') // false
```

<div class="filename">Reduce</div>

```jsx
const array = ['🦄', 1, 2, '🦄', '🦄', 3, 2]

array.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])

// ['🦄', 1, 2, 3];
```

## 4. lodash

> Do not forget: The bundle size for lodash@4.17.11 is 24.2kB (minified + gzipped). [See here](https://bundlephobia.com/result?p=lodash@4.17.11)

```jsx
const array = ['🦄', 1, 2, '🦄', '🦄', 3, 2]

_.uniq(array)

// ['🦄', 1, 2, 3];
```
