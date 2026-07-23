'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';

export function BeginningSection() {
  return (
    <section className="chapter bg-ivory px-5 py-16 text-espresso sm:px-8 lg:py-20" aria-labelledby="invitation-title">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-gold">A private invitation</p>
        <h2 id="invitation-title" className="mt-4 font-serif text-balance text-[clamp(2.35rem,7vw,5.2rem)] leading-[.98] tracking-[-.035em]">
          Before the question, I wanted to bring you back to us.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty font-serif text-xl italic leading-8 text-espresso/68 sm:text-2xl sm:leading-9">
          Not every memory needs a crowd. Some are better held quietly, exactly like this, between May and Lovia.
        </p>
        <div className="mx-auto mt-10 h-px w-28 bg-gold/45" />
        <p className="mt-5 text-xs uppercase tracking-[.28em] text-espresso/45">Begin slowly</p>
      </motion.div>
    </section>
  );
}
