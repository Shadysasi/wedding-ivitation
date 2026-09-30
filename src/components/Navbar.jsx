import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [['Home','home'],['Our Story','story'],['Events','events'],['Venue','venue']]

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <>
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 bg-[#C7C6BF]" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-burgundy/75 px-4 py-2.5 text-black shadow-lg shadow-burgundy/10 backdrop-blur-xl sm:px-6">
        <button onClick={() => go('home')} className="font-display text-xl tracking-wide text-cream sm:text-2xl" aria-label="Go to home">M<span className="text-gold">&</span>P</button>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label,id]) => <button key={id} onClick={() => go(id)} className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition font-bold ${active === id ? 'bg-white ' : 'text-cream/75 hover:bg-white'}`}>{label}</button>)}
        </div>
        <button className="rounded-full p-2 text-cream md:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
    </nav>
    <AnimatePresence>
      {open && <motion.div initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="fixed inset-x-3 top-[72px] z-40 rounded-3xl border border-gold/20 bg-burgundy/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        {links.map(([label,id]) => <button key={id} onClick={() => go(id)} className="block w-full rounded-2xl px-5 py-3 text-left font-display text-xl text-cream transition hover:bg-white/10">{label}</button>)}
      </motion.div>}
    </AnimatePresence>
  </>
}
