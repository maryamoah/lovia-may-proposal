'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BeginningSection } from './proposal/BeginningSection';
import { CelebrationOverlay } from './proposal/CelebrationOverlay';
import { LoveLetter } from './proposal/LoveLetter';
import { MemoryFilm } from './proposal/MemoryFilm';
import { MemoryTimeline } from './proposal/MemoryTimeline';
import { MobileProgress } from './proposal/MobileProgress';
import { MusicControl, MusicControlHandle } from './proposal/MusicControl';
import { OpeningScene } from './proposal/OpeningScene';
import { PasswordGate } from './proposal/PasswordGate';
import { ProposalSection } from './proposal/ProposalSection';
import { ProposalTransition } from './proposal/ProposalTransition';
import { SmallThings } from './proposal/SmallThings';
import { StoryProgress } from './proposal/StoryProgress';
import { WhyYouSection } from './proposal/WhyYouSection';

export default function ProposalExperience() {
  const [opened, setOpened] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const musicRef = useRef<MusicControlHandle>(null);

  useEffect(() => { document.documentElement.classList.toggle('is-locked', !opened); return () => document.documentElement.classList.remove('is-locked'); }, [opened]);
  function replay() { setCelebrating(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function letterAgain() { setCelebrating(false); setTimeout(() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' }), 50); }
  function yes() { setTimeout(() => { musicRef.current?.swell(); setCelebrating(true); }, 500); }

  return <><MusicControl ref={musicRef} start={opened} /><StoryProgress hidden={!opened || celebrating} />{opened ? <MobileProgress /> : null}<AnimatePresence>{!opened ? <PasswordGate onOpen={() => setOpened(true)} /> : null}</AnimatePresence><main className="bg-espresso text-ivory"><OpeningScene /><BeginningSection /><MemoryTimeline /><MemoryFilm /><WhyYouSection /><SmallThings /><LoveLetter onReadingChange={(reading)=>musicRef.current?.setSoft(reading)} /><ProposalTransition /><ProposalSection onYes={yes} /></main><AnimatePresence>{celebrating ? <CelebrationOverlay onReplay={replay} onReadLetter={letterAgain} /> : null}</AnimatePresence></>;
}
