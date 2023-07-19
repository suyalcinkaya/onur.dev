# onur.dev

<img src="onurdev.png" alt="onur.dev — Onur Şuyalçınkaya" style="border-radius: 12px; border: 1px solid #e5e7eb" />

<br>
<br>

My personal website has evolved over the years — from a simple static HTML page, to `Create React App`, to `GatsbyJS`,
then to a combination of `Next.js`, `Chakra UI` and `MDX`, and finally to a combination of `Next.js`, `Tailwind CSS` and
`Contentful`. It serves as an app-like-web platform for my writings, highlighting my journey, showcasing my bookmarks,
and more.

## Overview

- `/` - Home page.
- `/[slug]` - Static pre-rendered pages using [Contentful](https://www.contentful.com). (e.g. `/stack`, `/about`)
- `/writing` - Writing page.
- `/writing/[slug]` - Static pre-rendered writing pages using [Contentful](https://www.contentful.com).
- `/journey` - Journey page.
- `/bookmarks` - Bookmarks page.
- `/bookmarks/[id]` - Static pre-rendered bookmarks pages using [Raindrop](https://raindrop.io/).
- `/api` - API routes.

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
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Contentful](https://www.contentful.com)
- [Raindrop](https://raindrop.io)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)
