'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { MemoryFilm } from './MemoryFilm';
import { OptionalImage } from './OptionalImage';

export function MemoryTimeline() {
  return (
    <section id="memories" className="bg-cream px-5 pb-20 pt-4 text-espresso sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 border-t border-gold/30 pt-9 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p className="eyebrow text-gold">Selected memories</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.15rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-.025em]">Only the moments we needed.</h2>
          </div>
          <p className="story-copy mt-5 max-w-sm text-sm italic leading-7 text-espresso/58 md:text-right">A rhythm of dates, journeys, ordinary plans, and the quiet certainty that this was becoming home.</p>
        </div>
        <div className="relative space-y-9 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-gold/35 md:space-y-6 md:before:left-1/2">
          {story.memories.map((memory, index) => (
            <motion.article
              key={memory.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative grid gap-5 pl-10 md:grid-cols-2 md:items-center md:pl-0 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2'}`}
            >
              <span className="absolute left-[.43rem] top-2 h-4 w-4 rounded-full border border-gold bg-cream md:left-[calc(50%-0.5rem)]" />
              <div className="md:px-10">
                <p className="eyebrow text-gold">{memory.eyebrow}</p>
                <h3 className="mt-3 font-serif text-[clamp(1.85rem,3.6vw,3rem)] leading-tight">{memory.title}</h3>
                <p className="mt-4 max-w-md leading-7 text-espresso/68">{memory.caption}</p>
              </div>
              {memory.image ? (
                <OptionalImage src={story.media[memory.image]} alt={memory.title} className="cinematic-frame aspect-[4/5] max-w-xs border border-gold/25 md:mx-10" />
              ) : <div className="hidden md:block" />}
            </motion.article>
          ))}
        </div>
      </div>
      <MemoryFilm />
    </section>
  );
}
