# May + Lovia Proposal Website

A private, emotionally paced proposal website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Editing the story

All names, dates, passwords, timeline chapters, media paths, proposal wording, progress labels, captions, small-things lines, transition copy, celebration copy, and the letter live in `src/data/story.ts`.

## Manual media uploads

Binary media files are intentionally **not** included in this task. Upload the real files manually and make sure every filename matches exactly.

### Images

Upload only the still images that are still part of the experience:

```txt
public/images/first-instagram-message.jpg
public/images/cape-coast.jpg
public/images/lovia-portrait.jpg
```

The First Meeting and Proposal sections are cinematic text-and-light experiences with no photograph. The Celebration sequence uses the memory video as its emotional payoff instead of a still image. The Instagram screenshot is the only image with a designed placeholder because it anchors the beginning of the story; other still images are omitted gracefully if missing.

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

The video powers the celebration payoff and the optional memory-film section. If it is missing or cannot play, the memory-film section disappears cleanly and the celebration overlay falls back to text. When present, it is muted by default and uses inline playback.

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
