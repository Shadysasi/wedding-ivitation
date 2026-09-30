export default function SectionDivider({ label }) {
  return (
    <div className="flex items-center justify-center gap-4 py-4 text-[10px] uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/70" />
      <span>{label}</span>
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
