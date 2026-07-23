'use client';

import { useEffect, useRef, useState } from 'react';
import { CapeCoastSection } from './proposal/CapeCoastSection';
import { FeltAtHomeSection } from './proposal/FeltAtHomeSection';
import { FirstMeetingSection } from './proposal/FirstMeetingSection';
import { FunnyMomentSection } from './proposal/FunnyMomentSection';
import { BeginningSection } from './proposal/BeginningSection';
import { LoveLetter } from './proposal/LoveLetter';
import { MusicControl, MusicControlHandle } from './proposal/MusicControl';
import { OpeningScene } from './proposal/OpeningScene';
import { PasswordGate } from './proposal/PasswordGate';
import { FirstMessageSection } from './proposal/FirstMessageSection';
import { EndingExperience } from './proposal/EndingExperience';
import { ProposalTransition } from './proposal/ProposalTransition';
import { SmallThingsInterlude } from './proposal/SmallThingsInterlude';
import { WhyYouSection } from './proposal/WhyYouSection';

type ExperienceStage = 'locked' | 'unlocking' | 'story';

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

    const openingTimer = window.setTimeout(() => setStage('story'), 800);
    return () => window.clearTimeout(openingTimer);
  }, [stage]);

  if (stage === 'locked') {
    return <PasswordGate onUnlock={() => setStage('unlocking')} />;
  }

  if (stage === 'unlocking') {
    return <PasswordGate unlocked />;
  }


  return (
    <>
      <MusicControl ref={musicRef} start={storyIsActive} />
      <main className="relative overflow-x-clip bg-espresso text-ivory">
        <OpeningScene />
        <BeginningSection />
        <FirstMessageSection />
        <FirstMeetingSection />
        <FunnyMomentSection />
        <CapeCoastSection />
        <FeltAtHomeSection />
        <WhyYouSection />
        <SmallThingsInterlude />
        <LoveLetter onReadingChange={(reading) => musicRef.current?.setSoft(reading)} />
        <ProposalTransition />
        <EndingExperience musicRef={musicRef} />
      </main>
    </>
  );
}
