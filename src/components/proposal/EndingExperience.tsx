'use client';

import { AnimatePresence } from 'framer-motion';
import { useRef, useState, type RefObject } from 'react';
import { CelebrationOverlay } from './CelebrationOverlay';
import { MusicControlHandle } from './MusicControl';
import { ProposalSection } from './ProposalSection';

type EndingExperienceProps = {
  musicRef: RefObject<MusicControlHandle | null>;
};

export function EndingExperience({ musicRef }: EndingExperienceProps) {
  const [celebrating, setCelebrating] = useState(false);
  const timerRef = useRef<number | null>(null);

  function replay() {
    setCelebrating(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function letterAgain() {
    setCelebrating(false);
    window.setTimeout(() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' }), 50);
  }

  function yes() {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      musicRef.current?.swell();
      setCelebrating(true);
    }, 500);
  }

  return (
    <>
      <ProposalSection onYes={yes} />
      <AnimatePresence>{celebrating ? <CelebrationOverlay onReplay={replay} onReadLetter={letterAgain} /> : null}</AnimatePresence>
    </>
  );
}
