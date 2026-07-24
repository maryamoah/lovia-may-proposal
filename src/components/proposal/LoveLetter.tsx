'use client';

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { story } from '@/data/story';
import { overlayTransition, textReveal, textTransition, viewportText } from './motion';

type LoveLetterProps = {
  onReadingChange?: (open: boolean) => void;
};

export function LoveLetter({ onReadingChange }: LoveLetterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useEffect(() => onReadingChange?.(open), [open, onReadingChange]);

  return (
    <section id="letter" ref={ref} data-navigation-theme="light" className={`relative bg-cream px-5 py-[4.5rem] text-espresso sm:px-10 lg:py-24 ${open ? 'z-10' : ''}`}>
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-50 h-1 origin-left bg-gold/70 sm:hidden" />
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          {story.letterIntro.map((line, index) => (
            <motion.p key={line} variants={textReveal} initial="hidden" whileInView="visible" viewport={viewportText} transition={{ ...textTransition, delay: index * 0.08 }} className="font-serif text-2xl italic text-espresso/70 sm:text-3xl">
              {line}
            </motion.p>
          ))}
        </div>
        <motion.div layout className="paper mt-8 border border-gold/40 p-6 shadow-[0_28px_90px_rgba(27,18,14,.14)] sm:p-10">
          <div className="text-center">
            <button type="button" onClick={() => setOpen((value) => !value)} className="wax-seal mx-auto grid h-20 w-20 place-items-center rounded-full bg-rose font-serif text-3xl text-ivory" aria-expanded={open} aria-controls="love-letter-copy">
              M
            </button>
            <h2 className="mt-7 font-serif text-[clamp(2.3rem,6vw,4.6rem)] leading-none">My Mommie</h2>
            <p className="mt-4 text-sm uppercase tracking-[.24em] text-gold">{open ? 'Read slowly' : 'Press the seal to open'}</p>
          </div>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.article id="love-letter-copy" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={overlayTransition} className="overflow-hidden">
                <div className="story-copy mx-auto mt-10 max-w-3xl border-t border-gold/25 pt-8 text-[1.08rem] leading-8 text-espresso/82 sm:text-[1.28rem] sm:leading-9">
                  <p className="mb-8 text-right font-sans text-sm uppercase tracking-[.18em] text-gold">{story.letterDate}</p>
                  {story.letter.split('\n\n').map((paragraph) => (
                    <p key={paragraph} className="mb-7 whitespace-pre-line">{paragraph}</p>
                  ))}
                  <p className="mb-8 font-sans text-base text-espresso/70">{story.letterPostscript}</p>
                  <button type="button" onClick={() => setOpen(false)} className="btn-primary mt-2">Close letter</button>
                </div>
              </motion.article>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
