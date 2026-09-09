# Efe Cankat Türkmen — Portfolio

Next.js (App Router) portfolio with Elegant/Pixel themes, light/dark modes, and EN/TR localization. Deployed to Firebase Hosting.

## Setup

```bash
npm install
cp .env.example .env.local
# Fill Firebase web config in .env.local (values from the old Flutter firebase_options)
npm run dev
```

## Resume

Place your resume at [`public/resume.pdf`](public/resume.pdf). The nav Resume link opens `/resume.pdf`.

## Build & deploy

```bash
npm run build          # static export → out/
firebase deploy --only hosting
# or
npm run deploy
```

## Features

- Dual visual themes: Elegant (Manrope + Cormorant) and Pixel (VT323 + Press Start 2P)
- Light / dark mode and English / Turkish copy
- Projects: Firestore `projects` (active) merged with static fallbacks
- Contact: writes to Firestore `messages` (same schema as the previous Flutter site)
