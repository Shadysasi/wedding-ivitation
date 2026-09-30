import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { weddingData as d } from "../data/weddingData";
import SectionDivider from "./SectionDivider";

function getRemaining() {
  const diff = Math.max(0, new Date(d.targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    done: diff === 0,
  };
}
export default function Countdown() {
  const [left, setLeft] = useState(getRemaining());
  useEffect(() => {
    const t = setInterval(() => setLeft(getRemaining()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-burgundy px-5 py-24 text-center text-cream sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionDivider label="The countdown" />
        <h2 className="mt-4 font-editorial text-4xl italic sm:text-6xl">
          Counting down to forever
        </h2>
        {left.done ? (
          <p className="mt-12 font-display text-4xl text-gold">
            Today is the day! ❤️
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {[
              ["Days", left.days],
              ["Hours", left.hours],
              ["Minutes", left.minutes],
              ["Seconds", left.seconds],
            ].map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-gold/35 bg-white/[.04] px-3 py-6 backdrop-blur-sm"
              >
                <div className="font-display text-5xl text-cream sm:text-6xl">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[.3em] text-gold">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
