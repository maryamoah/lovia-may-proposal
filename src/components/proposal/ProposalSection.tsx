'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { story } from '@/data/story';
import { revealUp, staggerContainer, viewportOnce } from './motion';

type ProposalSectionProps = {
  onYes: () => void;
};

export function ProposalSection({ onYes }: ProposalSectionProps) {
  const [attempts, setAttempts] = useState(0);
  const [off, setOff] = useState({ x: 0, y: 0 });
  const response = attempts > 0 ? story.proposal.softResponses[(attempts - 1) % story.proposal.softResponses.length] : '';

  function moveNo() {
    const next = attempts + 1;
    setAttempts(next);
    if (next > 3) {
      setOff({ x: 0, y: 0 });
      return;
    }
    setOff([
      { x: 24, y: -10 },
      { x: -22, y: 12 },
      { x: 16, y: 16 },
    ][next - 1]);
  }

  return (
    <section id="proposal" data-navigation-theme="dark" className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-6 py-20 text-center text-ivory sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,.12),transparent_18%),radial-gradient(circle_at_68%_32%,rgba(169,137,82,.24),transparent_30%),radial-gradient(circle_at_26%_72%,rgba(80,0,0,.24),transparent_34%),linear-gradient(rgba(27,18,14,.2),rgba(27,18,14,.9))]" />
      <motion.div aria-hidden="true" initial={{ opacity: 0.24, scale: 0.92 }} whileInView={{ opacity: 0.7, scale: 1 }} transition={{ duration: 2.4, ease: 'easeOut' }} className="absolute h-[32rem] w-[32rem] rounded-full border border-gold/15 bg-gold/5 blur-3xl" />
      <div className="absolute inset-0 light-leak" />
      <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,.85)]" />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative max-w-3xl">
        <motion.p variants={revealUp} className="eyebrow text-gold">{story.proposal.eyebrow}</motion.p>
        <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
          {story.proposal.lines.map((line, i) => (
            <motion.p
              key={line}
              variants={revealUp}
              className={`${i === 0 ? 'font-serif text-[clamp(2.45rem,7.5vw,5.6rem)]' : 'mx-auto max-w-2xl font-serif text-[clamp(1.55rem,4vw,3.15rem)]'} leading-[1.04]`}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <motion.div variants={revealUp} className="relative mx-auto mt-10 flex min-h-24 max-w-sm items-center justify-center gap-4 overflow-visible px-6">
          <button onClick={onYes} className="btn-primary rounded-none shadow-[0_18px_45px_rgba(0,0,0,.18)]">
            Yes, May
          </button>
          <motion.button animate={off} transition={{ type: 'spring', stiffness: 360, damping: 26 }} onMouseEnter={moveNo} onClick={moveNo} className="btn-secondary rounded-none">
            Not yet
          </motion.button>
        </motion.div>
        <p className="min-h-6 text-sm text-gold/85" aria-live="polite">
          {response}
        </p>
      </motion.div>
    </section>
  );
}
