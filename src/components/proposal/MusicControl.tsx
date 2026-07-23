'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { story } from '@/data/story';

export type MusicControlHandle = { toggle: () => void };

type MusicControlProps = { start: boolean };

export const MusicControl = forwardRef<MusicControlHandle, MusicControlProps>(function MusicControl({ start }, ref) {
  const audio = useRef<HTMLAudioElement>(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);

  async function playWithFade() {
    if (!audio.current || !available) return;
    audio.current.volume = 0;
    try {
      await audio.current.play();
      setPlaying(true);
      let volume = 0;
      const id = window.setInterval(() => {
        volume = Math.min(0.5, volume + 0.04);
        if (audio.current) audio.current.volume = volume;
        if (volume >= 0.5) window.clearInterval(id);
      }, 120);
    } catch {
      setAvailable(false);
    }
  }

  function toggle() {
    if (!audio.current || !available) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      void playWithFade();
    }
  }

  useImperativeHandle(ref, () => ({ toggle }));

  useEffect(() => {
    if (start) void playWithFade();
  }, [start]);

  if (!available) return null;

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 rounded-full border border-gold/35 bg-espresso/80 px-4 py-3 text-xs uppercase tracking-[.18em] text-gold backdrop-blur">
      <audio ref={audio} src={story.musicPath} loop preload="none" onError={() => setAvailable(false)} />
      <button onClick={toggle} aria-label="Toggle music">Music {playing ? 'on' : 'off'}</button>
    </div>
  );
});
