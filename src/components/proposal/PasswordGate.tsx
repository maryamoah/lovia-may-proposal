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

  return (
    <div className="grid min-h-dvh place-items-center overflow-hidden bg-espresso px-5 py-8 text-ivory grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(169,137,82,.14),transparent_34%)]" />
      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.form key="password" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} onSubmit={submit} className="relative w-full max-w-[23rem] text-center">
            <div className="wax-seal mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-rose text-center font-serif text-2xl text-ivory">M</div>
            <p className="eyebrow text-gold">MAY · LOVIA</p>
            <p className="mt-2 text-sm text-ivory/62">For Lovia only.</p>
            <h1 className="mx-auto mt-4 max-w-[12ch] font-serif text-[clamp(2.75rem,5vw,5rem)] leading-[.92] tracking-[-.04em]">A private memory, waiting for you.</h1>
            <p className="mx-auto mt-6 max-w-[18rem] text-sm text-ivory/66">Enter the date that made this real.</p>
            <label className="mt-5 block text-xs uppercase tracking-[.2em] text-gold/75" htmlFor="proposal-password">The day we finally met.</label>
            <input
              id="proposal-password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, '').slice(0, 6));
                setError(false);
              }}
              autoComplete="off"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              className="mx-auto mt-2 block w-full max-w-[280px] rounded-none border-0 border-b border-gold/35 bg-transparent px-2 py-3 text-center text-xl tracking-[.34em] text-ivory outline-none transition placeholder:text-ivory/25 focus:border-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              aria-invalid={error}
            />
            <p className="mt-3 min-h-6 text-sm text-blush" aria-live="polite">{error ? 'That is not our key. Try the date May met Lovia.' : ''}</p>
            <button className="btn-primary mx-auto mt-3 block w-full max-w-[300px]">Open our story</button>
          </motion.form>
        ) : (
          <motion.div key="remembered" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative max-w-sm text-center">
            <div className="wax-seal mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-rose font-serif text-3xl text-ivory">M</div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-3xl italic text-ivory/86">You remembered.</motion.p>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-4 font-serif text-2xl text-ivory/86">Everything after this belongs to us.</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
