# Vercel OG + Next.js

This example shows how to use [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) with Next.js for Phi Protocol.

## Demo

- [Static Text](https://vercelog-zak.vercel.app/api/static?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Vercel Card](https://vercelog-zak.vercel.app/api/vercel?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Dynamic Text from URL Query](https://vercelog-zak.vercel.app/api/param?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Embed SVG Image](https://vercelog-zak.vercel.app/api/image-svg?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Dynamic PNG Image Based on URL Queries](https://vercelog-zak.vercel.app/api/dynamic-image?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Custom Font](https://vercelog-zak.vercel.app/api/custom-font?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Emoji](https://vercelog-zak.vercel.app/api/emoji?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)
- [Languages](https://vercelog-zak.vercel.app/api/language?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1)

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/edge-functions/vercel-og-nextjs&project-name=vercel-og-nextjs&repository-name=vercel-og-nextjs)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/edge-functions/vercel-og-nextjs
```

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
