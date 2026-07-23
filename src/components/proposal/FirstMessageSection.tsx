'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { InstagramScreenshot } from './InstagramScreenshot';
import { revealLeft, revealRight, viewportOnce } from './motion';

export function FirstMessageSection() {
  return (
    <section data-navigation-theme="light" className="chapter bg-cream px-5 py-14 text-espresso sm:px-8 lg:py-[4.5rem]" aria-labelledby="first-message-title">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:items-center xl:gap-24">
        <motion.div variants={revealLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <p className="eyebrow text-gold">Preserved beginning</p>
          <h2 id="first-message-title" className="mt-4 max-w-3xl font-serif text-balance text-[clamp(2.05rem,5.2vw,4.4rem)] leading-[1.02] tracking-[-.035em]">
            {story.beginning.heading}
          </h2>
          <p className="story-copy memory-note mt-6 max-w-xl pl-4 text-lg italic leading-8 text-espresso/70 sm:text-xl">
            {story.beginning.annotation}
          </p>
          <p className="mt-8 max-w-xl text-sm leading-7 text-espresso/55">A small screen, a simple message, and the beginning of conversations that would become the best part of ordinary days.</p>
        </motion.div>
        <motion.div variants={revealRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute inset-x-8 top-12 h-64 rounded-full bg-gold/14 blur-3xl" />
          <InstagramScreenshot src={story.media.firstMessageScreenshot} />
        </motion.div>
      </div>
    </section>
  );
}
