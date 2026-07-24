'use client';

import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { revealUp, staggerContainer, viewportOnce } from './motion';

export function ProposalTransition() {
  return (
    <section data-navigation-theme="dark" className="bg-espresso px-5 py-16 text-center text-ivory sm:px-8 lg:px-12 lg:py-24">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mx-auto max-w-2xl space-y-6">
        {story.transitionToProposal.map((line) => (
          <motion.p key={line} variants={revealUp} className="font-serif text-2xl italic text-ivory/80 sm:text-4xl">
            {line}
          </motion.p>
        ))}
        <motion.button type="button" variants={revealUp} onClick={() => document.getElementById('proposal')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary mt-8">
          Ask me, May
        </motion.button>
      </motion.div>
    </section>
  );
}
