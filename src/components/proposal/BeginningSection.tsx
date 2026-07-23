'use client';
import { motion } from 'framer-motion';
import { story } from '@/data/story';
import { InstagramScreenshot } from './InstagramScreenshot';
export function BeginningSection(){return <section className="bg-cream px-6 py-24 text-espresso sm:px-10 lg:py-32"><div className="mx-auto max-w-5xl text-center"><motion.p initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="eyebrow text-gold">Preserved beginning</motion.p><motion.h2 initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2.4rem,7vw,5.5rem)] leading-[.95] tracking-[-.04em]">{story.beginning.heading}</motion.h2><div className="relative mx-auto mt-12 max-w-lg"><div className="absolute inset-0 -z-0 rounded-full bg-gold/20 blur-3xl" /><InstagramScreenshot src={story.media.firstMessageScreenshot} /></div></div></section>}
