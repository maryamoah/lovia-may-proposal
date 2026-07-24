import type { Transition, Variants } from 'framer-motion';

export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, amount: 0.35 } as const;
export const viewportText = { once: true, amount: 0.7 } as const;

export const textTransition: Transition = {
  duration: 0.6,
  ease: motionEase,
};

export const imageTransition: Transition = {
  duration: 0.75,
  ease: motionEase,
};

export const sceneTransition: Transition = {
  duration: 0.9,
  ease: motionEase,
};

export const overlayTransition: Transition = {
  duration: 0.45,
  ease: motionEase,
};

export const buttonTransition: Transition = {
  duration: 0.25,
  ease: motionEase,
};

export const reducedFadeTransition: Transition = {
  duration: 0.3,
  ease: motionEase,
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: textTransition },
};

export const sceneReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: sceneTransition },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1, transition: imageTransition },
};

export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: overlayTransition },
  exit: { opacity: 0, transition: overlayTransition },
};

export const sequenceContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

export const reducedTextReveal: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: reducedFadeTransition },
};

export const reducedSceneReveal: Variants = reducedTextReveal;
export const reducedImageReveal: Variants = reducedTextReveal;
