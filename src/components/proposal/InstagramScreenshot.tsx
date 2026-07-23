'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { OptionalImage } from './OptionalImage';

type InstagramScreenshotProps = { src?: string };

function Placeholder() {
  return (
    <div className="grid aspect-[9/16] w-full place-items-center bg-[#efe3cf] px-8 text-center text-espresso">
      <div>
        <p className="font-serif text-2xl">Our first Instagram conversation</p>
        <p className="mt-3 text-xs uppercase tracking-[.24em] text-gold">Add first-instagram-message.jpg</p>
      </div>
    </div>
  );
}

export function InstagramScreenshot({ src }: InstagramScreenshotProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="mx-auto block w-full max-w-[22rem] rounded-[2rem] border border-gold/30 bg-espresso p-3 shadow-[0_30px_80px_rgba(27,18,14,.18)]"
        aria-label="Expand our first Instagram conversation"
      >
        <OptionalImage src={src} alt="First Instagram conversation" className="aspect-[9/16] rounded-[1.45rem]" imageClassName="object-contain bg-[#efe3cf]" fallback={<Placeholder />} />
      </button>
      <AnimatePresence>
        {expanded ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-espresso/90 p-4 backdrop-blur">
            <button onClick={() => setExpanded(false)} className="absolute right-4 top-4 border border-gold/50 px-4 py-2 text-sm text-gold" aria-label="Close expanded Instagram conversation">Close</button>
            <OptionalImage src={src} alt="Expanded first Instagram conversation" className="h-[86dvh] w-full max-w-md" imageClassName="object-contain" fallback={<div className="w-full max-w-sm"><Placeholder /></div>} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
