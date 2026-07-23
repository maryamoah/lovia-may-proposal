'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { story } from '@/data/story';

type OpeningSceneProps = {
  onComplete?: () => void;
  standalone?: boolean;
};

export function OpeningScene({ onComplete, standalone = false }: OpeningSceneProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.18], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 0.18], [1, 1.08]);
  const openingLines = [story.opening.heading, story.opening.supporting];

  return (
    <section id={standalone ? undefined : 'opening'} className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-5 py-20 text-center text-ivory sm:px-6 sm:py-24">
      <motion.div style={{ y, scale }} className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(185,152,91,.22),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(111,36,32,.22),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,4,3,.18),rgba(27,18,14,.75))]" />
      <div className="particles" aria-hidden="true" />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative mx-auto max-w-5xl">
        <p className="eyebrow text-gold">{story.opening.eyebrow}</p>
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .25, duration: .8 }} className="mx-auto my-7 h-14 w-14 rounded-full border border-gold/35 before:mx-auto before:mt-4 before:block before:h-6 before:w-8 before:rotate-[-20deg] before:rounded-[50%] before:border before:border-gold/60 sm:my-9 sm:h-16 sm:w-16" />
        <div className="space-y-5">
          {openingLines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.55 + index * 0.65, duration: 0.9 }}
              className={index === 0 ? 'font-serif text-[clamp(2.75rem,10vw,7.25rem)] leading-[.92] tracking-[-.04em]' : 'story-copy mx-auto max-w-2xl text-[clamp(1.05rem,2.4vw,1.55rem)] leading-8 text-ivory/76'}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }} className="mt-6 text-xs uppercase tracking-[.24em] text-gold/75">{story.opening.date}</motion.p>
        {standalone ? (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.55 }}
            onClick={onComplete}
            className="btn-primary mt-10"
          >
            Begin our story
          </motion.button>
        ) : null}
      </motion.div>
      {standalone ? null : <span className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-[.62rem] uppercase tracking-[.34em] text-ivory/45">Scroll</span>}
    </section>
  );
}
