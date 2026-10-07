import { Briefcase } from "lucide-react";
import { Counter, Reveal, SectionHead } from "../components/ui";
import { placements } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

export default function Placements() {
  return (
    <>
      <PageHero
        kicker="Placements"
        title={
          <>
            FROM CAMPUS → CAREER<span className="text-brass-500">.</span>
          </>
        }
        lede="The official FISAT placement record — offers, highest packages and verified recruiters."
      />
      <Crumbs items={["Placements"]} />

      <section aria-label="Placement record" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Record"
          title={
            <>
              OFFERS, YEAR AFTER YEAR<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="border-y hairline divide-y divide-[rgba(10,25,49,.14)]">
          <Reveal>
            <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="editorial-num text-navy-900/50">CLASS OF 2026</span>
              <p className="font-display font-extrabold tracking-tight leading-none text-[16vw] md:text-[7rem] text-navy-900">
                <Counter to={600} suffix="+" />{" "}
                <span className="text-2xl md:text-3xl font-bold text-brass-600 align-middle">offers</span>
              </p>
              <p className="md:ml-auto font-display font-bold text-xl md:text-2xl">
                Highest <Counter to={17.22} decimals={2} suffix=" LPA" className="text-brass-600" />
              </p>
            </div>
          </Reveal>
          {placements.history.slice(1).map((h) => (
            <Reveal key={h.year}>
              <div className="py-5 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8">
                <span className="editorial-num text-navy-900/50 w-28 shrink-0">{h.year}</span>
                <p className="font-display font-bold text-xl md:text-4xl tracking-tight text-navy-900/90">
                  {h.offers} <span className="text-navy-900/40">• {h.highest}</span>
                </p>
                <p className="md:ml-auto text-sm text-navy-900/55">{h.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-label="Recruiters" className="bg-navy-900 text-cream-50 border-y border-navy-950">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
          <SectionHead
            dark
            no="02"
            kicker="Recruiters"
            title={
              <>
                WHO HIRES FROM FISAT<span className="text-brass-500">?</span>
              </>
            }
            lede="Recruiter names only where verified on official placement pages."
          />
          <div className="flex flex-wrap gap-2">
            {placements.recruiters.map((r) => (
              <span
                key={r}
                className="border border-cream-50/25 px-3.5 py-2 text-sm font-medium text-cream-50/85 hover:border-brass-400"
              >
                {r}
              </span>
            ))}
          </div>
          <Reveal className="mt-8 border hairline-light p-5 flex gap-3 max-w-3xl">
            <Briefcase size={18} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />
            <p className="text-sm text-cream-50/75 leading-relaxed">{placements.cell}</p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Placement training" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="03"
          kicker="Training"
          title={
            <>
              TRAINED FOR DAY ONE<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["150 hrs", "Placement training every student undergoes, plus aptitude and GD/PI preparation."],
            ["100 hrs", "Soft-skill enhancement woven through the programme."],
            ["MBA (FBS)", "Dedicated FBS placement desk — fbsplacements@fisat.ac.in — with banking & consulting recruiters."],
          ].map(([h, b], i) => (
            <Reveal key={h} delay={i * 0.07} className="border hairline bg-white/60 p-6">
              <p className="font-display font-extrabold text-3xl text-navy-900">{h}</p>
              <p className="text-sm text-navy-900/70 mt-2 leading-relaxed">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ApplyCta />
    </>
  );
}
