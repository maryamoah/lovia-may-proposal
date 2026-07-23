'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { story } from '@/data/story';

type ProposalSectionProps = {
  onYes: () => void;
};

export function ProposalSection({ onYes }: ProposalSectionProps) {
  const [attempts, setAttempts] = useState(0);
  const [bg, setBg] = useState(true);
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
    <section id="proposal" data-navigation-theme="dark" className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-6 py-24 text-center text-ivory">
      {bg ? <Image src={story.media.proposalImage} alt="" fill sizes="100vw" className="object-cover opacity-45" onError={() => setBg(false)} /> : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(169,137,82,.18),transparent_28%),linear-gradient(rgba(27,18,14,.58),rgba(27,18,14,.88))]" />
      <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,.85)]" />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative max-w-4xl">
        <p className="eyebrow text-gold">{story.proposal.eyebrow}</p>
        <div className="mt-8 space-y-5">
          {story.proposal.lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.55 }}
              className={`${i === 0 ? 'font-serif text-[clamp(3rem,9vw,7rem)]' : 'mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,4rem)]'} leading-tight`}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <div className="relative mx-auto mt-12 flex min-h-28 max-w-sm items-center justify-center gap-4 overflow-visible px-6">
          <button onClick={onYes} className="btn-primary rounded-none shadow-[0_18px_45px_rgba(0,0,0,.18)]">
            Yes, May
          </button>
          <motion.button animate={off} onMouseEnter={moveNo} onClick={moveNo} className="btn-secondary rounded-none">
            Not yet
          </motion.button>
        </div>
        <p className="min-h-6 text-sm text-gold/85" aria-live="polite">
          {response}
        </p>
      </motion.div>
    </section>
  );
}
