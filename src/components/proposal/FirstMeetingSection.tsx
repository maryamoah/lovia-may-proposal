'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { story } from '@/data/story';
import { baseTransition } from './motion';

export function FirstMeetingSection() {
  const stickyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: stickyRef, offset: ['start end', 'end start'] });
  const lightScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);
  const lightY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section id="memories" ref={stickyRef} data-navigation-theme="dark" className="relative min-h-[145dvh] bg-espresso text-ivory">
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
  );
}
