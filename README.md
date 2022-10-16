# onur.dev

<img src="onurdev.png" alt="onur.dev og image" />

<br>
<br>

My personal website has transformed over the years - from a static HTML site, to `Create React App`, to `GatsbyJS`, to
`Next.js + Chakra UI + MDX` combo and finally to `Next.js + Tailwind CSS + Contentful` combo. It provides a platform for
my writing and to showcase my journey.

## Overview

- `/` - Home page.
- `pages/writing/[slug]` - Static pre-rendered writing pages using [Contentful](https://www.contentful.com).
- `pages/about` - About page.
- `pages/journey` - Journey page.
- `pages/stack` - Stack page.

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
