'use client';

import { story } from '@/data/story';

type StoryProgressProps = { hidden?: boolean };

export function StoryProgress({ hidden = false }: StoryProgressProps) {
  if (hidden) return null;
  return (
    <aside aria-label="Story chapters" className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="space-y-2 rounded-full border border-gold/25 bg-espresso/72 px-3 py-4 shadow-[0_18px_45px_rgba(0,0,0,.18)] backdrop-blur">
        {story.progressLabels.map((item) => (
          <button key={item.target} onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })} className="block rounded-full px-2 py-1 text-left text-[.6rem] uppercase tracking-[.2em] text-ivory/72 transition hover:bg-ivory/10 hover:text-gold focus-visible:text-gold">
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
