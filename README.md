# SoundCloud Discover — design rebuild

A faithful rebuild of the **soundcloud.com Discover** web app, built with [Astro](https://astro.build). Dark app shell, SoundCloud-orange signal color, and the signature animated play bar with a live waveform.

> Design demo — not affiliated with SoundCloud.

## Features

- **App shell** — fixed 46px header (logo · Home/Feed/Library · search · Sign in / Create account / Upload) and a fixed 66px bottom **play bar** with an animated waveform.
- **Discover feed** — horizontal "shelves": Trending by genre, Charts: Top 50, Artists to watch out for, New & hot, Curated by SoundCloud.
- **Working player** — click any track to load it into the play bar; progress advances in real time with auto-advance, seek, play/pause, prev/next, shuffle/repeat, like, and volume.
- **Live search** filters the whole feed; genre tiles, circular artist cards with Follow, stacked playlist cards, hover effects, and scroll-reveal.
- Responsive down to mobile with a drawer menu.

Content is generated placeholder copy; imagery uses [picsum.photos](https://picsum.photos) stock photos with fixed seeds.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Tech

- Astro (static output), vanilla CSS custom properties, and small vanilla-JS islands — no UI framework.
- Type via Inter (a substitute for SoundCloud's Söhne).
