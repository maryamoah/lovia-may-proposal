'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';
import { baseTransition } from './motion';

export function FunnyMomentSection() {
  return (
    <section data-navigation-theme="light" className="bg-ivory px-5 py-16 text-espresso sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={baseTransition}>
          <OptionalImage src={story.media.attiekeFunnyMoment} alt="May and Lovia sharing the attiéké funny moment" className="w-full rounded-sm border border-gold/30 bg-cream shadow-[0_28px_70px_rgba(27,18,14,.12)]" imageClassName="h-auto w-full object-contain" sizes="(min-width: 1024px) 55vw, 100vw" width={1200} height={900} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={baseTransition} className="lg:pl-6">
          <p className="eyebrow text-gold">{story.attieke.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[1.02] tracking-[-.035em]">{story.attieke.heading}</h2>
          <h3 className="mt-6 font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-tight text-espresso/88">{story.attieke.supporting}</h3>
          <p className="story-copy mt-5 max-w-2xl text-lg leading-8 text-espresso/68">{story.attieke.body}</p>
          <p className="mt-7 inline-block border-y border-gold/35 py-3 font-serif text-2xl italic text-gold">{story.attieke.annotation}</p>
        </motion.div>
      </div>
    </section>
  );
}
