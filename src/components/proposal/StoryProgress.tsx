'use client';

import { useEffect, useState } from 'react';
import { story, type NavigationTheme } from '@/data/story';

type StoryProgressProps = { hidden?: boolean };

const themeClasses: Record<NavigationTheme, { container: string; item: string; active: string }> = {
  light: {
    container: 'border-espresso/15 bg-ivory/86 shadow-[0_18px_45px_rgba(27,18,14,.12)]',
    item: 'text-espresso/68 hover:bg-espresso/8 hover:text-espresso focus-visible:text-espresso',
    active: 'bg-espresso text-ivory shadow-sm',
  },
  dark: {
    container: 'border-gold/25 bg-espresso/72 shadow-[0_18px_45px_rgba(0,0,0,.18)]',
    item: 'text-ivory/72 hover:bg-ivory/10 hover:text-gold focus-visible:text-gold',
    active: 'bg-gold text-espresso shadow-sm',
  },
};

function getCurrentNavigationState() {
  const viewportMidpoint = window.innerHeight / 2;
  const themedElement = document
    .elementFromPoint(Math.min(120, window.innerWidth / 2), viewportMidpoint)
    ?.closest<HTMLElement>('[data-navigation-theme]');
  const activeTheme = [...story.progressLabels].reverse().find((item) => {
    const target = document.getElementById(item.target);
    return target ? target.getBoundingClientRect().top <= viewportMidpoint : false;
  })?.theme;
  const theme = (themedElement?.dataset.navigationTheme as NavigationTheme | undefined) ?? activeTheme ?? 'dark';

  const activeLabel = [...story.progressLabels]
    .reverse()
    .find((item) => {
      const target = document.getElementById(item.target);
      return target ? target.getBoundingClientRect().top <= viewportMidpoint : false;
    });

  return { theme, activeTarget: activeLabel?.target ?? story.progressLabels[0]?.target };
}

export function StoryProgress({ hidden = false }: StoryProgressProps) {
  const [theme, setTheme] = useState<NavigationTheme>('dark');
  const [activeTarget, setActiveTarget] = useState(story.progressLabels[0]?.target);

  useEffect(() => {
    let frame = 0;

    function syncNavigationState() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const next = getCurrentNavigationState();
        setTheme(next.theme);
        setActiveTarget(next.activeTarget);
      });
    }

    syncNavigationState();
    window.addEventListener('scroll', syncNavigationState, { passive: true });
    window.addEventListener('resize', syncNavigationState);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', syncNavigationState);
      window.removeEventListener('resize', syncNavigationState);
    };
  }, []);

  if (hidden) return null;

  const classes = themeClasses[theme];

  return (
    <aside aria-label="Story chapters" className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className={`space-y-2 rounded-full border px-3 py-4 backdrop-blur transition-colors duration-300 ${classes.container}`}>
        {story.progressLabels.map((item) => {
          const isActive = item.target === activeTarget;

          return (
            <button
              key={item.target}
              type="button"
              aria-current={isActive ? 'location' : undefined}
              onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
              className={`block rounded-full px-2 py-1 text-left text-[.6rem] uppercase tracking-[.2em] transition-colors duration-300 ${isActive ? classes.active : classes.item}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
