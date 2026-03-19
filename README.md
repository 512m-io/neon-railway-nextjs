---
title: Neon, Next.js, Railway
description: A Next.js app using Neon database.
tags:
  - postgres
  - neon
  - serverless
  - next.js
---

# Neon, Railway & Next.js

This is a [Next.js](https://nextjs.org/) app that uses [Instagres](https://neon.new/) to instantly generate a claimable database for you at [Neon](https://neon.com).

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/nextjs-with-neon-postgres?referralCode=4OEw4T&utm_medium=integration&utm_source=template&utm_campaign=generic)

## Features

- Everything you get with Next.js
- Full power of Postgres enhanced by Neon

## Local Development

1. Pick your package manager and install dependencies.
2. Run the `seed` task so the connection string is generated and the dabatase is seeded.
3. Run the `dev` to have your local server running on [http://localhost:3000](http://localhost:3000)

| Package Manager | Install        | Seed            | Dev           |
| --------------- | -------------- | --------------- | ------------- |
| `npm`           | `npm install`  | `npm run seed`  | `npm run dev` |
| `pnpm`          | `pnpm install` | `pnpm run seed` | `pnpm dev`    |
| `yarn`          | `yarn install` | `yarn seed`     | `yarn dev`    |
| `bun`           | `bun install`  | `bun run seed`  | `bun dev`     |

---

<div align="right">
<a href="https://neon.new?utm_source=railway&utm_medium=nextjs-template" target="_blank"> <img src="/public/instagres.svg" width="50" /> Instagres
</a> by Neon
</div>
