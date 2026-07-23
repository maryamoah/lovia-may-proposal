'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';

export function WhyYouSection() {
  return (
    <section className="bg-espresso px-6 py-24 text-ivory sm:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Why you</p>
          <h2 className="mt-4 font-serif text-[clamp(2.8rem,7vw,6rem)] leading-none">{story.whyYou.heading}</h2>
          <p className="mt-7 text-lg leading-8 text-ivory/68">{story.whyYou.supporting}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-px border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-3">
          {story.whyYou.qualities.map((quality) => (
            <motion.article key={quality.title} whileHover={{ y: -4 }} className="bg-espresso p-7 transition md:min-h-44">
              <h3 className="font-serif text-3xl">{quality.title}</h3>
              <p className="mt-5 leading-7 text-ivory/62">{quality.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
