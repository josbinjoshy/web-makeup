import { motion } from "framer-motion";
import { ArrowUpDown, BookOpen, Bus, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { busRoutes, campusLife, founder, libraryData } from "../data/institution";
import { Reveal, SectionHead } from "./ui";

export function Founder() {
  return (
    <section id="founder" aria-label="Founder story" className="bg-navy-950 text-cream-50 scroll-mt-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <SectionHead dark no="04" kicker="The idea that started it"
            title={<>ADV. P. V.<br />MATHEW<span className="text-brass-500">.</span></>}
            lede="Founder Chairman • 1953–2017 • Fondly called 'Mathew Sir'. Institutional storytelling only — no invented quotations."
          />
          <div className="space-y-5 text-cream-50/80 leading-relaxed">
            {founder.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={i === 0 ? "font-serif-i italic text-xl md:text-2xl text-cream-50 leading-snug" : ""}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 border hairline-light p-5 flex items-center justify-between">
            <span className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">2002 <span className="text-brass-500">→</span> TODAY</span>
            <a href="#news" className="hidden sm:inline-flex text-xs font-display tracking-[0.2em] text-brass-400 hover:text-cream-50 min-h-[44px] items-center">SEE THE ARC ↓</a>
          </Reveal>
        </div>
        <div aria-label="Institutional timeline">
          <p className="kicker text-brass-400 mb-6">Animated institutional timeline</p>
          <ol className="relative border-l border-cream-50/15 ml-2 space-y-0">
            {founder.timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.3) }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-navy-950 border-2 border-brass-500" aria-hidden="true" />
                <p className="font-display font-extrabold text-brass-400 text-lg tracking-tight">{t.year}</p>
                <p className="text-cream-50/75 text-sm md:text-base mt-1 max-w-md leading-relaxed">{t.text}</p>
              </motion.li>
            ))}
          </ol>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80&auto=format&fit=crop", "Campus blocks"],
              ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop", "Graduation day"],
              ["https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop", "Lecture hall"],
            ].map(([src, alt]) => (
              <img key={src} src={src} alt={alt} loading="lazy" className="h-28 md:h-36 w-full object-cover img-duo opacity-90 border hairline-light" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CampusLife() {
  const [active, setActive] = useState(campusLife[0]);
  return (
    <section id="life" aria-label="FISAT campus life" className="bg-cream-100/60 scroll-mt-20 border-b hairline">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead no="05" kicker="Student life"
          title={<>FISAT CAMPUS<br />LIFE<span className="text-brass-600">.</span></>}
          lede="Hostel to hackathon. A visual collage drawn from official FISAT life categories — every tile is a real place or programme."
        />
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Campus life areas">
            {campusLife.map((c) => (
              <button key={c.id} role="tab" aria-selected={active.id === c.id} onClick={() => setActive(c)}
                className={`relative h-28 md:h-36 overflow-hidden text-left group min-h-[44px] border ${active.id === c.id ? "border-navy-900 ring-2 ring-brass-500" : "border-transparent"}`}>
                <img src={c.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover img-duo" />
                <span className="absolute inset-0 bg-navy-950/55 group-hover:bg-navy-950/35 transition-colors" aria-hidden="true" />
                <span className="absolute bottom-1.5 left-2 right-2 font-display font-bold text-[11px] md:text-xs text-cream-50 leading-tight uppercase tracking-wide">{c.title}</span>
              </button>
            ))}
          </div>
          <motion.article key={active.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="relative border hairline bg-navy-900 text-cream-50 overflow-hidden min-h-[380px] flex flex-col justify-end" aria-live="polite">
            <img src={active.img} alt={`${active.title} at FISAT`} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 img-duo" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,15,36,.1), rgba(6,15,36,.9))" }} aria-hidden="true" />
            <div className="relative p-6 md:p-10">
              <p className="kicker text-brass-400">{active.id.toUpperCase()} — FISAT</p>
              <h3 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-2">{active.title.toUpperCase()}</h3>
              <p className="mt-3 max-w-xl text-cream-50/85 leading-relaxed">{active.text}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export function Transport() {
  const [from, setFrom] = useState(busRoutes[2].id);
  const [q, setQ] = useState("");
  const route = useMemo(() => busRoutes.find((r) => r.id === from)!, [from]);
  const suggestions = useMemo(
    () => busRoutes.filter((r) => r.from.toLowerCase().includes(q.toLowerCase()) || r.via.some((v) => v.toLowerCase().includes(q.toLowerCase()))),
    [q]
  );
  return (
    <section id="transport" aria-label="Transportation experience" className="bg-cream-50 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHead no="06" kicker="Transport"
            title={<>GET ME<br />TO FISAT<span className="text-brass-600">.</span></>}
            lede="Select where you're starting from. Routes follow FISAT's Angamaly–Mookkannoor hub pattern. Timings are representative — always confirm with the official transport desk before travelling."
          />
          <label htmlFor="bus-search" className="kicker text-navy-900/50 flex items-center gap-2"><Search size={14} aria-hidden="true" /> Search a stop</label>
          <input id="bus-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try 'Aluva', 'Kalady', 'Thrissur'…"
            className="mt-2 w-full border hairline bg-white px-4 py-3.5 text-navy-900 placeholder:text-navy-900/35 min-h-[48px]" />
          <div className="mt-4 grid sm:grid-cols-2 gap-2" role="listbox" aria-label="Starting locations">
            {(q ? suggestions : busRoutes).map((r) => (
              <button key={r.id} role="option" aria-selected={from === r.id} onClick={() => setFrom(r.id)}
                className={`text-left border px-4 py-3.5 min-h-[52px] transition-colors ${from === r.id ? "bg-navy-900 text-cream-50 border-navy-900" : "bg-white/60 hairline hover:border-navy-900"}`}>
                <span className="font-display font-bold block">{r.from}</span>
                <span className={`text-xs ${from === r.id ? "text-cream-50/60" : "text-navy-900/55"}`}>{r.firstBus} • {r.frequency}</span>
              </button>
            ))}
            {q && suggestions.length === 0 && <p className="text-sm text-navy-900/60 col-span-2">No match — try Aluva, Angamaly, Ernakulam, Chalakudy, Perumbavoor or Thrissur.</p>}
          </div>
        </div>
        <motion.div key={route.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="border hairline bg-navy-900 text-cream-50 p-6 md:p-10 flex flex-col" aria-live="polite">
          <p className="kicker text-brass-400 flex items-center gap-2"><Bus size={15} aria-hidden="true" /> Your FISAT bus</p>
          <h3 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-3">{route.from} → Hormis Nagar</h3>
          <ol className="mt-6 space-y-0">
            {[...route.via, "FISAT — Hormis Nagar, Mookkannoor"].map((s, i, arr) => (
              <li key={s} className="relative pl-8 pb-5 last:pb-0 text-sm md:text-base">
                <span className={`absolute left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${i === arr.length - 1 ? "bg-brass-500" : "border border-cream-50/60"}`} aria-hidden="true" />
                {i < arr.length - 1 && <span className="absolute left-[9px] top-5 bottom-0 w-px bg-cream-50/20" aria-hidden="true" />}
                <span className={i === arr.length - 1 ? "font-bold text-brass-400" : "text-cream-50/85"}>{s}</span>
              </li>
            ))}
          </ol>
          <div className="grid grid-cols-2 gap-3 mt-7 text-sm">
            <div className="border hairline-light p-4"><p className="kicker text-cream-50/50 text-[10px] flex gap-1 items-center"><Clock size={12} aria-hidden="true" /> First bus</p><p className="font-display font-bold text-xl mt-1">{route.firstBus}</p></div>
            <div className="border hairline-light p-4"><p className="kicker text-cream-50/50 text-[10px] flex gap-1 items-center"><ArrowUpDown size={12} aria-hidden="true" /> Frequency</p><p className="font-bold mt-1 leading-snug">{route.frequency}</p></div>
          </div>
          <p className="mt-4 text-xs text-cream-50/60 leading-relaxed">{route.note} Representative pattern for a design concept — verify current routes & timings at fisat.ac.in or the college office (8:00 AM–4:30 PM).</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Library() {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Collection", body: `${libraryData.volumes} volumes • ${libraryData.titles} titles • ${libraryData.journals} • ${libraryData.digital} in the digital collection. Central library plus MBA & MCA reference libraries and department libraries.` },
    { label: "Digital", body: "OPAC on FISAT Intranet (search / reserve / check status from anywhere) • DSpace digital archive • E-library remote access / mobile library • E-journals & e-books." },
    { label: "Spaces", body: `${libraryData.location}. ${libraryData.hours}. Smart-card transactions, reprographic centre, Book Bank Scheme (one standard book per subject per semester).` },
  ];
  return (
    <section id="library" aria-label="Library" className="bg-navy-900 text-cream-50 scroll-mt-20 border-y border-navy-950">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div>
          <SectionHead dark no="07" kicker="Knowledge"
            title={<>THE QUIET<br />ENGINE<span className="text-brass-500">.</span></>}
            lede="Library & Information Centre (LIC) — 'on its way to becoming an outstanding learning resource centre' (official library page)."
          />
          <div className="flex gap-2 border-b hairline-light" role="tablist" aria-label="Library aspects">
            {tabs.map((t, i) => (
              <button key={t.label} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
                className={`px-5 py-3 font-display font-bold text-sm tracking-wide min-h-[48px] border-b-2 -mb-px ${tab === i ? "border-brass-500 text-cream-50" : "border-transparent text-cream-50/50 hover:text-cream-50"}`}>
                {t.label.toUpperCase()}
              </button>
            ))}
          </div>
          <motion.p key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-cream-50/85 leading-relaxed max-w-2xl" aria-live="polite">
            {tabs[tab].body}
          </motion.p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
            {libraryData.services.map((s) => (
              <li key={s} className="flex gap-2 border-t hairline-light pt-2.5 text-cream-50/75"><BookOpen size={15} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />{s}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-cream-50/55">Help desk: {libraryData.contact}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 content-start">
          {[
            ["https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&auto=format&fit=crop", "Library stacks"],
            ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80&auto=format&fit=crop", "Reading room"],
            ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80&auto=format&fit=crop", "Grand library hall"],
            ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80&auto=format&fit=crop", "Study desks"],
          ].map(([src, alt], i) => (
            <Reveal key={src} delay={i * 0.06}>
              <img src={src} alt={alt} loading="lazy" className={`w-full object-cover img-duo border hairline-light ${i % 3 === 0 ? "h-64" : "h-44"} ${i === 2 ? "h-56" : ""}`} />
            </Reveal>
          ))}
          <div className="col-span-2 border hairline-light p-5 flex justify-between items-center">
            <span className="font-display font-extrabold text-2xl">83,650<span className="text-brass-400">+</span> <span className="text-sm font-medium text-cream-50/60">volumes</span></span>
            <span className="font-display font-extrabold text-2xl">5,000<span className="text-brass-400">+</span> <span className="text-sm font-medium text-cream-50/60">e-journals</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
