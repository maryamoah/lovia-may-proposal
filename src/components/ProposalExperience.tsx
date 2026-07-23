'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BeginningSection } from './proposal/BeginningSection';
import { CelebrationOverlay } from './proposal/CelebrationOverlay';
import { LoveLetter } from './proposal/LoveLetter';
import { MemoryTimeline } from './proposal/MemoryTimeline';
import { MusicControl, MusicControlHandle } from './proposal/MusicControl';
import { OpeningScene } from './proposal/OpeningScene';
import { PasswordGate } from './proposal/PasswordGate';
import { ProposalSection } from './proposal/ProposalSection';
import { WhyYouSection } from './proposal/WhyYouSection';

export default function ProposalExperience() {
  const [opened, setOpened] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const musicRef = useRef<MusicControlHandle>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', !opened);
    return () => document.documentElement.classList.remove('is-locked');
  }, [opened]);

  function openStory() {
    setOpened(true);
  }

  function replay() {
    setCelebrating(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <MusicControl ref={musicRef} start={opened} />
      <AnimatePresence>{!opened ? <PasswordGate onOpen={openStory} /> : null}</AnimatePresence>
      <main className="bg-espresso text-ivory">
        <OpeningScene />
        <BeginningSection />
        <MemoryTimeline />
        <WhyYouSection />
        <LoveLetter />
        <ProposalSection onYes={() => setCelebrating(true)} />
      </main>
      <AnimatePresence>
        {celebrating ? <CelebrationOverlay onReplay={replay} onToggleMusic={() => musicRef.current?.toggle()} /> : null}
      </AnimatePresence>
    </>
  );
}
