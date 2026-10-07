import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { useState } from "react";
import { campusNodes, departments } from "../data/institution";
import { Reveal, SectionHead } from "./ui";

export function CampusMap() {
  const [active, setActive] = useState(campusNodes[1]);
  return (
    <section id="campus" aria-label="Interactive campus experience" className="bg-cream-50 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead
          no="01" kicker="Interactive campus"
          title={<>EXPLORE<br />YOUR FISAT<span className="text-brass-600">.</span></>}
          lede="Not a map — an architectural walk. Tap a node to step inside that part of Hormis Nagar. All descriptions drawn from official FISAT facility pages."
        />
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">
          <Reveal className="relative border hairline bg-navy-900 text-cream-50 overflow-hidden min-h-[480px] md:min-h-[600px]">
            {/* stylised architectural illustration */}
            <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full" role="img" aria-label="Stylised FISAT campus illustration with interactive location nodes">
              <defs>
                <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M5 0H0V5" fill="none" stroke="rgba(250,247,240,.08)" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="80" fill="#0a1931" />
              <rect width="100" height="80" fill="url(#grid)" />
              {/* paths */}
              <path d="M0 55 Q 25 50 40 45 T 100 40" stroke="rgba(201,162,75,.5)" strokeWidth="1.2" fill="none" strokeDasharray="3 2" />
              <path d="M40 45 Q 50 35 62 30" stroke="rgba(250,247,240,.35)" strokeWidth="0.8" fill="none" />
              <path d="M40 45 Q 35 55 22 60" stroke="rgba(250,247,240,.35)" strokeWidth="0.8" fill="none" />
              {/* building footprints */}
              {[
                [36, 32, 12, 7], [56, 24, 11, 6], [16, 55, 11, 6], [50, 53, 9, 5],
                [70, 47, 8, 5], [75, 65, 10, 6], [8, 33, 8, 5], [30, 19, 8, 5],
                [44, 43, 8, 5], [61, 37, 9, 5], [53, 63, 10, 5],
              ].map(([x, y, w, h], i) => (
                <g key={i}>
                  <rect x={x} y={y} width={w} height={h} fill="none" stroke="rgba(250,247,240,.45)" strokeWidth="0.4" />
                  <rect x={x} y={y} width={w} height={1.2} fill="rgba(201,162,75,.55)" />
                </g>
              ))}
              {/* green */}
              <ellipse cx="82" cy="22" rx="12" ry="7" fill="none" stroke="rgba(250,247,240,.25)" strokeWidth="0.4" strokeDasharray="2 2" />
              <ellipse cx="18" cy="70" rx="10" ry="5" fill="none" stroke="rgba(250,247,240,.25)" strokeWidth="0.4" strokeDasharray="2 2" />
              <text x="3" y="7" fill="rgba(250,247,240,.55)" fontSize="3" letterSpacing="1.5">HORMIS NAGAR — MOOKKANNOOR</text>
              <text x="3" y="77" fill="rgba(201,162,75,.8)" fontSize="2.6" letterSpacing="1">N ↑ • NOT TO SCALE — ILLUSTRATION</text>
            </svg>
            {/* nodes */}
            {campusNodes.map((n) => {
              const isActive = active.id === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => setActive(n)}
                  aria-pressed={isActive}
                  aria-label={`Show ${n.label}`}
                  className="absolute min-w-[44px] min-h-[44px] flex items-center justify-center group"
                  style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%,-50%)" }}
                >
                  <span className="relative flex items-center justify-center">
                    {isActive && <span className="node-ping absolute w-8 h-8 rounded-full border border-brass-400" aria-hidden="true" />}
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-display text-[10px] font-bold transition-all ${isActive ? "bg-brass-500 text-navy-950 border-brass-500 scale-110" : "bg-navy-900/90 text-cream-50 border-cream-50/50 group-hover:border-brass-400 group-hover:text-brass-400"}`}>
                      {n.short}
                    </span>
                  </span>
                  <span className={`hidden md:block absolute top-9 whitespace-nowrap text-[10px] font-display tracking-[0.18em] px-2 py-1 ${isActive ? "text-brass-400" : "text-cream-50/70"}`}>
                    {n.label.toUpperCase()}
                  </span>
                </button>
              );
            })}
            <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-center justify-between border-t hairline-light bg-navy-950/70 backdrop-blur text-xs">
              <span className="text-cream-50/70 font-display tracking-[0.2em]">11 DESTINATIONS • TAP TO ENTER</span>
              <span className="text-brass-400 font-display text-xs hidden sm:block">{active.label.toUpperCase()}</span>
            </div>
          </Reveal>

          <div className="border hairline bg-white/60 flex flex-col" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-8 flex-1 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="kicker text-brass-600">Now viewing</p>
                    <h3 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 tracking-tight mt-2">{active.label}</h3>
                  </div>
                  <span className="w-11 h-11 shrink-0 border hairline flex items-center justify-center text-navy-900" aria-hidden="true">
                    <Building2 size={20} />
                  </span>
                </div>
                <p className="mt-4 text-navy-900/75 leading-relaxed">{active.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {active.facts.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-navy-900/85 border-t hairline pt-2.5">
                      <MapPin size={15} className="mt-0.5 shrink-0 text-brass-600" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex gap-2 flex-wrap">
                  {campusNodes.filter((n) => n.id !== active.id).slice(0, 3).map((n) => (
                    <button key={n.id} onClick={() => setActive(n)} className="text-xs font-display font-semibold tracking-wide border hairline px-3 py-2 hover:bg-navy-900 hover:text-cream-50 min-h-[40px]">
                      → {n.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* mobile expandable list for a11y (no hover-only info) */}
        <details className="lg:hidden mt-4 border hairline bg-white/60 p-4">
          <summary className="font-display font-bold cursor-pointer min-h-[44px] flex items-center">All 11 destinations (list view)</summary>
          <ul className="mt-3 space-y-2">
            {campusNodes.map((n) => (
              <li key={n.id}>
                <button onClick={() => { setActive(n); }} className="w-full text-left border-t hairline py-3 flex justify-between items-center min-h-[44px]">
                  <span className="font-medium">{n.label}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

export function Academics() {
  const [open, setOpen] = useState(departments[0]);
  const [filter, setFilter] = useState<"All" | "B.Tech" | "PG">("All");
  const list = departments.filter((d) =>
    filter === "All" ? true : filter === "B.Tech" ? d.programmes.some((p) => p.startsWith("B.Tech")) : d.programmes.some((p) => /M\.|MBA|MCA/.test(p))
  );
  return (
    <section id="academics" aria-label="Academic exploration" className="bg-navy-900 text-cream-50 scroll-mt-20 border-y border-navy-950">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead dark no="02" kicker="Academics"
          title={<>WHAT WILL<br />YOU BUILD<span className="text-brass-500">?</span></>}
          lede="Nine departments, seven B.Tech programmes plus MBA, MCA/IMCA and five M.Tech tracks — all under KTU affiliation with autonomous curriculum. Pick a department to see programmes, labs, research and what's next."
        />
        <div className="flex gap-2 mb-6" role="tablist" aria-label="Filter departments">
          {(["All", "B.Tech", "PG"] as const).map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
              className={`px-5 py-2.5 font-display text-sm font-bold tracking-wide border min-h-[44px] ${filter === f ? "bg-brass-500 text-navy-950 border-brass-500" : "border-cream-50/25 text-cream-50/80 hover:border-brass-400"}`}>
              {f.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0 border hairline-light">
          <ul className="divide-y divide-cream-50/10 max-h-[560px] overflow-auto no-scrollbar" aria-label="Departments">
            {list.map((d) => (
              <li key={d.id}>
                <button onClick={() => setOpen(d)} aria-current={open.id === d.id}
                  className={`w-full text-left px-5 md:px-7 py-4 md:py-5 flex items-baseline gap-4 min-h-[44px] transition-colors ${open.id === d.id ? "bg-cream-50 text-navy-900" : "hover:bg-cream-50/5"}`}>
                  <span className={`editorial-num ${open.id === d.id ? "text-brass-600" : "text-cream-50/40"}`}>{d.code}</span>
                  <span className="flex-1">
                    <span className="font-display font-bold text-base md:text-xl tracking-tight block">{d.name}</span>
                    <span className={`text-xs mt-1 block ${open.id === d.id ? "text-navy-900/60" : "text-cream-50/50"}`}>{d.intake}{d.accredited ? " • NBA-accredited" : ""}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className={open.id === d.id ? "text-brass-600" : "text-cream-50/40"} />
                </button>
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            <motion.article key={open.id + filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="bg-cream-50 text-navy-900 p-6 md:p-10 min-h-[420px]" aria-live="polite">
              <p className="kicker text-brass-600">{open.code} — Department</p>
              <h3 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight mt-2">{open.name}</h3>
              <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm">
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Programmes</h4>
                  <ul className="space-y-1.5 font-medium">{open.programmes.map((p) => <li key={p} className="border-l-2 border-brass-500 pl-3">{p}</li>)}</ul>
                </div>
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Labs</h4>
                  <ul className="space-y-1.5">{open.labs.map((p) => <li key={p}>• {p}</li>)}</ul>
                </div>
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Research</h4>
                  <ul className="space-y-1.5">{open.research.map((p) => <li key={p}>• {p}</li>)}</ul>
                </div>
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Student opportunities</h4>
                  <ul className="space-y-1.5">{open.opportunities.map((p) => <li key={p}>• {p}</li>)}</ul>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#admissions" className="inline-flex items-center gap-2 bg-navy-900 text-cream-50 font-display font-bold text-sm px-6 py-3 hover:bg-navy-800 min-h-[48px]">
                  ADMISSION LINK <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a href="#vision" className="inline-flex items-center gap-2 border hairline font-display font-bold text-sm px-6 py-3 hover:border-navy-900 min-h-[48px]">
                  VISION & MISSION
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
        {/* swipeable cards on mobile */}
        <div className="lg:hidden mt-6 flex gap-3 overflow-x-auto no-scrollbar snap-x pb-2" aria-label="Swipe departments">
          {departments.map((d) => (
            <button key={d.id} onClick={() => setOpen(d)} className={`snap-start shrink-0 w-64 text-left border p-4 min-h-[120px] ${open.id === d.id ? "bg-brass-500 text-navy-950 border-brass-500" : "border-cream-50/20 text-cream-50"}`}>
              <span className="editorial-num opacity-70">{d.code}</span>
              <span className="font-display font-bold block mt-1 leading-tight">{d.name}</span>
              <span className="text-xs opacity-70">{d.intake}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
