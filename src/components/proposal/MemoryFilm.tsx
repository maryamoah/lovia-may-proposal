"use client";

import { useState } from "react";
import { story } from "@/data/story";

export function MemoryFilm() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <div className="mx-auto mt-16 max-w-5xl border-y border-gold/25 py-10">
      <div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
        <div>
          <p className="eyebrow text-gold">{story.video.label}</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4.8vw,3.8rem)] leading-none">
            {story.video.heading}
          </h2>
          <p className="story-copy mt-5 text-lg italic leading-8 text-espresso/70">
            {story.video.caption}
          </p>
        </div>
        <div className="overflow-hidden rounded-sm border border-gold/45 bg-espresso p-2 shadow-[0_28px_80px_rgba(27,18,14,.18)]">
          <video
            className="aspect-video w-full object-contain"
            controls
            muted
            playsInline
            preload="metadata"
            poster={story.media.capeCoast}
            onError={() => setFailed(true)}
          >
            <source src={story.media.celebrationVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
