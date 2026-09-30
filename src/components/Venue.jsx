import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { weddingData as d } from "../data/weddingData";
import mandabam from "../assets/mandabam.avif";
export default function Venue() {
  return (
    <section id="venue" className="bg-ivory px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionDivider label="The place" />
        <div className="grid overflow-hidden rounded-[2rem] border border-gold/20 bg-white/60 shadow-[0_25px_90px_rgba(73,17,30,.08)] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-h-[330px] lg:min-h-[540px]"
          >
            <img
              src={mandabam}
              alt={d.venue.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="text-[9px] uppercase tracking-[.35em] text-gold">
              Wedding venue
            </span>
            <h2 className="mt-4 font-display text-5xl text-burgundy sm:text-6xl">
              {d.venue.name}
            </h2>
            <div className="mt-6 flex gap-3 text-sm leading-6 text-ink/60">
              <MapPin size={18} className="mt-1 shrink-0 text-gold" />
              {d.venue.address}
            </div>
            <p className="mt-7 font-editorial text-xl italic text-burgundy/80">
              “A beautiful setting for the beginning of forever.”
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={d.venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-3 text-[10px] font-semibold uppercase tracking-[.18em] text-white transition hover:bg-maroon"
              >
                Get Directions <ExternalLink size={14} />
              </a>
              <a
                href={d.venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-burgundy/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.18em] text-burgundy transition hover:bg-burgundy hover:text-white hover:bg-neutral-900"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
