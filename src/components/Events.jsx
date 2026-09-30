import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { weddingData as d } from "../data/weddingData";
const icons = [Sparkles, Sparkles, CalendarDays, Sparkles];
export default function Events() {
  return (
    <section id="events" className="bg-ivory px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="Celebrate with us" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-5xl text-burgundy sm:text-6xl">
            Wedding Events
          </h2>
          <p className="mt-3 text-sm text-ink/55">
            Four beautiful moments. One unforgettable celebration.
          </p>
        </div>
        <div className="relative mt-14 grid gap-5 md:grid-cols-2">
          {d.events.map((event, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={event.type}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-[2rem] border border-gold/20 bg-white/60 p-6 shadow-[0_18px_60px_rgba(73,17,30,.06)] transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_25px_70px_rgba(73,17,30,.11)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
                    <Icon size={20} />
                  </div>
                  <span className="text-[9px] uppercase tracking-[.25em] text-gold">
                    Event 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-4xl text-burgundy">
                  {event.type}
                </h3>
                <div className="mt-5 space-y-2 text-sm text-ink/65">
                  <p className="flex gap-3">
                    <CalendarDays size={16} className="mt-0.5 text-gold" />
                    {event.date}
                  </p>
                  <p className="flex gap-3">
                    <Clock3 size={16} className="mt-0.5 text-gold" />
                    {event.time}
                  </p>
                  <p className="flex gap-3">
                    <MapPin size={16} className="mt-0.5 text-gold" />
                    {event.venue}, 
                    <br />
                    {event.address}
                  </p>
                </div>
                <a
                  href={'https://www.google.com/maps/place/Jayasakthi+Palace+AC+Kalyana+Mandapam/@12.9682895,80.1907408,17z/data=!4m6!3m5!1s0x3a525de6d594280f:0xb63b535bd6ece62c!8m2!3d12.9682895!4d80.1933157!16s%2Fg%2F11cncmnb8k?entry=ttu&g_ep=EgoyMDI2MDkyNy4wIKXMDSoASAFQAw%3D%3D'}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex rounded-full border border-burgundy/20 px-5 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-burgundy transition hover:bg-burgundy hover:text-white"
                >
                  View Map
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
