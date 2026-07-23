'use client';

import { story } from '@/data/story';
import { OptionalImage } from './OptionalImage';

export function FeltAtHomeSection() {
  return (
    <section data-navigation-theme="dark" className="bg-espresso px-5 pb-20 text-ivory sm:px-10 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
        <OptionalImage src={story.media.feltAtHome} alt="The moment May felt at home with Lovia" className="min-h-[56vh] overflow-hidden rounded-sm border border-gold/25 bg-black lg:min-h-[76vh]" imageClassName="object-cover" sizes="(min-width: 1024px) 70vw, 100vw" objectPosition={story.feltAtHome.objectPosition} />
        <div className="lg:-ml-20 lg:bg-espresso/88 lg:p-10">
          <p className="eyebrow text-gold">{story.feltAtHome.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[clamp(2.35rem,6vw,5rem)] leading-[1.02] tracking-[-.035em]">{story.feltAtHome.heading}</h2>
          <p className="story-copy mt-6 text-lg leading-8 text-ivory/76 sm:text-xl">{story.feltAtHome.body}</p>
          <p className="mt-8 font-serif text-[clamp(1.9rem,4vw,3.4rem)] leading-tight text-gold">{story.feltAtHome.closing}</p>
        </div>
      </div>
    </section>
  );
}
