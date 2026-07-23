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

type ExperienceStage = 'locked' | 'unlocking' | 'opening' | 'story';

export default function ProposalExperience() {
  const [stage, setStage] = useState<ExperienceStage>('locked');
  const musicRef = useRef<MusicControlHandle>(null);
  const storyIsActive = stage === 'story';

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', !storyIsActive);
    return () => document.documentElement.classList.remove('is-locked');
  }, [storyIsActive]);

  useEffect(() => {
    if (stage !== 'unlocking') return;

    const openingTimer = window.setTimeout(() => setStage('opening'), 800);
    return () => window.clearTimeout(openingTimer);
  }, [stage]);

  if (stage === 'locked') {
    return <PasswordGate onUnlock={() => setStage('unlocking')} />;
  }

  if (stage === 'unlocking') {
    return <PasswordGate unlocked />;
  }

  if (stage === 'opening') {
    return <OpeningScene standalone onComplete={() => setStage('story')} />;
  }

  return (
    <>
      <MusicControl ref={musicRef} start={storyIsActive} />
      <StoryProgress />
      <MobileProgress />
      <main className="bg-espresso text-ivory">
        <BeginningSection />
        <FirstMessageSection />
        <MemoryTimeline />
        <WhyYouSection />
        <SmallThings />
        <LoveLetter onReadingChange={(reading) => musicRef.current?.setSoft(reading)} />
        <ProposalTransition />
        <EndingExperience musicRef={musicRef} />
      </main>
    </>
  );
}
