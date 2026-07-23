'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { baseTransition } from './motion';

export function FirstMeetingSection() {
  return (
    <section id="memories" data-navigation-theme="dark" className="relative overflow-hidden bg-espresso px-5 py-20 text-ivory sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, scale: 1.02 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ ...baseTransition, duration: 0.55 }} className="relative min-h-[24rem] overflow-hidden rounded-sm border border-gold/25 bg-espresso/70 lg:min-h-[36rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_34%,rgba(255,255,255,.16),transparent_18%),radial-gradient(circle_at_56%_46%,rgba(169,137,82,.26),transparent_30%),linear-gradient(90deg,rgba(27,18,14,.18),rgba(27,18,14,.72)),linear-gradient(0deg,rgba(27,18,14,.75),transparent_45%)]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute inset-0 light-leak opacity-70" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={baseTransition} className="relative">
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
        </motion.div>
      </div>
    </section>
  );
}
