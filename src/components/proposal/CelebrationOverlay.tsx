"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { story } from "@/data/story";
import { OptionalImage } from "./OptionalImage";
import {
  imageReveal,
  overlayFade,
  overlayTransition,
  sceneReveal,
  textReveal,
  textTransition,
} from "./motion";

type CelebrationStage = "pause" | "chosen" | "video" | "celebration";

type Props = {
  onReplay: () => void;
  onReadLetter: () => void;
};

const stageDurations: Record<
  Exclude<CelebrationStage, "video" | "celebration">,
  number
> = {
  pause: 700,
  chosen: 1900,
};

const finaleFade = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };
const confettiPieces = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: i % 2 === 0 ? 4 + ((i * 11) % 24) : 72 + ((i * 13) % 23),
  delay: (i % 12) * 0.08,
  duration: 4.5 + (i % 6) * 0.35,
  size: 5 + (i % 4),
  drift: i % 2 === 0 ? 18 + (i % 5) * 4 : -18 - (i % 5) * 4,
  ivory: i % 3 === 0,
}));

type VideoExperienceProps = {
  onComplete: () => void;
};

function VideoExperience({ onComplete }: VideoExperienceProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);

  const releaseVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.removeAttribute("src");
    video.load();
  }, []);

  useEffect(() => releaseVideo, [releaseVideo]);

  function finish() {
    if (finishedRef.current) return;
    finishedRef.current = true;
    releaseVideo();
    onComplete();
  }

  return (
    <motion.div
      data-video-experience
      variants={imageReveal}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-5xl"
    >
      <p className="eyebrow mb-5 text-gold">{story.yes.videoLabel}</p>
      <div className="aspect-video w-full rounded-sm border border-gold/35 bg-black shadow-[0_30px_100px_rgba(0,0,0,.45)]">
        <video
          ref={videoRef}
          src="/video/our-memory.mp4"
          playsInline
          preload="auto"
          controls
          className="h-full w-full object-contain"
          onEnded={finish}
          onError={finish}
        />
      </div>
    </motion.div>
  );
}

export function CelebrationOverlay({ onReplay, onReadLetter }: Props) {
  const [stage, setStage] = useState<CelebrationStage>("pause");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (stage !== "pause" && stage !== "chosen") return;

    const timeout = window.setTimeout(() => {
      if (stage === "pause") setStage("chosen");
      if (stage === "chosen") setStage("video");
    }, stageDurations[stage]);

    return () => window.clearTimeout(timeout);
  }, [stage]);

  return (
    <motion.div
      variants={overlayFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[60] grid place-items-center overflow-x-hidden overflow-y-auto bg-espresso safe-px py-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-ivory"
    >
      <div className="absolute inset-0 light-leak" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(185,152,91,.24),transparent_34%),linear-gradient(rgba(27,18,14,.2),rgba(27,18,14,.78))]" />

      {stage === "pause" ? (
        <motion.div
          key="pause"
          variants={overlayFade}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative h-32 w-32 rounded-full border border-gold/20 bg-ivory/5 shadow-[0_0_80px_rgba(185,152,91,.18)]"
        />
      ) : null}

      {stage === "chosen" ? (
        <motion.div
          key="chosen"
          variants={sceneReveal}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -12, transition: finaleFade }}
          className="relative max-w-3xl"
        >
          <p className="eyebrow text-gold">{story.yes.eyebrow}</p>
          <h2 className="mt-5 font-serif text-[clamp(3.4rem,11vw,8rem)] leading-none">
            {story.yes.chosenLine}
          </h2>
        </motion.div>
      ) : null}

      {stage === "video" ? (
        <VideoExperience onComplete={() => setStage("celebration")} />
      ) : null}

      {stage === "celebration" ? (
        <motion.div
          key="yes-celebration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: finaleFade }}
          exit={{ opacity: 0, transition: overlayTransition }}
          className="relative w-full max-w-3xl py-[clamp(1rem,5vh,3rem)]"
        >
          <div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            {!reduceMotion
              ? confettiPieces.map((piece) => (
                  <motion.span
                    key={piece.id}
                    initial={{ x: 0, y: "-8vh", opacity: 0, rotate: 0 }}
                    animate={{
                      x: piece.drift,
                      y: "108vh",
                      opacity: [0, 0.85, 0.85, 0],
                      rotate: 180,
                    }}
                    transition={{
                      duration: piece.duration,
                      delay: piece.delay,
                      ease: "easeOut",
                    }}
                    className={
                      piece.ivory
                        ? "absolute rounded-full bg-ivory/70 shadow-[0_0_12px_rgba(255,248,229,.2)]"
                        : "absolute rounded-[1px] bg-gold/75 shadow-[0_0_14px_rgba(185,152,91,.28)]"
                    }
                    style={{
                      left: `${piece.left}%`,
                      height: piece.size,
                      width: piece.ivory
                        ? piece.size
                        : Math.max(2, piece.size - 3),
                    }}
                  />
                ))
              : null}
          </div>
          <div className="relative z-10">
            <OptionalImage
              src={story.media.celebration}
              alt="May and Lovia celebrating"
              className="mx-auto mb-6 aspect-[4/3] w-full max-w-[min(100%,24rem)] sm:mb-8 sm:max-w-md border border-gold/25"
            />
            <div className="space-y-3">
              {story.yes.finalSequence.map((line, i) => (
                <motion.p
                  key={line}
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  transition={{ ...textTransition, delay: 0.12 + i * 0.08 }}
                  className={
                    i === 0
                      ? "font-serif text-[clamp(2.65rem,10vw,7rem)] leading-none"
                      : "font-serif text-[clamp(1.25rem,4vw,1.5rem)] italic text-ivory/85"
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...textTransition, delay: 0.28 }}
              className="mt-6 font-serif text-2xl text-gold"
            >
              {story.yes.finalLine}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...textTransition, delay: 0.42 }}
              className="mt-[clamp(1.5rem,4vh,2.5rem)] flex flex-wrap justify-center gap-3"
            >
              <button
                type="button"
                onClick={onReplay}
                className="btn-secondary"
              >
                Replay our story
              </button>
              <button
                type="button"
                onClick={onReadLetter}
                className="btn-secondary"
              >
                Read the letter again
              </button>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
