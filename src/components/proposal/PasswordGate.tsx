'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { story } from '@/data/story';

type PasswordGateProps = {
  onOpen: () => void;
};

export function PasswordGate({ onOpen }: PasswordGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [sealed, setSealed] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = code.trim().toLowerCase();
    if (story.passwords.includes(normalized)) {
      setSealed(true);
      setError(false);
      return;
    }
    setError(true);
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] grid min-h-dvh place-items-center overflow-hidden bg-espresso px-6 py-10 text-ivory"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(185,152,91,.15),transparent_34%)]" />
      <AnimatePresence mode="wait">
        {!sealed ? (
          <motion.form
            key="password"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            onSubmit={submit}
            className="relative w-full max-w-sm text-center"
          >
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full border border-gold/70 text-gold">
              <span aria-hidden="true" className="text-lg">⌕</span>
            </div>
            <p className="eyebrow text-gold">This letter is just for you</p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,10vw,4.8rem)] leading-[.95]">Mommie, enter our date</h1>
            <label className="mt-8 block text-sm text-ivory/65" htmlFor="proposal-password">
              The day we finally met
            </label>
            <input
              id="proposal-password"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setError(false);
              }}
              autoComplete="off"
              inputMode="text"
              className="mt-4 w-full rounded-none border-b border-gold/40 bg-transparent px-3 py-4 text-center text-lg tracking-[.24em] text-ivory outline-none transition focus:border-gold"
              aria-invalid={error}
            />
            {error ? <p className="mt-3 text-sm text-rose">That is not our key.</p> : null}
            <button className="mt-8 w-full border border-gold/70 px-6 py-4 text-xs uppercase tracking-[.28em] text-gold transition hover:bg-gold hover:text-espresso">
              Unlock
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="seal"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative text-center"
          >
            <button
              onClick={onOpen}
              aria-label="Press the seal to open the letter"
              className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-rose font-serif text-5xl text-ivory shadow-[inset_0_0_0_2px_rgba(245,239,228,.14),0_24px_80px_rgba(126,31,31,.45)] transition hover:scale-105 focus:outline focus:outline-2 focus:outline-gold"
            >
              M
            </button>
            <p className="mt-8 font-serif text-3xl">A letter for Mommie</p>
            <p className="mt-3 text-sm uppercase tracking-[.24em] text-gold/80">Press the seal to open</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
