import { motion } from 'framer-motion'
import SectionDivider from './SectionDivider'
import { weddingData as d } from '../data/weddingData'

const fade = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.7}} }
export default function Couple() {
  return <section id="story" className="floral-pattern bg-ivory px-5 py-24 sm:px-8 lg:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionDivider label="Our story" />
      <motion.div initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={fade} className="mx-auto max-w-2xl text-center"><p className="font-editorial text-3xl leading-tight text-burgundy sm:text-5xl">“Two hearts, one beautiful story, and a lifetime to go.”</p><p className="mt-5 text-sm leading-7 text-ink/60">{d.story.intro}</p></motion.div>
      <div className="relative mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
        {[d.story.groom,d.story.bride].map((person,i)=><motion.article key={person.name} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}} variants={fade} transition={{delay:i*.12}} className="group text-center">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border border-gold/25 bg-cream p-2 shadow-xl shadow-burgundy/5"><img src={person.image} alt={`${person.name}, ${person.role}`} className="h-full w-full rounded-[11rem_11rem_1rem_1rem] object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-x-8 bottom-7 rounded-full border border-white/30 bg-burgundy/75 px-4 py-2 text-[9px] uppercase tracking-[.28em] text-white backdrop-blur-md">{person.role}</div></div>
          <h3 className="mt-6 font-display text-4xl text-burgundy">{person.name}</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-ink/60">{person.description}</p>
        </motion.article>)}
        <div className="absolute left-1/2 top-[47%] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-ivory font-editorial text-3xl italic text-gold shadow-lg md:flex">&amp;</div>
      </div>
      <div className="mt-20 grid gap-0 border-y border-gold/20 sm:grid-cols-4">
        {d.story.timeline.map(([title,copy],i)=><motion.div key={title} initial="hidden" whileInView="show" viewport={{once:true,amount:.3}} variants={fade} transition={{delay:i*.08}} className="relative border-b border-gold/20 px-5 py-7 text-center last:border-0 sm:border-b-0 sm:border-r sm:last:border-0"><span className="text-[9px] font-bold uppercase tracking-[.28em] text-gold">0{i+1}</span><h4 className="mt-2 font-display text-2xl text-burgundy">{title}</h4><p className="mt-2 text-xs leading-5 text-ink/55">{copy}</p></motion.div>)}
      </div>
    </div>
  </section>
}
