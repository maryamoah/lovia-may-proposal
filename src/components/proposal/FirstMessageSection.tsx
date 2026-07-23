'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { InstagramScreenshot } from './InstagramScreenshot';

export function FirstMessageSection() {
  return (
    <section className="chapter bg-cream px-5 py-14 text-espresso sm:px-8 lg:py-[4.5rem]" aria-labelledby="first-message-title">
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_.85fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <p className="eyebrow text-gold">Preserved beginning</p>
          <h2 id="first-message-title" className="mt-4 max-w-3xl font-serif text-balance text-[clamp(2.05rem,5.2vw,4.4rem)] leading-[1.02] tracking-[-.035em]">
            {story.beginning.heading}
          </h2>
          <p className="story-copy memory-note mt-6 max-w-xl pl-4 text-lg italic leading-8 text-espresso/70 sm:text-xl">
            {story.beginning.annotation}
          </p>
          <p className="mt-8 max-w-xl text-sm leading-7 text-espresso/55">A small screen, a simple message, and the beginning of conversations that would become the best part of ordinary days.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20, rotate: 1.5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: 0.35 }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-x-8 top-12 h-64 rounded-full bg-gold/14 blur-3xl" />
          <InstagramScreenshot src={story.media.firstMessageScreenshot} />
        </motion.div>
      </div>
    </section>
  );
}
