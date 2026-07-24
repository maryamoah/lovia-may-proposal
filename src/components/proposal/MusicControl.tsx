"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { story } from "@/data/story";

export type MusicControlHandle = {
  toggle: () => void;
  setSoft: (soft: boolean) => void;
  swell: () => void;
};

type MusicControlProps = { start: boolean };

export const MusicControl = forwardRef<MusicControlHandle, MusicControlProps>(
  function MusicControl({ start }, ref) {
    const audio = useRef<HTMLAudioElement>(null);
    const [available, setAvailable] = useState(true);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
      setMuted(sessionStorage.getItem("sweet-lady-muted") === "true");
    }, []);

    const fadeTo = useCallback((target: number) => {
      const el = audio.current;
      if (!el) return;

      const step = () => {
        if (!audio.current) return;
        const diff = target - audio.current.volume;
        if (Math.abs(diff) < 0.02) {
          audio.current.volume = target;
          return;
        }
        audio.current.volume = Math.max(
          0,
          Math.min(0.7, audio.current.volume + Math.sign(diff) * 0.03),
        );
        window.setTimeout(step, 80);
      };

      step();
    }, []);

    const play = useCallback(async () => {
      if (!audio.current || !available || muted) return;

      try {
        audio.current.volume = 0;
        await audio.current.play();
        setPlaying(true);
        fadeTo(0.45);
      } catch {
        setPlaying(false);
      }
    }, [available, fadeTo, muted]);

    function toggle() {
      if (!audio.current || !available) return;

      if (playing) {
        audio.current.pause();
        setPlaying(false);
        setMuted(true);
        sessionStorage.setItem("sweet-lady-muted", "true");
      } else {
        setMuted(false);
        sessionStorage.setItem("sweet-lady-muted", "false");
        void play();
      }
    }

    useImperativeHandle(ref, () => ({
      toggle,
      setSoft: (soft) => fadeTo(soft ? 0.22 : 0.45),
      swell: () => fadeTo(0.65),
    }));

    useEffect(() => {
      if (start && !muted) void play();
    }, [start, muted, play]);

    return (
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(.75rem,env(safe-area-inset-right))] z-50 flex min-h-11 max-w-[calc(100vw-1.5rem)] items-center rounded-full border border-gold/35 bg-ivory/90 px-3 py-2 text-[.62rem] uppercase tracking-[.16em] text-espresso shadow-[0_18px_45px_rgba(0,0,0,.18)] backdrop-blur sm:right-4">
        <audio
          ref={audio}
          src={story.media.music}
          loop
          preload="none"
          onError={() => setAvailable(false)}
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={
            available
              ? "Toggle Sweet Lady music"
              : "Sweet Lady music is unavailable"
          }
          disabled={!available}
          className="flex min-h-11 items-center gap-2 disabled:cursor-default disabled:opacity-65"
        >
          <span
            aria-hidden="true"
            className="grid h-5 w-5 place-items-center rounded-full bg-espresso text-[.55rem] text-gold"
          >
            {!available ? "—" : playing ? "Ⅱ" : "▶"}
          </span>
          <span>{available ? "Sweet Lady" : "Music unavailable"}</span>
        </button>
      </div>
    );
  },
);
