'use client';

import { useState } from 'react';
import { story } from '@/data/story';

export function MemoryFilm() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <section className="bg-cream px-6 pb-24 text-espresso sm:px-10">
      <div className="mx-auto max-w-4xl border-y border-gold/25 py-12">
        <p className="eyebrow text-gold">{story.video.label}</p>
        <h2 className="mt-4 font-serif text-[clamp(2.2rem,6vw,4.5rem)] leading-none">{story.video.heading}</h2>
        <div className="mt-8 overflow-hidden rounded-sm border border-gold/50 bg-espresso p-2 shadow-[0_28px_80px_rgba(27,18,14,.18)]">
          <video className="aspect-video w-full object-contain" controls muted playsInline preload="metadata" poster={story.media.capeCoast} onError={() => setFailed(true)}>
            <source src={story.media.memoryVideo} type="video/mp4" />
          </video>
        </div>
        <p className="mt-5 font-serif text-xl italic text-espresso/70">{story.video.caption}</p>
      </div>
    </section>
  );
}
