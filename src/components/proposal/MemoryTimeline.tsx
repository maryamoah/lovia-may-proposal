'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { story } from '@/data/story';
import { MemoryFilm } from './MemoryFilm';
import { OptionalImage } from './OptionalImage';

export function MemoryTimeline() {
  const firstMeeting = story.memories[1];
  const capeCoast = story.memories[2];
  const attieke = story.memories[3];
  const stickyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: stickyRef, offset: ['start end', 'end start'] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section id="memories" className="text-espresso">
      <section ref={stickyRef} className="relative min-h-[145dvh] bg-espresso text-ivory">
        <div className="sticky top-0 grid min-h-dvh overflow-hidden lg:grid-cols-[1.15fr_.85fr]">
          <motion.div style={{ scale: imageScale, y: imageY }} className="relative min-h-[55dvh] lg:min-h-dvh">
            <OptionalImage src={story.media.firstMeeting} alt={firstMeeting.title} className="absolute inset-0" sizes="(min-width: 1024px) 58vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,18,14,.18),rgba(27,18,14,.72)),linear-gradient(0deg,rgba(27,18,14,.75),transparent_45%)]" />
          </motion.div>
          <div className="relative grid place-items-center px-6 py-16 lg:min-h-dvh lg:px-12">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">{firstMeeting.eyebrow}</p>
              <h2 className="mt-5 font-serif text-[clamp(2.4rem,7vw,5.8rem)] leading-[.95] tracking-[-.035em]">{firstMeeting.title}</h2>
              <div className="mt-8 space-y-5">
                {firstMeeting.caption.split('. ').map((line, index) => (
                  <motion.p key={line} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ delay: index * 0.28 }} className="story-copy text-lg leading-8 text-ivory/72 sm:text-xl">
                    {line.replace(/\.$/, '')}.
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow text-gold">A funny little chapter</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[1.02] tracking-[-.035em]">Côte d’Ivoire, zero French, and one mission.</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} className="relative border-y border-gold/35 py-8">
            <p className="eyebrow text-gold">{attieke.eyebrow}</p>
            <h3 className="mt-3 font-serif text-[clamp(1.9rem,4vw,3.35rem)] leading-tight">{attieke.title}</h3>
            <p className="story-copy mt-5 max-w-2xl text-lg leading-8 text-espresso/68">{attieke.caption}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 text-center sm:px-10 lg:py-28">
        <motion.div initial={{ scale: 1.08, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.1 }} className="absolute inset-0">
          <OptionalImage src={story.media.capeCoast} alt={capeCoast.title} className="h-full w-full" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(27,18,14,.58),rgba(27,18,14,.62))]" />
        </motion.div>
        <div className="relative mx-auto max-w-4xl py-10 text-ivory">
          <p className="eyebrow text-gold">{capeCoast.eyebrow}</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,8vw,6.4rem)] leading-[.96] tracking-[-.035em]">{capeCoast.title}</h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            {capeCoast.caption.split('. ').map((line, index) => (
              <motion.p key={line} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ delay: index * 0.32 }} className="story-copy text-lg leading-8 text-ivory/82 sm:text-xl">
                {line.replace(/\.$/, '')}.
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 border-t border-gold/30 pt-9 md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="eyebrow text-gold">Selected memories</p>
              <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.15rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-.025em]">Only the moments we needed.</h2>
            </div>
            <p className="story-copy mt-5 max-w-sm text-sm leading-7 text-espresso/58 md:text-right">A concise rhythm of dates, journeys, ordinary plans, and the quiet certainty that this was becoming home.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {story.memories.slice(0, 1).map((memory) => (
              <motion.article key={memory.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="border border-gold/25 bg-cream/55 p-6 shadow-[0_18px_50px_rgba(27,18,14,.06)]">
                <p className="eyebrow text-gold">{memory.eyebrow}</p>
                <h3 className="mt-3 font-serif text-[clamp(1.85rem,3.6vw,3rem)] leading-tight">{memory.title}</h3>
                <p className="story-copy mt-4 max-w-md leading-7 text-espresso/68">{memory.caption}</p>
              </motion.article>
            ))}
          </div>
        </div>
        <MemoryFilm />
      </section>
    </section>
  );
}
