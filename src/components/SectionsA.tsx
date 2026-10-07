import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { campusNodes, departments } from "../data/institution";
import { Reveal, SectionHead } from "./ui";

export function CampusMap() {
  const [active, setActive] = useState(campusNodes[1]);
  const idx = campusNodes.findIndex((n) => n.id === active.id);
  const go = (dir: 1 | -1) =>
    setActive(campusNodes[(idx + dir + campusNodes.length) % campusNodes.length]);
  return (
    <section id="campus" aria-label="Interactive campus experience" className="bg-cream-50 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead
          no="01" kicker="Interactive campus"
          title={<>EXPLORE<br />YOUR FISAT<span className="text-brass-600">.</span></>}
          lede="Tap a numbered pin on the real campus photo — or just pick a destination from the list. Everything here is drawn from official FISAT facility pages."
        />
        {/* destination picker — every stop visible, no hunting for dots */}
        <Reveal>
          <ul aria-label="All campus destinations — pick one to view" className="flex gap-2 overflow-x-auto no-scrollbar snap-x pb-5 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
            {campusNodes.map((n, i) => {
              const isActive = active.id === n.id;
              return (
                <li key={n.id} className="snap-start shrink-0">
                  <button
                    onClick={() => setActive(n)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2.5 border px-3.5 py-2.5 min-h-[48px] font-display text-sm font-bold whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-navy-900 text-cream-50 border-navy-900"
                        : "bg-white/60 hairline text-navy-900 hover:border-navy-900"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${
                        isActive ? "bg-brass-500 text-navy-950" : "bg-navy-900/10 text-navy-900"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {n.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">
          <Reveal className="relative border hairline bg-navy-900 text-cream-50 overflow-hidden min-h-[480px] md:min-h-[600px]">
            {/* real aerial photograph as the map base */}
            <img
              src="/hero-fisat.png"
              alt="Aerial photograph of the FISAT campus at Hormis Nagar"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,15,36,.55) 0%, rgba(6,15,36,.12) 38%, rgba(6,15,36,.82) 100%)" }} aria-hidden="true" />
            <p className="absolute top-3 left-3 md:top-4 md:left-4 font-display text-[10px] tracking-[0.22em] text-cream-50/90 bg-navy-950/70 px-3 py-2">
              AERIAL VIEW — HORMIS NAGAR • PIN POSITIONS ILLUSTRATIVE
            </p>
            {/* numbered pins */}
            {campusNodes.map((n, i) => {
              const isActive = active.id === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => setActive(n)}
                  aria-pressed={isActive}
                  aria-label={`Pin ${i + 1}: show ${n.label}`}
                  className="absolute min-w-[44px] min-h-[44px] flex items-center justify-center group"
                  style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%,-50%)" }}
                >
                  <span className="relative flex items-center justify-center">
                    {isActive && <span className="node-ping absolute w-9 h-9 rounded-full border-2 border-brass-400" aria-hidden="true" />}
                    <span className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-display text-xs font-extrabold transition-all shadow-lg ${isActive ? "bg-brass-500 text-navy-950 border-cream-50 scale-110" : "bg-navy-950/85 text-cream-50 border-cream-50/70 group-hover:border-brass-400 group-hover:text-brass-400"}`}>
                      {i + 1}
                    </span>
                  </span>
                  {isActive && (
                    <span className="absolute top-full mt-1 whitespace-nowrap bg-navy-950/90 text-brass-400 font-display text-[10px] font-bold tracking-[0.18em] px-2.5 py-1.5">
                      {n.label.toUpperCase()}
                    </span>
                  )}
                </button>
              );
            })}
            <div className="absolute bottom-0 inset-x-0 p-3 md:p-4 flex items-center gap-2 md:gap-3 border-t hairline-light bg-navy-950/80 backdrop-blur">
              <button onClick={() => go(-1)} aria-label="Previous destination" className="w-11 h-11 shrink-0 border border-cream-50/30 flex items-center justify-center hover:border-brass-400 hover:text-brass-400 min-w-[44px] min-h-[44px]">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <div className="flex-1 min-w-0" aria-live="polite">
                <p className="font-display font-extrabold text-sm md:text-base truncate">
                  {String(idx + 1).padStart(2, "0")} — {active.label}
                </p>
                <p className="text-[11px] text-cream-50/60">
                  {idx + 1} of {campusNodes.length} • tap pins or use the list
                </p>
              </div>
              <button onClick={() => go(1)} aria-label="Next destination" className="w-11 h-11 shrink-0 border border-cream-50/30 flex items-center justify-center hover:border-brass-400 hover:text-brass-400 min-w-[44px] min-h-[44px]">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
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
                    <p className="kicker text-brass-600">
                      Now viewing {idx + 1} of {campusNodes.length}
                    </p>
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
                <div className="mt-auto pt-6 flex gap-2">
                  <button onClick={() => go(-1)} className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-display font-bold tracking-wide border hairline px-3 py-3 hover:bg-navy-900 hover:text-cream-50 min-h-[48px]">
                    <ChevronLeft size={15} aria-hidden="true" /> PREV
                  </button>
                  <button onClick={() => go(1)} className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-display font-bold tracking-wide bg-navy-900 text-cream-50 px-3 py-3 hover:bg-navy-800 min-h-[48px]">
                    NEXT <ChevronRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
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
              <img src={open.image} alt={`${open.name} at FISAT`} loading="lazy" className="h-44 md:h-56 w-full object-cover img-duo" />
              <p className="kicker text-brass-600 mt-6">{open.code} — Department</p>
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
