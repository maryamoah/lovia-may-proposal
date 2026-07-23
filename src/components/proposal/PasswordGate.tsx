'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { story } from '@/data/story';

type PasswordGateProps = { onOpen: () => void };

export function PasswordGate({ onOpen }: PasswordGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [sealed, setSealed] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (story.passwords.includes(code.trim().toLowerCase())) { setError(false); setSealed(true); } else setError(true); }
  return <motion.div exit={{ opacity: 0, transition:{duration:.8} }} className="fixed inset-0 z-[70] grid min-h-dvh place-items-center overflow-hidden bg-espresso px-6 py-10 text-ivory grain"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(185,152,91,.16),transparent_34%)]" /><AnimatePresence mode="wait">{!sealed ? <motion.form key="password" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} onSubmit={submit} className="relative w-full max-w-sm text-center"><div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full border border-gold/70 text-gold"><span aria-hidden="true">⌕</span></div><p className="eyebrow text-gold">This letter is just for you</p><h1 className="mt-4 font-serif text-[clamp(2.4rem,10vw,4.8rem)] leading-[.95]">Mommie, enter our date</h1><label className="mt-8 block text-sm text-ivory/65" htmlFor="proposal-password">The day we finally met</label><input id="proposal-password" value={code} onChange={(e)=>{setCode(e.target.value);setError(false)}} autoComplete="off" className="mt-4 w-full border-b border-gold/40 bg-transparent px-3 py-4 text-center text-lg tracking-[.24em] text-ivory outline-none transition focus:border-gold" aria-invalid={error} />{error ? <p className="mt-3 text-sm text-rose">That is not our key.</p> : null}<button className="mt-8 w-full border border-gold/70 px-6 py-4 text-xs uppercase tracking-[.28em] text-gold transition hover:bg-gold hover:text-espresso">Unlock</button></motion.form> : <motion.div key="seal" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} exit={{opacity:0}} className="relative text-center"><motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="mb-8 font-serif text-3xl">You remembered.</motion.p><button onClick={onOpen} aria-label="Press the wax seal to begin our story" className="wax-seal mx-auto grid h-28 w-28 place-items-center rounded-full bg-rose font-serif text-5xl text-ivory transition hover:scale-105">M</button><p className="mt-8 font-serif text-2xl">Everything after this belongs to us.</p><p className="mt-3 text-sm uppercase tracking-[.24em] text-gold/80">Press the seal</p></motion.div>}</AnimatePresence></motion.div>;
}
