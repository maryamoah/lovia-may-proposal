'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { story } from '@/data/story';

type PasswordGateProps = {
  onUnlock?: () => void;
  onOpen?: () => void;
  unlocked?: boolean;
};

export function PasswordGate({ onUnlock, onOpen, unlocked = false }: PasswordGateProps) {
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

  return (
    <div className="grid min-h-dvh place-items-center overflow-hidden bg-espresso px-5 py-10 text-ivory grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(169,137,82,.14),transparent_34%)]" />
      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.form key="password" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} onSubmit={submit} className="relative w-full max-w-sm text-center">
            <div className="wax-seal mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full bg-rose text-center font-serif text-2xl text-ivory">M</div>
            <p className="eyebrow text-gold">For Lovia only.</p>
            <h1 className="mt-4 font-serif text-balance text-[clamp(2.35rem,10vw,4.5rem)] leading-[.95] tracking-[-.035em]">Enter our date, Mommie.</h1>
            <label className="mt-8 block text-sm text-ivory/62" htmlFor="proposal-password">The day we finally met</label>
            <input id="proposal-password" value={code} onChange={(e) => { setCode(e.target.value); setError(false); }} autoComplete="off" inputMode="text" className="mt-4 w-full rounded-none border-b border-gold/35 bg-transparent px-3 py-4 text-center text-lg tracking-[.24em] text-ivory outline-none transition placeholder:text-ivory/25 focus:border-gold" aria-invalid={error} />
            <p className="mt-3 min-h-6 text-sm text-blush" aria-live="polite">{error ? 'That is not our key. Try the date May met Lovia.' : ''}</p>
            <button className="btn-primary mt-5 w-full">Unlock the letter</button>
          </motion.form>
        ) : (
          <motion.div key="seal" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="relative max-w-sm text-center">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-8 font-serif text-3xl italic text-ivory/82">You remembered.</motion.p>
            <button onClick={onOpen} aria-label="Press the wax seal to begin our story" className="wax-seal mx-auto grid h-28 w-28 place-items-center rounded-full bg-rose font-serif text-5xl text-ivory transition hover:scale-[1.03]">M</button>
            <p className="mt-8 font-serif text-2xl text-ivory/86">Everything after this belongs to us.</p>
            <p className="mt-3 text-sm uppercase tracking-[.24em] text-gold/80">Press the seal</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
