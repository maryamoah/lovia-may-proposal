'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';
import { imageReveal, overlayFade, overlayTransition, sceneReveal, textReveal, textTransition } from './motion';

type CelebrationStage = 'pause' | 'chosen' | 'video' | 'celebration';

type Props = {
  onReplay: () => void;
  onReadLetter: () => void;
};

const stageDurations: Record<Exclude<CelebrationStage, 'video' | 'celebration'>, number> = {
  pause: 900,
  chosen: 2100,
};

export function CelebrationOverlay({ onReplay, onReadLetter }: Props) {
  const [stage, setStage] = useState<CelebrationStage>('pause');
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (stage === 'video' || stage === 'celebration') return;

    const timeout = window.setTimeout(() => {
      if (stage === 'pause') setStage('chosen');
      if (stage === 'chosen') setStage('video');
    }, stageDurations[stage]);

    return () => window.clearTimeout(timeout);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'video' || !videoRef.current) return;

    videoRef.current.currentTime = 0;
  }, [stage]);

  useEffect(() => {
    if (stage !== 'video' || !videoFailed) return;

    const timeout = window.setTimeout(() => setStage('celebration'), 2600);
    return () => window.clearTimeout(timeout);
  }, [stage, videoFailed]);

  function handleVideoError() {
    setVideoFailed(true);
  }

  return (
    <motion.div
      variants={overlayFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[60] grid place-items-center overflow-auto bg-espresso p-6 text-center text-ivory"
    >
      <div className="absolute inset-0 light-leak" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(185,152,91,.24),transparent_34%),linear-gradient(rgba(27,18,14,.2),rgba(27,18,14,.78))]" />

      <AnimatePresence mode="wait">
        {stage === 'pause' ? (
          <motion.div
            key="pause"
            variants={overlayFade}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-32 w-32 rounded-full border border-gold/20 bg-ivory/5 shadow-[0_0_80px_rgba(185,152,91,.18)]"
          />
        ) : null}

        {stage === 'chosen' ? (
          <motion.div
            key="chosen"
            variants={sceneReveal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative max-w-3xl"
          >
            <p className="eyebrow text-gold">{story.yes.eyebrow}</p>
            <h2 className="mt-5 font-serif text-[clamp(3.4rem,11vw,8rem)] leading-none">{story.yes.chosenLine}</h2>
          </motion.div>
        ) : null}

        {stage === 'video' ? (
          <motion.div
            key="video"
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative w-full max-w-5xl"
          >
            <p className="eyebrow mb-5 text-gold">{story.yes.videoLabel}</p>
            {videoFailed ? (
              <div className="mx-auto grid aspect-video w-full place-items-center rounded-sm border border-gold/30 bg-ivory/5 px-6 font-serif text-3xl text-ivory/80">
                {story.yes.videoFallback}
              </div>
            ) : (
              <div className="aspect-video w-full rounded-sm border border-gold/35 bg-black shadow-[0_30px_100px_rgba(0,0,0,.45)]">
                <video
                  ref={videoRef}
                  src="/video/our-memory.mp4"
                  playsInline
                  preload="auto"
                  controls
                  className="h-full w-full object-contain"
                  onEnded={() => setStage('celebration')}
                  onError={handleVideoError}
                />
              </div>
            )}
          </motion.div>
        ) : null}

        {stage === 'celebration' ? (
          <motion.div key="final" variants={overlayFade} initial="hidden" animate="visible" exit="exit" className="relative max-w-3xl py-12">
            <div className="pointer-events-none absolute inset-0">
              {!reduceMotion ? Array.from({ length: 36 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '-12vh', opacity: 0 }}
                  animate={{ y: '76vh', opacity: [0, 1, 0], rotate: 160 }}
                  transition={{ ...overlayTransition, duration: 2 + (i % 5) * 0.16, delay: i * 0.02 }}
                  className="absolute h-2 w-1 bg-gold/75"
                  style={{ left: `${(i * 29) % 100}%` }}
                />
              )) : null}
            </div>
            <OptionalImage src={story.media.celebration} alt="May and Lovia celebrating" className="mx-auto mb-8 aspect-[4/3] w-full max-w-md border border-gold/25" />
            <div className="space-y-3">
              {story.yes.finalSequence.map((line, i) => (
                <motion.p key={line} variants={textReveal} initial="hidden" animate="visible" transition={{ ...textTransition, delay: 0.25 + i * 0.08 }} className={i === 0 ? 'font-serif text-[clamp(3rem,10vw,7rem)] leading-none' : 'font-serif text-2xl italic text-ivory/85'}>
                  {line}
                </motion.p>
              ))}
            </div>
            <p className="mt-6 font-serif text-2xl text-gold">{story.yes.finalLine}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={onReplay} className="btn-secondary">Replay our story</button>
              <button type="button" onClick={onReadLetter} className="btn-secondary">Read the letter again</button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
