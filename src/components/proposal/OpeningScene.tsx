'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';

export function OpeningScene() {
  return (
    <section className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-6 py-24 text-center text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(185,152,91,.16),transparent_36%)]" />
      <div className="particles" aria-hidden="true" />
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative max-w-4xl">
        <p className="eyebrow text-gold">{story.opening.eyebrow}</p>
        <div className="mx-auto my-10 h-16 w-16 rounded-full border border-gold/35 before:mx-auto before:mt-5 before:block before:h-6 before:w-8 before:rotate-[-20deg] before:rounded-[50%] before:border before:border-gold/60" />
        <h1 className="font-serif text-[clamp(3rem,11vw,8rem)] leading-[.9] tracking-[-.04em]">{story.opening.heading}</h1>
        <p className="mx-auto mt-8 max-w-xl font-serif text-[clamp(1.35rem,3vw,2rem)] italic text-ivory/76">{story.opening.supporting}</p>
      </motion.div>
      <span className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-[.65rem] uppercase tracking-[.4em] text-ivory/45">Scroll</span>
    </section>
  );
}
