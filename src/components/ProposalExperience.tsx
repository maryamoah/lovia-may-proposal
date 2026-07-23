'use client';

import { useEffect, useRef, useState } from 'react';
import { BeginningSection } from './proposal/BeginningSection';
import { LoveLetter } from './proposal/LoveLetter';
import { MemoryTimeline } from './proposal/MemoryTimeline';
import { MobileProgress } from './proposal/MobileProgress';
import { MusicControl, MusicControlHandle } from './proposal/MusicControl';
import { OpeningScene } from './proposal/OpeningScene';
import { PasswordGate } from './proposal/PasswordGate';
import { FirstMessageSection } from './proposal/FirstMessageSection';
import { EndingExperience } from './proposal/EndingExperience';
import { ProposalTransition } from './proposal/ProposalTransition';
import { SmallThings } from './proposal/SmallThings';
import { StoryProgress } from './proposal/StoryProgress';
import { WhyYouSection } from './proposal/WhyYouSection';

export default function ProposalExperience() {
  const [opened, setOpened] = useState(false);
  const musicRef = useRef<MusicControlHandle>(null);

  useEffect(() => { document.documentElement.classList.toggle('is-locked', !opened); return () => document.documentElement.classList.remove('is-locked'); }, [opened]);
  return <><MusicControl ref={musicRef} start={opened} /><StoryProgress hidden={!opened} />{opened ? <MobileProgress /> : null}{!opened ? <PasswordGate onOpen={() => setOpened(true)} /> : null}<main className="bg-espresso text-ivory"><OpeningScene /><BeginningSection /><FirstMessageSection /><MemoryTimeline /><WhyYouSection /><SmallThings /><LoveLetter onReadingChange={(reading)=>musicRef.current?.setSoft(reading)} /><ProposalTransition /><EndingExperience musicRef={musicRef} /></main></>;
}
