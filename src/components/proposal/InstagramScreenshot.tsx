'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';
import { baseTransition } from './motion';

type InstagramScreenshotProps = { src?: string };

function Placeholder() {
  return (
    <div className="grid aspect-[9/16] w-full place-items-center rounded-[1.35rem] bg-[#efe3cf] px-6 text-center text-espresso">
      <div>
        <p className="font-serif text-2xl leading-tight">Our first Instagram conversation</p>
        <p className="mt-4 text-[.64rem] uppercase leading-5 tracking-[.22em] text-gold">{story.beginning.placeholder}</p>
      </div>
    </div>
  );
}

export function InstagramScreenshot({ src }: InstagramScreenshotProps) {
  const [expanded, setExpanded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!expanded) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setExpanded(false);
    }

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      triggerElement?.focus();
    };
  }, [expanded]);

  return (
    <>
      <div className="mx-auto w-full">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setExpanded(true)}
          className="relative mx-auto block w-full overflow-hidden rounded-[1.7rem] border border-gold/30 bg-espresso p-2.5 shadow-[0_28px_70px_rgba(27,18,14,.18)]"
          aria-label="Open readable first Instagram message"
        >
          <span className="sr-only">Open the first Instagram message screenshot</span>
          <OptionalImage src={src} alt="First Instagram conversation" className="aspect-[9/16] rounded-[1.25rem]" imageClassName="object-contain bg-[#efe3cf]" fallback={<Placeholder />} />
        </button>
        <div className="mt-4 grid gap-2 text-center sm:grid-cols-2 sm:text-left">
          <p className="rounded-full bg-ivory/80 px-4 py-2 font-serif text-sm italic leading-5 text-rose shadow-sm sm:text-base">{story.beginning.annotation}</p>
          <p className="self-start rounded-full bg-ivory/80 px-4 py-2 text-[.58rem] uppercase tracking-[.18em] text-gold shadow">{story.beginning.floatingDate}</p>
        </div>
      </div>

      <AnimatePresence>
        {expanded ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="instagram-lightbox-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={baseTransition}
            className="fixed inset-0 z-[80] grid place-items-center bg-espresso/95 p-4 backdrop-blur"
            onClick={() => setExpanded(false)}
          >
            <h2 id="instagram-lightbox-title" className="sr-only">First Instagram message screenshot</h2>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute right-4 top-4 rounded-full border border-gold/50 px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-espresso"
              aria-label="Close Instagram screenshot lightbox"
            >
              Close
            </button>
            <div className="w-full max-w-2xl" onClick={(event) => event.stopPropagation()}>
              <OptionalImage src={src} alt="Expanded first Instagram conversation" className="h-[86dvh] w-full" imageClassName="object-contain" fallback={<div className="mx-auto w-full max-w-sm"><Placeholder /></div>} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
