'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { story, type Memory } from '@/data/story';
import { imageReveal, sceneReveal, textReveal, textTransition, viewportOnce, viewportText } from './motion';
import { OptionalImage } from './OptionalImage';

function SplitCaption({ memory, light = false }: { memory: Memory; light?: boolean }) {
  return (
    <div className="mt-8 space-y-5">
      {memory.caption.split('. ').map((line, index) => (
        <motion.p key={line} variants={textReveal} initial="hidden" whileInView="visible" viewport={viewportText} transition={{ ...textTransition, delay: index * 0.08 }} className={`story-copy text-lg leading-8 sm:text-xl ${light ? 'text-espresso/70' : 'text-ivory/72'}`}>
          {line.replace(/\.$/, '')}.
        </motion.p>
      ))}
    </div>
  );
}

export function MemoryTimeline() {
  const firstMeeting = story.memories[1];
  const quietOrdinary = story.memories[2];
  const holdingHands = story.memories[3];
  const attieke = story.memories[4];
  const capeCoast = story.memories[5];

  return (
    <section id="memories" className="text-espresso">
      <section data-navigation-theme="dark" className="relative overflow-hidden bg-espresso text-ivory">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-12 lg:py-24">
          <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/20 bg-ivory/5 shadow-[0_24px_70px_rgba(0,0,0,.16)] sm:aspect-[3/2] lg:aspect-[4/5]">
            <Image src={story.media.feltAtHomeTogether} alt="May and Lovia feeling at home together" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
          </motion.div>
          <div className="relative">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">{firstMeeting.eyebrow}</p>
              <h2 className="mt-5 font-serif text-[clamp(2.4rem,7vw,5.8rem)] leading-[.95] tracking-[-.035em]">{firstMeeting.title}</h2>
              <SplitCaption memory={firstMeeting} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ivory px-5 py-16 text-espresso sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="overflow-hidden rounded-sm border border-gold/25 bg-cream shadow-[0_24px_70px_rgba(27,18,14,.08)]">
            <div className="relative aspect-[4/3] w-full">
              <Image src={story.media.walkSideBySide} alt="May and Lovia sharing a quiet moment together" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
            </div>
          </motion.div>
          <motion.div variants={sceneReveal} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <p className="eyebrow text-gold">{quietOrdinary.eyebrow}</p>
            <h2 className="mt-5 font-serif text-[clamp(2.25rem,5.8vw,5rem)] leading-[1] tracking-[-.035em]">{quietOrdinary.title}</h2>
            <SplitCaption memory={quietOrdinary} light />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--ivory)] text-[var(--espresso)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div variants={sceneReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="min-w-0">
              <p className="eyebrow text-gold">A funny little chapter</p>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,5.4vw,4.8rem)] leading-[1.02] tracking-[-.035em]">Côte d’Ivoire, zero French, and one mission.</h2>
              <p className="eyebrow mt-7 text-gold">{attieke.eyebrow}</p>
              <h3 className="mt-3 font-serif text-[clamp(1.9rem,4vw,3.35rem)] leading-tight">{attieke.title}</h3>
              <p className="story-copy mt-5 max-w-2xl text-lg leading-8 text-espresso/68">{attieke.caption}</p>
            </motion.div>

            <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="min-w-0">
              <div className="overflow-hidden rounded-sm border border-gold/30 bg-cream shadow-[0_22px_60px_rgba(27,18,14,.08)]">
                <OptionalImage src={story.media.attiekeFunnyMoment} alt={attieke.title} className="aspect-[4/3] w-full" imageClassName="object-contain" sizes="(min-width: 1024px) 55vw, 100vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section data-navigation-theme="dark" className="relative overflow-hidden bg-espresso px-5 py-16 text-ivory sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div variants={sceneReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-2 lg:order-1">
            <p className="eyebrow text-gold">{holdingHands.eyebrow}</p>
            <h2 className="mt-5 font-serif text-[clamp(2.25rem,5.8vw,5rem)] leading-[1] tracking-[-.035em]">{holdingHands.title}</h2>
            <SplitCaption memory={holdingHands} />
          </motion.div>
          <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-1 overflow-hidden rounded-sm border border-gold/25 bg-ivory/5 shadow-[0_24px_70px_rgba(0,0,0,.18)] lg:order-2">
            <div className="relative aspect-[4/3] w-full">
              <Image src={story.media.holdingHands} alt="May and Lovia holding hands through life" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      <section data-navigation-theme="dark" className="relative overflow-hidden bg-cream px-5 py-20 text-center sm:px-10 lg:py-28">
        <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewportOnce} className="absolute inset-0">
          <OptionalImage src={story.media.capeCoast} alt={capeCoast.title} className="h-full w-full" imageClassName="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(27,18,14,.58),rgba(27,18,14,.62))]" />
        </motion.div>
        <div className="relative mx-auto max-w-4xl py-10 text-ivory">
          <p className="eyebrow text-gold">{capeCoast.eyebrow}</p>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,8vw,6.4rem)] leading-[.96] tracking-[-.035em]">{capeCoast.title}</h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            {capeCoast.caption.split('. ').map((line, index) => (
              <motion.p key={line} variants={textReveal} initial="hidden" whileInView="visible" viewport={viewportText} transition={{ ...textTransition, delay: index * 0.08 }} className="story-copy text-lg leading-8 text-ivory/82 sm:text-xl">
                {line.replace(/\.$/, '')}.
              </motion.p>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
}
