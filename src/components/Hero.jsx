
import { motion } from 'framer-motion' 
import { ChevronDown } from 'lucide-react' 
import backgroundImage from '../assets/background.jpg'
import { weddingData as d } from '../data/weddingData' 
 
const petals = Array.from({length: 12}, (_, i) => ({ left: `${(i*37)%100}%`, delay: (i%5)*1.2, duration: 8+(i%4)*2 })) 
export default function Hero() { 
  return <section id="home" 
                    className="noise relative flex min-h-screen items-center justify-center overflow-hidden bg-[#4A1025] px-5 py-28 text-center text-[#FFF7EA]"
                    style={{
                              backgroundImage: `url('${backgroundImage}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat'
                            }}> 
    <div className="absolute inset-0 floral-pattern opacity-30" /> 
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,98,.22),transparent_36%)]" /> 
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,74,106,.18),transparent_30%)]" /> 
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(107,49,80,.22),transparent_32%)]" /> 
    <div className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[780px] max-w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF62]/30" /> 
    <div className="absolute left-1/2 top-1/2 h-[56vw] w-[56vw] max-h-[620px] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F3C6CF]/20" /> 
    {petals.map((p,i) => <motion.span key={i} className="absolute h-2 w-1.5 rounded-full bg-[#D4AF62]/60" style={{left:p.left, top:'-5%'}} animate={{y:['0vh','115vh'], x:[0, (i%2?1:-1)*40], rotate:[0,360], opacity:[0,.7,0]}} transition={{duration:p.duration, delay:p.delay, repeat:Infinity, ease:'linear'}} />)} 
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="relative z-10 max-w-5xl"> 
      <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-[#ffffff] sm:text-xs">Together with their families</p> 
      <div className="mx-auto mb-7 flex max-w-xl items-center gap-3"><span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF62]/80"/><span className="text-[#D4AF62]">✦</span><span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF62]/80"/></div> 
        <h1 className="sm:text-[2.5rem] text-3xl font-display  font-medium  text-[#ffffff]">
            {d.couple.groom}<br/>
            <span className="font-editorial text-[.5em] font-medium italic text-[#ffffff]">&amp;</span><br/>
            {d.couple.bride}</h1> 
        <p className="mx-auto mt-8 max-w-md font-editorial text-lg italic text-[#ffffff]/90 sm:text-xl">Invite you to celebrate their wedding</p> 
      <div className="mt-8 inline-flex flex-col items-center gap-2 border-y border-[#D4AF62]/50 px-8 py-4"><span className="font-display text-2xl tracking-[.12em] text-[#FFF7EA] sm:text-3xl">25 • OCTOBER • 2026</span><span className="text-[10px] uppercase tracking-[.35em] text-[#ffffff]">Chennai · Tamil Nadu</span></div> 
      <div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={() => document.getElementById('story')?.scrollIntoView({behavior:'smooth'})} className="rounded-full bg-gradient-to-r from-[#B84A6A] to-[#D4AF62] px-7 py-3 text-xs font-semibold uppercase tracking-[.2em] text-white shadow-lg shadow-[#B84A6A]/30 transition hover:-translate-y-0.5 hover:from-[#C85C7B] hover:to-[#E0C078]">View Invitation</button></div> 
    </motion.div> 
    <motion.button animate={{y:[0,8,0]}} transition={{duration:1.8,repeat:Infinity}} onClick={() => document.getElementById('story')?.scrollIntoView({behavior:'smooth'})} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[#F3C6CF]/70" aria-label="Scroll to invitation"><span className="mb-2 block text-[8px] uppercase tracking-[.3em]">Scroll</span><ChevronDown size={18}/></motion.button> 
  </section> 
}
