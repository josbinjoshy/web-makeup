import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, SectionHead } from "../components/ui";
import { departments } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

const ug = [
  { prog: "B.Tech Civil Engineering", intake: "120 Seats", nba: true },
  { prog: "B.Tech Computer Science & Engineering", intake: "180 Seats", nba: true },
  { prog: "B.Tech Electronics & Communication Engineering", intake: "120 Seats", nba: true },
  { prog: "B.Tech Electrical & Electronics Engineering", intake: "60 Seats", nba: true },
  { prog: "B.Tech Electronics & Instrumentation Engineering", intake: "60 Seats", nba: true },
  { prog: "B.Tech Mechanical Engineering", intake: "120 Seats", nba: true },
  { prog: "B.Tech Computer Science & Design", intake: "60 Seats", nba: false },
];

const pg = [
  { prog: "M.Tech Artificial Intelligence & Data Science", intake: "12", dept: "CSE" },
  { prog: "M.Tech AI & Data Science (Working Professionals)", intake: "15", dept: "CSE" },
  { prog: "M.Tech Power Electronics & Power Systems", intake: "12", dept: "EEE" },
  { prog: "M.Tech Renewable Energy", intake: "12", dept: "ME" },
  { prog: "M.Tech Renewable Energy (Working Professionals)", intake: "15", dept: "ME" },
  { prog: "M.Tech VLSI & Embedded Systems", intake: "12", dept: "ECE" },
  { prog: "M.Tech Structural Engineering & Construction Management", intake: "24", dept: "CE" },
  { prog: "MBA (Finance, Marketing, HR, IS, Operations, IB)", intake: "120", dept: "FBS" },
  { prog: "MCA (2-year)", intake: "60", dept: "MCA" },
  { prog: "Integrated MCA (5-year)", intake: "60", dept: "MCA" },
];

export default function Academics() {
  const [open, setOpen] = useState(departments[0]);
  return (
    <>
      <PageHero
        kicker="Academics"
        title={
          <>
            WHAT WILL YOU STUDY<span className="text-brass-500">?</span>
          </>
        }
        lede="UG programmes affiliated to APJ Abdul Kalam Technological University (8 semesters); PG programmes of 4 semesters. Autonomous curriculum under KTU affiliation."
      />
      <Crumbs items={["Academics"]} />

      <section aria-label="UG programmes" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Undergraduate"
          title={
            <>
              B.TECH PROGRAMMES<span className="text-brass-600">.</span>
            </>
          }
          lede="Seven B.Tech programmes. All except Computer Science & Design are NBA-accredited."
        />
        <div className="border hairline divide-y divide-[rgba(10,25,49,.14)]">
          {ug.map((u) => (
            <Reveal key={u.prog}>
              <div className="py-4 flex flex-col md:flex-row md:items-center gap-1 md:gap-6 px-2">
                <p className="font-display font-bold text-lg md:text-2xl tracking-tight text-navy-900 flex-1">
                  {u.prog}
                </p>
                <p className="font-display font-extrabold text-brass-600">{u.intake}</p>
                {u.nba && (
                  <span className="text-[11px] font-display font-bold tracking-[0.2em] bg-navy-900 text-cream-50 px-3 py-1.5 w-fit">
                    NBA ACCREDITED
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-label="PG programmes" className="bg-navy-900 text-cream-50 border-y border-navy-950">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
          <SectionHead
            dark
            no="02"
            kicker="Postgraduate"
            title={
              <>
                M.TECH • MBA • MCA<span className="text-brass-500">.</span>
              </>
            }
            lede="Postgraduate programmes in M.Tech, Master of Computer Applications and Master of Business Administration."
          />
          <div className="border border-cream-50/15 divide-y divide-cream-50/10">
            {pg.map((p) => (
              <div key={p.prog} className="py-4 px-4 flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                <p className="font-display font-bold text-lg md:text-xl tracking-tight flex-1">{p.prog}</p>
                <span className="text-xs font-display tracking-[0.2em] text-brass-400">{p.dept}</span>
                <p className="font-display font-extrabold text-xl text-cream-50">
                  {p.intake} <span className="text-sm font-medium text-cream-50/60">seats</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Departments" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="03"
          kicker="Departments"
          title={
            <>
              NINE DEPARTMENTS<span className="text-brass-600">.</span>
            </>
          }
          lede="Pick a department to see programmes, labs, research and student opportunities."
        />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0 border hairline">
          <ul className="divide-y divide-[rgba(10,25,49,.14)] max-h-[560px] overflow-auto no-scrollbar" aria-label="Departments">
            {departments.map((d) => (
              <li key={d.id}>
                <button
                  onClick={() => setOpen(d)}
                  aria-current={open.id === d.id}
                  className={`w-full text-left px-5 md:px-7 py-4 md:py-5 flex items-baseline gap-4 min-h-[44px] transition-colors ${
                    open.id === d.id ? "bg-cream-50 text-navy-900" : "hover:bg-navy-900 hover:text-cream-50"
                  }`}
                >
                  <span className={`editorial-num ${open.id === d.id ? "text-brass-600" : "opacity-50"}`}>
                    {d.code}
                  </span>
                  <span className="flex-1">
                    <span className="font-display font-bold text-base md:text-xl tracking-tight block">{d.name}</span>
                    <span className="text-xs mt-1 block opacity-60">
                      {d.intake}
                      {d.accredited ? " • NBA-accredited" : ""}
                    </span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className={open.id === d.id ? "text-brass-600" : "opacity-40"} />
                </button>
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            <motion.article
              key={open.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-cream-50 text-navy-900 p-6 md:p-10 min-h-[420px] border-t lg:border-t-0 lg:border-l hairline"
              aria-live="polite"
            >
              <img src={open.image} alt={`${open.name} at FISAT`} loading="lazy" className="h-44 md:h-56 w-full object-cover img-duo" />
              <p className="kicker text-brass-600 mt-6">{open.code} — Department</p>
              <h3 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight mt-2">{open.name}</h3>
              <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm">
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Programmes</h4>
                  <ul className="space-y-1.5 font-medium">
                    {open.programmes.map((p) => (
                      <li key={p} className="border-l-2 border-brass-500 pl-3">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Labs</h4>
                  <ul className="space-y-1.5">
                    {open.labs.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Research</h4>
                  <ul className="space-y-1.5">
                    {open.research.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="kicker text-navy-900/50 mb-2">Student opportunities</h4>
                  <ul className="space-y-1.5">
                    {open.opportunities.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-navy-900 text-cream-50 font-display font-bold text-sm px-6 py-3 hover:bg-navy-800 min-h-[48px]"
                >
                  ADMISSION LINK <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  to="/faculty"
                  className="inline-flex items-center gap-2 border hairline font-display font-bold text-sm px-6 py-3 hover:border-navy-900 min-h-[48px]"
                >
                  MEET THE FACULTY
                </Link>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
        <Reveal className="mt-8 max-w-3xl text-sm text-navy-900/65 leading-relaxed">
          <p>
            Syllabus, academic calendar and the college calendar & handbook are published each semester. Autonomous
            curriculum applies from the 2025 autonomous batch under KTU affiliation — ask the admissions desk for the
            current scheme and syllabus of your programme.
          </p>
        </Reveal>
      </section>

      <ApplyCta />
    </>
  );
}
