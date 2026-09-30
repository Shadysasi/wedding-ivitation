export default function Footer() {

return ( <footer className="relative overflow-hidden bg-[#3b0d18] px-5 py-5 text-center sm:px-8">

  {/* Decorative top line */}
  <div className="relative mx-auto mb-12 flex max-w-xs items-center justify-center gap-2">
    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a45c]/60" />

    <span className="text-lg text-[#d8b76a]" aria-hidden="true">
      ✦
    </span>

    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a45c]/60" />
  </div>

  <div className="relative z-10 mx-auto max-w-3xl">
    {/* Small heading */}
    <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#e1c27a]">
      Forever begins here
    </p>

    {/* Bottom divider */}
    <div className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-[#c9a45c]/30 to-transparent" />


    {/* Copyright */}
    <p className="mt-3 text-[9px] tracking-[0.15em] text-[#a98f86]">
      A celebration of love, family &amp; forever
    </p>
  </div>
</footer>

);
}
