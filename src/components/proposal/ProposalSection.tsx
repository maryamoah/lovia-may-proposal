'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { story } from '@/data/story';

type ProposalSectionProps = { onYes: () => void };

export function ProposalSection({ onYes }: ProposalSectionProps) {
  const [attempts, setAttempts] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const response = attempts > 0 ? story.proposal.softResponses[(attempts - 1) % 2] : '';

  function moveNo() {
    const next = attempts + 1;
    setAttempts(next);
    if (next > 4) {
      setOffset({ x: 0, y: 0 });
      return;
    }
    const values = [
      { x: 28, y: -10 },
      { x: -24, y: 12 },
      { x: 18, y: 18 },
      { x: -12, y: -12 },
    ];
    setOffset(values[(next - 1) % values.length]);
  }

  return (
    <section className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-6 py-24 text-center text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(126,31,31,.22),transparent_35%)]" />
      <svg className="absolute right-4 top-16 h-56 w-56 text-gold/20 sm:right-20 sm:h-72 sm:w-72" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <path d="M94 171C104 133 116 94 153 64M83 121C52 113 46 85 65 66c20-20 54-10 60 18-25-18-49-8-42 37ZM125 87c-2-32 24-53 48-39 21 12 17 44-7 57-1-25-18-35-41-18Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative max-w-4xl">
        <p className="eyebrow text-gold">{story.proposal.eyebrow}</p>
        <h2 className="mt-6 font-serif text-[clamp(2.8rem,8vw,6.8rem)] leading-[.92] tracking-[-.04em]">{story.proposal.heading}</h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-ivory/76">{story.proposal.question}</p>
        <div className="relative mx-auto mt-12 flex min-h-28 max-w-sm items-center justify-center gap-4 overflow-hidden px-8">
          <button onClick={onYes} className="rounded-full bg-gradient-to-r from-[#9f7b38] via-gold to-[#d6bd78] px-7 py-4 text-sm font-semibold uppercase tracking-[.22em] text-espresso shadow-[0_0_45px_rgba(185,152,91,.28)]">Yes, May</button>
          <motion.button animate={offset} onMouseEnter={moveNo} onClick={moveNo} onFocus={moveNo} className="rounded-full border border-ivory/25 px-6 py-4 text-sm uppercase tracking-[.2em] text-ivory/70">Not yet</motion.button>
        </div>
        <p className="min-h-6 text-sm text-gold/85" aria-live="polite">{response}</p>
      </motion.div>
    </section>
  );
}
