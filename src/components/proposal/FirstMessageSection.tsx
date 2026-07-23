'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { InstagramScreenshot } from './InstagramScreenshot';

export function FirstMessageSection() {
  return (
    <section className="chapter bg-cream px-5 py-16 text-espresso sm:px-8 lg:py-20" aria-labelledby="first-message-title">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <p className="eyebrow text-gold">Preserved beginning</p>
          <h2 id="first-message-title" className="mt-4 font-serif text-balance text-[clamp(2.15rem,6vw,4.8rem)] leading-[.98] tracking-[-.035em]">
            {story.beginning.heading}
          </h2>
          <p className="mt-6 max-w-md font-serif text-xl italic leading-8 text-espresso/68 sm:text-2xl">
            {story.beginning.annotation}
          </p>
        </motion.div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-x-10 top-10 -z-0 h-64 rounded-full bg-gold/12 blur-3xl" />
          <InstagramScreenshot src={story.media.firstMessageScreenshot} />
        </div>
      </div>
    </section>
  );
}
