# May + Lovia Proposal Website

A private, emotionally paced proposal website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Editing the story

All names, dates, passwords, timeline chapters, media paths, proposal wording, progress labels, captions, small-things lines, transition copy, celebration copy, and the letter live in `src/data/story.ts`.

## Manual media uploads

Binary media files are intentionally **not** included in this task. Upload the real files manually and make sure every filename matches exactly.

### Images

Upload images to these exact paths:

```txt
public/images/first-instagram-message.jpg
public/images/first-meeting.jpg
public/images/cape-coast.jpg
public/images/lovia-portrait.jpg
public/images/proposal.jpg
public/images/celebration.jpg
```

The Instagram screenshot is the only image with a designed placeholder because it anchors the beginning of the story. All other images are optional and are omitted gracefully if missing, so the site should not show broken image icons or large empty spaces.

### Audio

Upload the song to this exact path:

```txt
public/audio/sweet-lady.mp3
```

The custom music control starts gently after the password gate is opened. If the file is missing or cannot be played, the control hides without exposing a browser audio player.

### Optional video

Upload the optional memory film to this exact path:

```txt
public/video/our-memory.mp4
```

The video is optional. If it is missing, the memory-film section disappears cleanly. When present, it is muted by default, uses inline playback, and uses `public/images/cape-coast.jpg` as its poster image when available.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

## Deploy to Vercel

Import this repository in Vercel, keep the default Next.js settings, and deploy. When media files are committed to `main`, Vercel redeploys automatically and the site will use the exact filenames documented above.
