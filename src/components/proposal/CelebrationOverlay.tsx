'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';

type CelebrationOverlayProps = {
  onReplay: () => void;
  onToggleMusic: () => void;
};

export function CelebrationOverlay({ onReplay, onToggleMusic }: CelebrationOverlayProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center overflow-hidden bg-espresso p-6 text-center text-ivory">
      <div className="absolute inset-0 light-leak" />
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 26 }).map((_, index) => (
          <motion.span key={index} initial={{ y: '-10vh', opacity: 0 }} animate={{ y: '110vh', opacity: [0, 1, 0], rotate: 120 }} transition={{ duration: 2.8 + (index % 5) * 0.25, delay: index * 0.025 }} className="absolute h-2 w-1 bg-gold/70" style={{ left: `${(index * 37) % 100}%` }} />
        ))}
      </div>
      <div className="relative max-w-3xl">
        <OptionalImage src={story.images.celebration} alt="Celebration" className="mx-auto mb-8 aspect-[4/3] w-full max-w-sm border border-gold/25" />
        <p className="eyebrow text-gold">May + Lovia</p>
        <h2 className="mt-4 font-serif text-[clamp(3rem,10vw,7rem)] leading-none">{story.yes.heading}</h2>
        {story.yes.lines.map((line) => (
          <p key={line} className="mt-4 font-serif text-2xl italic text-ivory/80">{line}</p>
        ))}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button onClick={onReplay} className="border border-gold/60 px-6 py-3 text-xs uppercase tracking-[.24em] text-gold">Replay</button>
          <button onClick={onToggleMusic} className="border border-ivory/25 px-6 py-3 text-xs uppercase tracking-[.24em] text-ivory/75">Music toggle</button>
        </div>
      </div>
    </motion.div>
  );
}
