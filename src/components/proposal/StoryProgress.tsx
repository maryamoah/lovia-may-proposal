'use client';

import { story } from '@/data/story';

type StoryProgressProps = { hidden?: boolean };

export function StoryProgress({ hidden = false }: StoryProgressProps) {
  if (hidden) return null;
  return (
    <aside aria-label="Story chapters" className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="space-y-3 border-l border-gold/25 pl-4">
        {story.progressLabels.map((item) => (
          <button key={item.target} onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })} className="block text-left text-[.62rem] uppercase tracking-[.22em] text-ivory/45 transition hover:text-gold focus-visible:text-gold">
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
