"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BeginningSection } from "./proposal/BeginningSection";
import { LoveLetter } from "./proposal/LoveLetter";
import { MemoryTimeline } from "./proposal/MemoryTimeline";
import { MobileProgress } from "./proposal/MobileProgress";
import { MusicControl, MusicControlHandle } from "./proposal/MusicControl";
import { OpeningScene } from "./proposal/OpeningScene";
import { PasswordGate } from "./proposal/PasswordGate";
import { FirstMessageSection } from "./proposal/FirstMessageSection";
import { EndingExperience } from "./proposal/EndingExperience";
import { ProposalTransition } from "./proposal/ProposalTransition";
import { SmallThings } from "./proposal/SmallThings";
import { WhyYouSection } from "./proposal/WhyYouSection";

type ExperienceStage = "locked" | "unlocking" | "opening" | "story";

export default function ProposalExperience() {
  const [stage, setStage] = useState<ExperienceStage>("locked");
  const musicRef = useRef<MusicControlHandle>(null);
  const storyIsActive = stage === "story";

  useEffect(() => {
    document.documentElement.classList.toggle("is-locked", !storyIsActive);
    return () => document.documentElement.classList.remove("is-locked");
  }, [storyIsActive]);

  if (stage === "locked") {
    return (
      <MotionConfig reducedMotion="user">
        <PasswordGate onUnlock={() => setStage("unlocking")} />
      </MotionConfig>
    );
  }

  if (stage === "unlocking") {
    return (
      <MotionConfig reducedMotion="user">
        <PasswordGate unlocked onOpen={() => setStage("opening")} />
      </MotionConfig>
    );
  }

  if (stage === "opening") {
    return (
      <MotionConfig reducedMotion="user">
        <OpeningScene standalone onComplete={() => setStage("story")} />
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <MusicControl ref={musicRef} start={storyIsActive} />
      <MobileProgress />
      <main className="bg-espresso text-ivory">
        <BeginningSection />
        <FirstMessageSection />
        <MemoryTimeline />
        <WhyYouSection />
        <SmallThings />
        <LoveLetter
          onReadingChange={(reading) => musicRef.current?.setSoft(reading)}
        />
        <ProposalTransition />
        <EndingExperience musicRef={musicRef} />
      </main>
    </MotionConfig>
  );
}
