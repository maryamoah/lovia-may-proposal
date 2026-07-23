'use client';
import { motion } from 'framer-motion';
import { story } from '@/data/story';
export function SmallThings() {
  return <section className="bg-cream px-6 py-20 text-espresso sm:px-10" aria-labelledby="small-things-title"><div className="mx-auto max-w-3xl"><h2 id="small-things-title" className="font-serif text-[clamp(2.3rem,6vw,4.5rem)] leading-none">{story.smallThings.heading}</h2><div className="mt-10 space-y-5">{story.smallThings.lines.map((line,index)=><motion.p key={line} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.8}} transition={{delay:index*.04}} className={`font-serif text-xl leading-8 text-espresso/75 sm:text-2xl ${index%2?'sm:pl-14':''}`}>{line}</motion.p>)}</div></div></section>;
}
