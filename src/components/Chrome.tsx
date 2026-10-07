import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { institution } from "../data/institution";
import { Magnetic } from "./ui";

const links = [
  { href: "#campus", label: "Campus" },
  { href: "#academics", label: "Academics" },
  { href: "#built", label: "Built at FISAT" },
  { href: "#founder", label: "Founder" },
  { href: "#life", label: "Life" },
  { href: "#placements", label: "Careers" },
  { href: "#news", label: "News" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-navy-900 focus:text-cream-50 focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-cream-50/92 backdrop-blur border-b hairline" : "bg-transparent"}`} style={{ background: scrolled ? "rgba(250,247,240,.93)" : "transparent" }}>
        <nav aria-label="Primary" className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 min-h-[44px]" aria-label="FISAT home">
            <span className={`font-display font-extrabold tracking-tight text-xl md:text-2xl ${scrolled ? "text-navy-900" : "text-cream-50"}`}>
              FISAT<span className="text-brass-500">.</span>
            </span>
            <span className={`hidden lg:block text-[11px] leading-tight max-w-[220px] ${scrolled ? "text-navy-900/60" : "text-cream-50/70"}`}>
              Federal Institute of Science and Technology
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`text-[13px] font-medium tracking-wide hover:opacity-70 min-h-[44px] inline-flex items-center ${scrolled ? "text-navy-900" : "text-cream-50"}`}>
                  {l.label.toUpperCase()}
                </a>
              </li>
            ))}
            <li>
              <Magnetic>
                <a href="#admissions" className="inline-flex items-center gap-2 bg-brass-500 text-navy-950 font-display font-bold text-[13px] tracking-wide px-5 py-2.5 hover:bg-brass-400 min-h-[44px]">
                  ADMISSIONS <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </Magnetic>
            </li>
          </ul>
          <button className={`md:hidden p-2 min-w-[44px] min-h-[44px] ${scrolled ? "text-navy-900" : "text-cream-50"}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-navy-900 text-cream-50 border-t hairline-light overflow-hidden">
              <ul className="px-6 py-4 space-y-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-display font-bold text-lg border-b hairline-light min-h-[44px]">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3 pb-2">
                  <a href="#admissions" onClick={() => setOpen(false)} className="block text-center bg-brass-500 text-navy-950 font-display font-bold px-5 py-3 min-h-[44px]">
                    ADMISSIONS
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" aria-label="FISAT hero" className="relative min-h-[100svh] bg-navy-900 text-cream-50 overflow-hidden flex flex-col">
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=2000&q=80&auto=format&fit=crop"
          alt="" className="w-full h-full object-cover img-duo opacity-60" fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,15,36,.55) 0%, rgba(6,15,36,.25) 40%, rgba(6,15,36,.88) 100%)" }} />
        <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: "linear-gradient(rgba(250,247,240,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,240,.5) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      </motion.div>

      <motion.div style={{ y: fgY, opacity: fade }} className="relative flex-1 flex flex-col justify-end mx-auto w-full max-w-[1400px] px-5 md:px-10 pb-10 md:pb-14 pt-32">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <p className="kicker text-brass-400">Federal Institute of Science and Technology — Hormis Nagar, Kerala</p>
          <h1 className="font-display font-extrabold leading-[0.88] tracking-tight mt-4 text-[19vw] md:text-[11rem] lg:text-[13rem]">
            FISAT
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mt-2">
            <p className="font-display font-light tracking-tight text-4xl md:text-7xl leading-none">
              FOCUS ON<br /><span className="font-extrabold">EXCELLENCE<span className="text-brass-500">.</span></span>
            </p>
            <div className="md:ml-auto md:text-right md:pb-2">
              <p className="text-sm md:text-base text-cream-50/80 max-w-sm md:ml-auto">
                {institution.approvals}.<br />
                <span className="text-cream-50 font-medium">{institution.accreditation}</span>
              </p>
              <div className="flex flex-wrap gap-3 mt-5 md:justify-end">
                <Magnetic>
                  <a href="#campus" className="inline-flex items-center gap-2 bg-cream-50 text-navy-900 font-display font-bold text-sm tracking-wide px-7 py-3.5 hover:bg-brass-400 hover:text-navy-950 min-h-[48px]">
                    EXPLORE FISAT <ArrowDown size={16} aria-hidden="true" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#admissions" className="inline-flex items-center gap-2 border border-cream-50/40 text-cream-50 font-display font-bold text-sm tracking-wide px-7 py-3.5 hover:border-brass-400 hover:text-brass-400 min-h-[48px]">
                    ADMISSIONS <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 pt-5 border-t hairline-light grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[["EST.", "2002 — Hormis Nagar"], ["STATUS", "Autonomous • NAAC A+"], ["NBA", "6 B.Tech programmes"], ["SCROLL", "↓ Enter the campus"]].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-baseline">
              <span className="kicker text-brass-400 text-[10px]">{k}</span>
              <span className="text-cream-50/80">{v}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="FISAT at a glance" className="bg-cream-50 border-b hairline">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          ["23", "years", "Legacy — est. 2002"],
          ["3,200+", "students", "On campus"],
          ["602*", "offers", "Class of 2026 (May 2026)"],
          ["Rs. 12 cr+", "scholarships", "Worth scholarships"],
        ].map(([big, , small]) => (
          <div key={small} className="border-l hairline pl-4">
            <p className="font-display font-extrabold text-3xl md:text-5xl text-navy-900 tracking-tight">{big}</p>
            <p className="text-xs md:text-sm text-navy-900/60 mt-1">{small}</p>
          </div>
        ))}
      </div>
      <div className="overflow-hidden border-t hairline py-3 bg-cream-100/60" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap font-display text-xs tracking-[0.3em] text-navy-900/60 flex gap-8 w-max">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>FOCUS ON EXCELLENCE ✦ AUTONOMOUS ✦ NAAC A+ (3.45 CGPA) ✦ NBA ✦ HORMIS NAGAR ✦ MOOKKANNOOR ✦ ANGAMALY ✦&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  );
}
