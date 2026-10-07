import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { admissions, institution, news, placements, visionMission, type NewsItem } from "../data/institution";
import { Counter, Reveal, SectionHead } from "./ui";

export function Placements() {
  return (
    <section id="placements" aria-label="Placements and careers" className="bg-cream-50 scroll-mt-20 border-b hairline">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead no="07" kicker="Careers"
          title={<>FROM CAMPUS<br />→ CAREER<span className="text-brass-600">.</span></>}
          lede="Official placement record, set as animated typography — not boring cards. Recruiter names only where verified on fisat.ac.in."
        />
        <div className="border-y hairline divide-y divide-[rgba(10,25,49,.14)]">
          <Reveal>
            <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="editorial-num text-navy-900/50">CLASS OF 2026</span>
              <p className="font-display font-extrabold tracking-tight leading-none text-[16vw] md:text-[7rem] text-navy-900">
                <Counter to={600} suffix="+" /> <span className="text-2xl md:text-3xl font-bold text-brass-600 align-middle">offers</span>
              </p>
              <p className="md:ml-auto font-display font-bold text-xl md:text-2xl">Highest <Counter to={17.22} decimals={2} suffix=" LPA" className="text-brass-600" /></p>
            </div>
          </Reveal>
          {placements.history.slice(1).map((h) => (
            <Reveal key={h.year}>
              <div className="py-5 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8">
                <span className="editorial-num text-navy-900/50 w-28 shrink-0">{h.year}</span>
                <p className="font-display font-bold text-xl md:text-4xl tracking-tight text-navy-900/90">{h.offers} <span className="text-navy-900/40">• {h.highest}</span></p>
                <p className="md:ml-auto text-sm text-navy-900/55">{h.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="kicker text-navy-900/50 mb-3">Verified recruiters (official placement pages)</p>
          <div className="flex flex-wrap gap-2">
            {placements.recruiters.map((r) => (
              <span key={r} className="border hairline px-3.5 py-2 text-sm font-medium text-navy-900/80 bg-white/60 hover:border-navy-900">{r}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-navy-900/65 max-w-3xl leading-relaxed flex gap-2">
            <Briefcase size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> {placements.cell}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function NewsFeed() {
  const [kind, setKind] = useState<"All" | NewsItem["kind"]>("All");
  const items = kind === "All" ? news : news.filter((n) => n.kind === kind);
  return (
    <section id="news" aria-label="News and events" className="bg-cream-100/60 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead no="08" kicker="Editorial feed"
          title={<>NEWS / EVENTS /<br />WINS<span className="text-brass-600">.</span></>}
          lede="Drawn from the official FISAT news ticker and announcements (Sep 2026). Filter without losing place."
        />
        <div className="flex gap-2 mb-8" role="tablist" aria-label="Filter news">
          {(["All", "News", "Events", "Achievements"] as const).map((k) => (
            <button key={k} role="tab" aria-selected={kind === k} onClick={() => setKind(k)}
              className={`px-5 py-2.5 font-display text-sm font-bold border min-h-[44px] ${kind === k ? "bg-navy-900 text-cream-50 border-navy-900" : "hairline bg-white/50 hover:border-navy-900"}`}>
              {k.toUpperCase()}
            </button>
          ))}
        </div>
        <motion.ul layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((n) => (
              <motion.li key={n.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}>
                <article className="border hairline bg-cream-50 p-5 md:p-6 h-full flex flex-col hover:border-navy-900 transition-colors min-h-[190px]">
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-[11px] font-bold tracking-[0.2em] px-2.5 py-1 ${n.kind === "Achievements" ? "bg-brass-500 text-navy-950" : n.kind === "Events" ? "bg-navy-900 text-cream-50" : "border hairline text-navy-900/70"}`}>
                      {n.kind.toUpperCase()}
                    </span>
                    <span className="text-xs text-navy-900/50">{n.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-snug text-navy-900 mt-3 flex-1">{n.title}</h3>
                  <p className="mt-3 text-xs font-display tracking-[0.18em] text-navy-900/50">{n.dept.toUpperCase()} • FISAT.AC.IN</p>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section id="vision" aria-label="Vision and mission" className="bg-cream-50 scroll-mt-20 border-t hairline">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <SectionHead no="09" kicker="Why we exist"
          title={<>“FOCUS ON<br />EXCELLENCE”<span className="text-brass-600">.</span></>}
          lede="Official motto, vision, mission and core values — quoted verbatim from fisat.ac.in/vision. Not paraphrased."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="border hairline bg-white/60 p-6 md:p-10">
            <p className="kicker text-brass-600">Our vision</p>
            <blockquote className="font-serif-i text-xl md:text-2xl leading-snug text-navy-900 mt-3">“{visionMission.vision}”</blockquote>
            <div className="mt-6 space-y-4">
              {visionMission.mission.map((m, i) => (
                <p key={i} className="text-sm md:text-base text-navy-900/75 leading-relaxed border-l-2 border-brass-500 pl-4">
                  <span className="kicker text-navy-900/45 block mb-1">Mission {i + 1}</span>{m}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="bg-navy-900 text-cream-50 p-6 md:p-10 flex flex-col">
            <p className="kicker text-brass-400">Core values — INSPIRE</p>
            <ul className="mt-4 divide-y divide-cream-50/10">
              {visionMission.coreValues.map((v, i) => (
                <li key={v} className="py-3 flex items-baseline gap-4">
                  <span className="font-display font-light text-brass-400 text-sm">0{i + 1}</span>
                  <span className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-xs text-cream-50/55">Promoted by the Federal Bank Officers' Association Educational Society (FBOAES) • Est. 2002 • Autonomous (UGC, 10 yrs from 2025)</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Admissions() {
  const [prog, setProg] = useState<"B.Tech" | "M.Tech" | "MBA" | "MCA">("B.Tech");
  const detail: Record<string, string> = {
    "B.Tech": "7 programmes incl. Computer Science & Design. Govt + Management quotas via KEAM. See fee table (2026) and official counselling schedule.",
    "M.Tech": "5 tracks: AI & Data Science (+WP), Power Electronics & Power Systems, Renewable Energy (+WP), VLSI & Embedded, Structural & Construction Mgmt (24). Contact: +91 9656 927 612.",
    "MBA": "120 seats, FISAT Business School. CMAT/CAT/KMAT + GD/PI. Application fee Rs. 750. Contact: +91 96569 68242.",
    "MCA": "MCA 60 + Integrated MCA 60. Apply via mca-admission portal (Rs. 350). 1st-yr total Rs. 92,555 (MQ). Contact: mcaadmission@fisat.ac.in.",
  };
  return (
    <section id="admissions" aria-label="Admissions" className="bg-brass-500 text-navy-950 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24">
        <Reveal>
          <p className="kicker text-navy-950/60">10 — Admissions</p>
          <h2 className="font-display font-extrabold tracking-tight leading-[0.92] text-4xl md:text-7xl mt-3">YOUR NEXT CHAPTER<br />STARTS HERE<span className="text-cream-50">.</span></h2>
        </Reveal>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 mt-10">
          <div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Programme categories">
              {(Object.keys(detail) as Array<"B.Tech" | "M.Tech" | "MBA" | "MCA">).map((p) => (
                <button key={p} role="tab" aria-selected={prog === p} onClick={() => setProg(p)}
                  className={`px-5 py-3 font-display font-bold text-sm min-h-[48px] border-2 ${prog === p ? "bg-navy-950 text-cream-50 border-navy-950" : "border-navy-950/30 hover:border-navy-950"}`}>
                  {p.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="mt-4 font-medium leading-relaxed" aria-live="polite">{detail[prog]}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {admissions.eligibility.map((e) => <li key={e} className="flex gap-2 border-t border-navy-950/15 pt-2"><BadgeCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{e}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#admissions-fee" className="inline-flex items-center gap-2 bg-navy-950 text-cream-50 font-display font-bold px-7 py-4 text-sm min-h-[52px] hover:bg-navy-900">
                APPLY — ADMISSIONS DESK <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={`mailto:${institution.email}`} className="inline-flex items-center gap-2 border-2 border-navy-950 font-display font-bold px-7 py-4 text-sm min-h-[52px] hover:bg-navy-950 hover:text-cream-50">
                CONTACT ADMISSIONS
              </a>
            </div>
            <p className="mt-4 text-xs font-medium text-navy-950/70">{admissions.ctaNote}</p>
          </div>
          <div id="admissions-fee" className="bg-navy-950 text-cream-50 p-6 md:p-8 scroll-mt-24">
            <h3 className="font-display font-bold text-lg flex items-center gap-2"><GraduationCap size={20} aria-hidden="true" /> B.Tech fee structure — Admission Year 2026 (total payable)</h3>
            <dl className="mt-4 divide-y divide-cream-50/10">
              {admissions.btechFee2026.map((f) => (
                <div key={f.cat} className="py-2.5 flex justify-between gap-4 text-sm">
                  <dt className="text-cream-50/70">{f.cat}</dt>
                  <dd className="font-display font-bold">{f.total}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[11px] text-cream-50/50 mt-3">Fee may change per Govt/University orders. See eligibility & contacts on this page.</p>
            <h4 className="kicker text-brass-400 mt-6">Talk to us</h4>
            <ul className="mt-2 space-y-1.5 text-sm">
              {admissions.contacts.map((c) => <li key={c.label} className="flex gap-2"><span className="font-bold w-24 shrink-0">{c.label}</span><span className="text-cream-50/75">{c.value}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols: { h: string; links: { label: string; to: string }[] }[] = [
    {
      h: "Admissions",
      links: [
        { label: "B.Tech", to: "/admissions" },
        { label: "M.Tech", to: "/admissions" },
        { label: "MBA", to: "/admissions" },
        { label: "MCA / IMCA", to: "/admissions" },
        { label: "Fees & Scholarships", to: "/admissions" },
        { label: "Hostel admission", to: "/campus-life" },
      ],
    },
    {
      h: "Departments",
      links: [
        { label: "CSE & CSD", to: "/academics" },
        { label: "ECE & EIE", to: "/academics" },
        { label: "EEE & ME", to: "/academics" },
        { label: "Civil", to: "/academics" },
        { label: "MBA (FBS)", to: "/academics" },
        { label: "MCA", to: "/academics" },
        { label: "Science & Humanities", to: "/academics" },
      ],
    },
    {
      h: "Campus",
      links: [
        { label: "About FISAT", to: "/about" },
        { label: "Faculty", to: "/faculty" },
        { label: "Library & OPAC", to: "/library" },
        { label: "Campus Life", to: "/campus-life" },
        { label: "Placements", to: "/placements" },
        { label: "News & Events", to: "/news" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];
  return (
    <footer className="bg-navy-950 text-cream-50" aria-label="Footer">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-14 md:pt-20 pb-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <img
              src="/fisat-logo.png"
              alt="FISAT — Federal Institute of Science and Technology, Focus on Excellence, Autonomous"
              className="h-16 md:h-20 w-auto max-w-[300px] object-contain bg-white px-2 py-1 rounded-sm"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-cream-50/70 leading-relaxed max-w-sm">
              Federal Institute of Science And Technology (Autonomous)<br />
              {institution.approvals}.<br />
              NAAC A+ & NBA [B.Tech — CSE, ECE, EEE, EIE, ME & CE] • ISO 21001:2018.
            </p>
            <address className="mt-4 text-sm not-italic text-cream-50/75 leading-relaxed">
              {institution.location}<br />
              Ph: {institution.phone}<br />
              Email: <a href={`mailto:${institution.email}`} className="underline hover:text-brass-400">{institution.email}</a>
            </address>
          </div>
          {cols.map((col) => (
            <nav key={col.h} aria-label={col.h}>
              <h3 className="kicker text-brass-400">{col.h}</h3>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}><Link to={l.to} className="block py-1.5 text-sm text-cream-50/70 hover:text-cream-50 min-h-[36px]">{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t hairline-light flex flex-col md:flex-row gap-3 justify-between text-xs text-cream-50/55">
          <p>© 2026 FISAT — Hormis Nagar, Mookkannoor, Angamaly. All content on this site; transport times representative.</p>
          <p className="flex gap-4">
            <span className="min-h-[44px] inline-block">HORMIS NAGAR • MOOKKANNOOR</span>
            <Link to="/" className="hover:text-cream-50 min-h-[44px] inline-block">BACK TO HOME ↑</Link>
          </p>
        </div>
      </div>
      {/* mobile bottom nav + sticky CTA */}
      <div className="md:hidden sticky bottom-0 z-40 bg-navy-950/95 backdrop-blur border-t hairline-light">
        <nav aria-label="Mobile" className="grid grid-cols-4 text-center text-[11px] font-display font-bold">
          {([["Campus", "/campus-life"], ["Study", "/academics"], ["Faculty", "/faculty"], ["News", "/news"]] as const).map(([l, h]) => (
            <Link key={l} to={h} className="py-3.5 min-h-[52px] flex items-center justify-center text-cream-50/80">{l.toUpperCase()}</Link>
          ))}
        </nav>
        <Link to="/admissions" className="block text-center bg-brass-500 text-navy-950 font-display font-extrabold py-4 min-h-[56px]">APPLY TO FISAT →</Link>
      </div>
    </footer>
  );
}
