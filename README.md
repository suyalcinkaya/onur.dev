# onur.dev

<img src="onurdev.png" alt="onur.dev og image" />

<br>
<br>

My personal website has evolved over the years — from a simple static HTML page, to `Create React App`, to `GatsbyJS`,
then to a combination of `Next.js`, `Chakra UI` and `MDX`, and finally to a combination of `Next.js`, `Tailwind CSS` and
`Contentful`. It serves as an app-like-web platform for my writings, highlighting my journey, and showcasing my
bookmarks.

## Overview

- `/` - Home page.
- `/writing` - Writing page.
- `/writing/[slug]` - Static pre-rendered writing pages using [Contentful](https://www.contentful.com).
- `/journey` - Journey page.
- `/stack` - Stack page.
- `/bookmarks` - Bookmarks page.
- `/bookmarks/[id]` - Static pre-rendered bookmarks pages using [Raindrop](https://raindrop.io/).

## Running Locally

```bash
$ git clone https://github.com/suyalcinkaya/onur.dev.git
$ cd onur.dev
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/suyalcinkaya/onur.dev/blob/master/.env.example).

## Built With

- [Next.js](https://nextjs.org)
- [Contentful](https://www.contentful.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)
- [Supabase](https://supabase.com/)
