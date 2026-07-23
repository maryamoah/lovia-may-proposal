'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { story } from '@/data/story';

export function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-cream px-6 py-24 text-espresso sm:px-10 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-center text-gold">The letter</p>
        <motion.div layout className="paper mt-8 border border-gold/40 p-6 shadow-[0_28px_90px_rgba(27,18,14,.14)] sm:p-10">
          <div className="text-center">
            <button onClick={() => setOpen((value) => !value)} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-rose font-serif text-3xl text-ivory shadow-[0_18px_45px_rgba(126,31,31,.28)]" aria-expanded={open} aria-controls="love-letter-copy">
              M
            </button>
            <h2 className="mt-7 font-serif text-[clamp(2.3rem,6vw,4.6rem)] leading-none">My Mommie</h2>
            <p className="mt-4 text-sm uppercase tracking-[.24em] text-gold">{open ? 'The letter is open' : 'Press the seal to open'}</p>
          </div>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.article id="love-letter-copy" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="mx-auto mt-10 max-w-2xl border-t border-gold/25 pt-8 font-serif text-[1.35rem] leading-9 text-espresso/82">
                  {story.letter.split('\n\n').map((paragraph) => (
                    <p key={paragraph} className="mb-6 whitespace-pre-line">{paragraph}</p>
                  ))}
                  <button onClick={() => setOpen(false)} className="mt-2 border border-gold/60 px-5 py-3 font-sans text-xs uppercase tracking-[.24em] text-gold">Collapse letter</button>
                </div>
              </motion.article>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
