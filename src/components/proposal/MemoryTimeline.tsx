'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';
import { baseTransition } from './motion';

export function MemoryTimeline() {
  const stickyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: stickyRef, offset: ['start end', 'end start'] });
  const lightScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);
  const lightY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section id="memories" className="text-espresso">
      <section ref={stickyRef} data-navigation-theme="dark" className="relative min-h-[145dvh] bg-espresso text-ivory">
        <div className="sticky top-0 grid min-h-dvh overflow-hidden lg:grid-cols-[1.15fr_.85fr]">
          <motion.div style={{ scale: lightScale, y: lightY }} className="relative min-h-[55dvh] overflow-hidden lg:min-h-dvh">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_34%,rgba(255,255,255,.16),transparent_18%),radial-gradient(circle_at_56%_46%,rgba(169,137,82,.26),transparent_30%),linear-gradient(90deg,rgba(27,18,14,.18),rgba(27,18,14,.72)),linear-gradient(0deg,rgba(27,18,14,.75),transparent_45%)]" />
            <motion.div aria-hidden="true" animate={{ opacity: [0.32, 0.72, 0.32], scale: [0.92, 1.04, 0.92] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute inset-0 light-leak opacity-70" />
          </motion.div>
          <div className="relative grid place-items-center px-6 py-16 lg:min-h-dvh lg:px-12">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">{story.firstMeeting.eyebrow}</p>
              <h2 className="mt-5 font-serif text-[clamp(2.4rem,7vw,5.8rem)] leading-[.95] tracking-[-.035em]">{story.firstMeeting.heading}</h2>
              <p className="story-copy mt-7 text-lg italic leading-8 text-ivory/78 sm:text-xl">{story.firstMeeting.intro}</p>
              <div className="mt-8 space-y-5">
                {story.firstMeeting.lines.map((line, index) => (
                  <motion.p key={line} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ ...baseTransition, delay: index * 0.08 }} className="story-copy text-lg leading-8 text-ivory/72 sm:text-xl">
                    {line}
                  </motion.p>
                ))}
              </div>
              <p className="mt-9 border-l border-gold/50 pl-5 font-serif text-2xl italic leading-tight text-gold sm:text-3xl">{story.firstMeeting.closing}</p>
            </div>
          </div>
        </div>
      </section>

      <section data-navigation-theme="light" className="bg-ivory px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={baseTransition}>
            <OptionalImage src={story.media.attiekeFunnyMoment} alt="May and Lovia sharing the attiéké funny moment" className="w-full rounded-sm border border-gold/30 bg-cream shadow-[0_28px_70px_rgba(27,18,14,.12)]" imageClassName="h-auto w-full object-contain" sizes="(min-width: 1024px) 55vw, 100vw" width={1200} height={900} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={baseTransition} className="lg:pl-6">
            <p className="eyebrow text-gold">{story.attieke.eyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[1.02] tracking-[-.035em]">{story.attieke.heading}</h2>
            <h3 className="mt-6 font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-tight text-espresso/88">{story.attieke.supporting}</h3>
            <p className="story-copy mt-5 max-w-2xl text-lg leading-8 text-espresso/68">{story.attieke.body}</p>
            <p className="mt-7 inline-block border-y border-gold/35 py-3 font-serif text-2xl italic text-gold">{story.attieke.annotation}</p>
          </motion.div>
        </div>
      </section>

      <section data-navigation-theme="dark" className="relative overflow-hidden bg-espresso px-5 py-20 text-ivory sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
          <motion.div initial={{ scale: 1.03, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ ...baseTransition, duration: 0.55 }} className="relative min-h-[58vh] overflow-hidden rounded-sm border border-gold/25 bg-espresso/25 lg:min-h-[74vh]">
            <OptionalImage src={story.media.capeCoast} alt="Cape Coast memory" className="absolute inset-0 h-full w-full" imageClassName="object-cover" sizes="(min-width: 1024px) 65vw, 100vw" objectPosition={story.capeCoast.objectPosition} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={baseTransition} className="relative grid content-center bg-espresso/82 p-2 lg:-ml-16 lg:p-10">
            <p className="eyebrow text-gold">{story.capeCoast.eyebrow}</p>
            <h2 className="mt-5 font-serif text-[clamp(2.5rem,8vw,6.4rem)] leading-[.96] tracking-[-.035em]">{story.capeCoast.heading}</h2>
            <p className="story-copy mt-8 max-w-2xl text-lg leading-8 text-ivory/82 sm:text-xl">{story.capeCoast.body}</p>
            <p className="mt-8 font-serif text-[clamp(2rem,4.5vw,4rem)] leading-tight text-gold">{story.capeCoast.closing}</p>
          </motion.div>
        </div>
      </section>

      <section data-navigation-theme="dark" className="bg-espresso px-5 pb-20 text-ivory sm:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
          <OptionalImage src={story.media.feltAtHome} alt="The moment May felt at home with Lovia" className="min-h-[56vh] overflow-hidden rounded-sm border border-gold/25 bg-black lg:min-h-[76vh]" imageClassName="object-cover" sizes="(min-width: 1024px) 70vw, 100vw" objectPosition={story.feltAtHome.objectPosition} />
          <div className="lg:-ml-20 lg:bg-espresso/88 lg:p-10">
            <p className="eyebrow text-gold">{story.feltAtHome.eyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(2.35rem,6vw,5rem)] leading-[1.02] tracking-[-.035em]">{story.feltAtHome.heading}</h2>
            <p className="story-copy mt-6 text-lg leading-8 text-ivory/76 sm:text-xl">{story.feltAtHome.body}</p>
            <p className="mt-8 font-serif text-[clamp(1.9rem,4vw,3.4rem)] leading-tight text-gold">{story.feltAtHome.closing}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
