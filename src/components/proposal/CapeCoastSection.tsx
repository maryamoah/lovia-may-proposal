'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';
import { baseTransition } from './motion';

export function CapeCoastSection() {
  return (
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
  );
}
