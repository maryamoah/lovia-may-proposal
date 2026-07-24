"use client";

import { motion } from "framer-motion";
import { sceneReveal, viewportOnce } from "./motion";

export function BeginningSection() {
  return (
    <section
      id="beginning"
      data-navigation-theme="light"
      className="chapter invitation-section-space bg-ivory safe-px text-espresso"
      aria-labelledby="invitation-title"
    >
      <motion.div
        variants={sceneReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[.75fr_1.25fr] md:items-end"
      >
        <div className="hidden h-px bg-gold/45 md:block" />
        <div>
          <p className="eyebrow text-gold">A private invitation</p>
          <h2
            id="invitation-title"
            className="mt-4 font-serif text-balance text-[clamp(2rem,5.5vw,4.7rem)] leading-[1.02] tracking-[-.035em]"
          >
            Before the question, I wanted to bring you back to us.
          </h2>
          <p className="story-copy mt-6 max-w-2xl text-pretty text-[1.03rem] italic leading-7 text-espresso/70 sm:text-xl sm:leading-8">
            Not every memory needs a crowd. Some are better held quietly,
            exactly like this, between May and Lovia.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
