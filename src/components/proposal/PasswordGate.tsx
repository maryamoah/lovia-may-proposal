'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { story } from '@/data/story';

type PasswordGateProps = {
  onUnlock?: () => void;
  unlocked?: boolean;
};

export function PasswordGate({ onUnlock, unlocked = false }: PasswordGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (story.passwords.includes(code.trim().toLowerCase())) {
      setError(false);
      onUnlock?.();
    } else {
      setError(true);
    }
  }

  const waxSeal = (
    <div className="password-wax-seal mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b79a6b]/50 bg-[#6e1b1b] shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:h-20 sm:w-20">
      <span className="font-display text-3xl text-[#fbf8f2] sm:text-4xl">M</span>
    </div>
  );

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden bg-espresso px-5 py-8 text-ivory grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(183,154,107,.16),transparent_34%),radial-gradient(circle_at_50%_72%,rgba(110,27,27,.24),transparent_38%)]" />
      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.form
            key="password"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            onSubmit={submit}
            className="relative w-full max-w-[25rem] text-center"
          >
            <div className="relative overflow-hidden border border-[#b79a6b]/35 bg-[#efe3cf] px-6 pb-7 pt-8 text-espresso shadow-[0_28px_90px_rgba(0,0,0,.38)] sm:px-9 sm:pb-9 sm:pt-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,.42),transparent_35%),radial-gradient(circle_at_50%_0%,rgba(183,154,107,.20),transparent_35%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(150deg,transparent_49.5%,rgba(183,154,107,.35)_50%,transparent_50.5%),linear-gradient(210deg,transparent_49.5%,rgba(183,154,107,.35)_50%,transparent_50.5%)]" />
              <div className="relative">
                {waxSeal}
                <p className="eyebrow mt-6 text-gold">MAY · LOVIA</p>
                <p className="mt-2 text-sm text-espresso/60">For Lovia only.</p>
                <h1 className="mx-auto mt-4 max-w-[12ch] font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[.92] tracking-[-.04em] text-espresso">A private memory, waiting for you.</h1>
                <p id="password-helper" className="mx-auto mt-7 max-w-[18rem] text-sm text-espresso/62">Enter the date that made this real.</p>
                <label className="mt-7 block font-sans text-[0.68rem] font-semibold uppercase tracking-[.28em] text-gold" htmlFor="proposal-password">The day we finally met</label>
                <div className="mx-auto mt-4 max-w-[300px] border border-gold/45 bg-ivory/85 p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,.45),0_14px_34px_rgba(27,18,14,.13)]">
                  <input
                    id="proposal-password"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value.replace(/\D/g, '').slice(0, 8));
                      setError(false);
                    }}
                    autoComplete="off"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={8}
                    placeholder="DDMMYY"
                    className="block h-14 w-full appearance-none rounded-none border border-gold/30 bg-[#2a1a13] px-4 py-0 text-center font-sans text-[18px] leading-[3.5rem] tracking-[.18em] text-[#fbf8f2] caret-[#fbf8f2] outline-none transition duration-300 placeholder:text-[#fbf8f2]/36 placeholder:transition-opacity placeholder:duration-300 focus:border-gold/85 focus:bg-[#21140f] focus:shadow-[0_0_0_3px_rgba(183,154,107,.18)] focus:placeholder:opacity-0 focus-visible:outline-0"
                    aria-describedby="password-helper password-error"
                    aria-invalid={error}
                  />
                </div>
                <p id="password-error" className="mt-5 min-h-6 text-sm text-rose" aria-live="polite">{error ? 'That is not our key. Try the date May met Lovia.' : ''}</p>
                <button className="mx-auto mt-2 block w-full max-w-[300px] border border-[#b79a6b]/70 bg-[#6e1b1b] px-5 py-4 font-sans text-xs font-bold uppercase tracking-[.24em] text-[#fbf8f2] shadow-[0_14px_34px_rgba(110,27,27,.22)] transition duration-300 hover:-translate-y-0.5 hover:border-[#fbf8f2]/70 hover:bg-[#7d2222]">Break the seal</button>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div key="remembered" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative max-w-sm text-center">
            {waxSeal}
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 font-serif text-3xl italic text-ivory/86">You remembered.</motion.p>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-4 font-serif text-2xl text-ivory/86">Everything after this belongs to us.</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
