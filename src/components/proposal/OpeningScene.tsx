'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { story } from '@/data/story';

export function OpeningScene() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.18], [0, 90]);

  return (
    <section id="beginning" className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-5 py-20 text-center text-ivory grain sm:px-6 sm:py-24">
      <motion.div style={{ y }} className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(185,152,91,.22),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(111,36,32,.22),transparent_32%)]" />
      <div className="particles" aria-hidden="true" />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative mx-auto max-w-5xl">
        <p className="eyebrow text-gold">{story.opening.eyebrow}</p>
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .25, duration: .8 }} className="mx-auto my-7 h-14 w-14 rounded-full border border-gold/35 before:mx-auto before:mt-4 before:block before:h-6 before:w-8 before:rotate-[-20deg] before:rounded-[50%] before:border before:border-gold/60 sm:my-9 sm:h-16 sm:w-16" />
        <h1 className="font-serif text-[clamp(2.75rem,10vw,7.25rem)] leading-[.92] tracking-[-.04em]">{story.opening.heading}</h1>
        <p className="story-copy mx-auto mt-6 max-w-2xl text-[clamp(1.05rem,2.4vw,1.55rem)] italic leading-8 text-ivory/76">{story.opening.supporting}</p>
        <p className="mt-6 text-xs uppercase tracking-[.24em] text-gold/75">{story.opening.date}</p>
      </motion.div>
      <span className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-[.62rem] uppercase tracking-[.34em] text-ivory/45">Scroll</span>
    </section>
  );
}
