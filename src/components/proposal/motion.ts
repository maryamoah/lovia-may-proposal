import type { Variants, Transition } from 'framer-motion';

export const viewportOnce = { once: true, amount: 0.35 } as const;

export const baseTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

export const revealRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
