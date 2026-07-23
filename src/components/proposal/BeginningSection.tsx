'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { InstagramScreenshot } from './InstagramScreenshot';

export function BeginningSection() {
  return (
    <section className="bg-cream px-6 py-24 text-espresso sm:px-10 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_.86fr] md:items-center">
        <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} className="max-w-2xl">
          <p className="eyebrow text-gold">Our beginning</p>
          <h2 className="mt-5 font-serif text-[clamp(2.7rem,7vw,6rem)] leading-[.95] tracking-[-.04em]">{story.beginning.heading}</h2>
          <p className="mt-8 text-lg leading-8 text-espresso/72">{story.beginning.body}</p>
        </motion.article>
        <InstagramScreenshot src={story.images.firstMessageScreenshot} />
      </div>
    </section>
  );
}
