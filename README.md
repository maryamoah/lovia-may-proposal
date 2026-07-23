# May + Lovia Proposal Website

A premium cinematic proposal website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Editing the story
All names, dates, passwords, timeline chapters, image paths, proposal wording, and the letter live in `src/data/story.ts`.

## Images
Binary media files are intentionally **not** included in this pull request. After the pull request is merged, upload the real photos manually into `public/images` using these expected names:

- `photo1.jpg` through `photo9.jpg`
- `first-instagram-message.jpg` for the first-message screenshot

The app keeps `public/images/.gitkeep` so the folder exists in git. If a JPG is missing, the website automatically displays a text-based SVG placeholder from `public/placeholders`. Use compressed portrait-friendly images for best iPhone performance.

## Audio
Binary audio is intentionally **not** included in this pull request. After the pull request is merged, upload your locally owned copy of the song manually at:

```txt
public/audio/sweet-lady.mp3
```

The app keeps `public/audio/.gitkeep` so the folder exists in git. If the MP3 is missing or cannot be played, the music control remains disabled without showing an error. Music only starts after the password interaction to respect browser autoplay rules.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy to Vercel
Import this repository in Vercel, keep the default Next.js settings, and deploy. Upload the real images and optional MP3 after merge/deployment according to your preferred private asset workflow.
