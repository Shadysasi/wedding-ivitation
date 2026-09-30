import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

const sections = ["home", "story", "events", "gallery", "venue", "rsvp"];
export default function App() {
  const [active, setActive] = useState("home");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-burgundy text-cream">
          <div className="text-center">
            <div className="font-display text-5xl">
              M <span className="text-gold">&amp;</span> P
            </div>
            <div className="mt-4 h-px w-24 bg-gold/60" />
            <p className="mt-4 text-[9px] uppercase tracking-[.35em] text-gold">
              Loading our story
            </p>
          </div>
        </div>
      )}
      <Navbar active={active} />
      <main>
        <Hero />
        <Couple />
        <Countdown />
        <Events />
        <Venue />
      </main>
      {/* Back to top button */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="group mx-auto mt-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b76a] bg-[#5a1725] text-[#f3d48a] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b76a] hover:text-[#3b0d18] hover:shadow-[0_12px_35px_rgba(216,183,106,0.25)] focus:outline-none focus:ring-2 focus:ring-[#d8b76a] focus:ring-offset-2 focus:ring-offset-[#3b0d18]"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp
          size={20}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </button>
      <Footer />
    </>
  );
}
