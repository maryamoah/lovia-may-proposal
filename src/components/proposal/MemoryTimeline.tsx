'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';

export function MemoryTimeline() {
  return (
    <section id="memories" className="bg-cream px-6 pb-28 text-espresso sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex items-end justify-between gap-8 border-t border-gold/30 pt-10">
          <div>
            <p className="eyebrow text-gold">Selected memories</p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,6vw,4.8rem)] leading-none">Only the moments we needed.</h2>
          </div>
        </div>
        <div className="relative space-y-12 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-gold/35 md:space-y-4 md:before:left-1/2">
          {story.memories.map((memory, index) => (
            <motion.article
              key={memory.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className={`relative grid gap-5 pl-10 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2'}`}
            >
              <span className="absolute left-[.43rem] top-2 h-4 w-4 rounded-full border border-gold bg-cream md:left-[calc(50%-0.5rem)]" />
              <div className="md:px-10">
                <p className="eyebrow text-gold">{memory.eyebrow}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{memory.title}</h3>
                <p className="mt-4 leading-7 text-espresso/68">{memory.caption}</p>
              </div>
              {memory.image ? (
                <OptionalImage src={story.media[memory.image]} alt={memory.title} className="aspect-[4/5] max-w-xs border border-gold/25 md:mx-10" />
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
