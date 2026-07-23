'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { story } from '@/data/story';

type CelebrationPhase = 'pause' | 'chosen' | 'video' | 'final';

type Props = {
  onReplay: () => void;
  onReadLetter: () => void;
};

const phaseDurations: Record<Exclude<CelebrationPhase, 'final'>, number> = {
  pause: 900,
  chosen: 2100,
  video: 8500,
};

export function CelebrationOverlay({ onReplay, onReadLetter }: Props) {
  const [phase, setPhase] = useState<CelebrationPhase>('pause');
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (phase === 'final') return;

    const timeout = window.setTimeout(() => {
      if (phase === 'pause') setPhase('chosen');
      if (phase === 'chosen') setPhase('video');
      if (phase === 'video') setPhase('final');
    }, phaseDurations[phase]);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  function finishVideo() {
    setPhase('final');
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
        {phase === 'pause' ? (
          <motion.div
            key="pause"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="relative h-32 w-32 rounded-full border border-gold/20 bg-ivory/5 shadow-[0_0_80px_rgba(185,152,91,.18)]"
          />
        ) : null}

        {phase === 'chosen' ? (
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

        {phase === 'video' ? (
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
              <button
                onClick={finishVideo}
                className="mx-auto grid aspect-video w-full place-items-center border border-gold/30 bg-ivory/5 px-6 font-serif text-3xl text-ivory/80"
              >
                {story.yes.videoFallback}
              </button>
            ) : (
              <video
                className="aspect-video w-full rounded-sm border border-gold/35 bg-black object-contain shadow-[0_30px_100px_rgba(0,0,0,.45)]"
                autoPlay
                muted
                playsInline
                preload="metadata"
                onEnded={finishVideo}
                onError={() => setVideoFailed(true)}
              >
                <source src={story.media.celebrationVideo} type="video/mp4" />
              </video>
            )}
            <button onClick={finishVideo} className="mt-6 text-xs uppercase tracking-[.24em] text-ivory/55 underline decoration-gold/40 underline-offset-8">
              Continue to celebration
            </button>
          </motion.div>
        ) : null}

        {phase === 'final' ? (
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
