'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';

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

  function handleVideoError() {
    setVideoFailed(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] grid place-items-center overflow-auto bg-espresso p-6 text-center text-ivory"
    >
      <div className="absolute inset-0 light-leak" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(185,152,91,.24),transparent_34%),linear-gradient(rgba(27,18,14,.2),rgba(27,18,14,.78))]" />

      <AnimatePresence mode="wait">
        {stage === 'pause' ? (
          <motion.div
            key="pause"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="relative h-32 w-32 rounded-full border border-gold/20 bg-ivory/5 shadow-[0_0_80px_rgba(185,152,91,.18)]"
          />
        ) : null}

        {stage === 'chosen' ? (
          <motion.div
            key="chosen"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-3xl"
          >
            <p className="eyebrow text-gold">{story.yes.eyebrow}</p>
            <h2 className="mt-5 font-serif text-[clamp(3.4rem,11vw,8rem)] leading-none">{story.yes.chosenLine}</h2>
          </motion.div>
        ) : null}

        {stage === 'video' ? (
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl"
          >
            <p className="eyebrow mb-5 text-gold">{story.yes.videoLabel}</p>
            {videoFailed ? (
              <div className="mx-auto grid aspect-video w-full place-items-center border border-gold/30 bg-ivory/5 px-6 font-serif text-3xl text-ivory/80">
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
          <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative max-w-3xl py-12">
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: 36 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '-12vh', opacity: 0 }}
                  animate={{ y: '76vh', opacity: [0, 1, 0], rotate: 160 }}
                  transition={{ duration: 2 + (i % 5) * 0.16, delay: i * 0.02 }}
                  className="absolute h-2 w-1 bg-gold/75"
                  style={{ left: `${(i * 29) % 100}%` }}
                />
              ))}
            </div>
            <OptionalImage src={story.media.celebration} alt="May and Lovia celebrating" className="mx-auto mb-8 aspect-[4/3] w-full max-w-md border border-gold/25" />
            <div className="space-y-3">
              {story.yes.finalSequence.map((line, i) => (
                <motion.p key={line} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.3 }} className={i === 0 ? 'font-serif text-[clamp(3rem,10vw,7rem)] leading-none' : 'font-serif text-2xl italic text-ivory/85'}>
                  {line}
                </motion.p>
              ))}
            </div>
            <p className="mt-6 font-serif text-2xl text-gold">{story.yes.finalLine}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <button onClick={onReplay} className="border border-gold/60 px-6 py-3 text-xs uppercase tracking-[.24em] text-gold">Replay our story</button>
              <button onClick={onReadLetter} className="border border-ivory/25 px-6 py-3 text-xs uppercase tracking-[.24em] text-ivory/75">Read the letter again</button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
