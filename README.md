# KrishanTours

A production-ready Next.js tourism website for a private Sri Lankan tour operator.

## Run locally

```bash
npm install
npm run dev
```

The production domain, telephone, WhatsApp number and Panadura address are configured in `lib/site.ts`. Contact and trip-planner submissions post to the server-side inquiry endpoint; SMTP delivery settings are documented below.

## VPS deployment

The site runs under PM2 using `ecosystem.config.cjs` on `127.0.0.1:3417`. The Nginx reverse-proxy configuration is in `deploy/nginx/krishantours.com`. Inquiry submissions are validated server-side, saved outside the public web root, and delivered over SMTP when the variables documented in `.env.example` are configured.

## Media

Photography is downloaded locally from Unsplash. The hero uses aerial Sri Lankan coastline footage from Pexels (video 32504550), used under the Pexels licence. The interactive island geometry is the free commercial-use Sri Lanka SVG from SimpleMaps. Replace preview assets with the operator's commissioned photography when available.
