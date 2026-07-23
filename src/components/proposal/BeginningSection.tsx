'use client';

import { motion } from 'framer-motion';

export function BeginningSection() {
  return (
    <section className="chapter bg-ivory px-5 py-12 text-espresso sm:px-8 lg:py-16" aria-labelledby="invitation-title">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[.75fr_1.25fr] md:items-end">
        <div className="hidden h-px bg-gold/45 md:block" />
        <div>
          <p className="eyebrow text-gold">A private invitation</p>
          <h2 id="invitation-title" className="mt-4 font-serif text-balance text-[clamp(2.1rem,5.5vw,4.7rem)] leading-[1.02] tracking-[-.035em]">
            Before the question, I wanted to bring you back to us.
          </h2>
          <p className="story-copy mt-6 max-w-2xl text-pretty text-lg italic leading-8 text-espresso/70 sm:text-xl">
            Not every memory needs a crowd. Some are better held quietly, exactly like this, between May and Lovia.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
