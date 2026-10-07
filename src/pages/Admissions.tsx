import { useState } from "react";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";
import { admissions, institution } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

const detail: Record<string, string> = {
  "B.Tech":
    "7 programmes incl. Computer Science & Design. Govt + Management quotas via KEAM. See the 2026 fee table and the official counselling schedule announced with the rank list.",
  "M.Tech":
    "5 tracks: AI & Data Science (+WP), Power Electronics & Power Systems, Renewable Energy (+WP), VLSI & Embedded, Structural & Construction Mgmt (24). Contact: +91 9656 927 612.",
  MBA: "120 seats, FISAT Business School. CMAT/CAT/KMAT + GD/PI. Application fee Rs. 750. Contact: +91 96569 68242.",
  MCA: "MCA 60 + Integrated MCA 60. Application fee Rs. 350; 1st-year total Rs. 92,555 (MQ). Contact: mcaadmission@fisat.ac.in.",
};

export default function Admissions() {
  const [prog, setProg] = useState<"B.Tech" | "M.Tech" | "MBA" | "MCA">("B.Tech");
  return (
    <>
      <PageHero
        kicker="Admissions"
        title={
          <>
            YOUR NEXT CHAPTER STARTS HERE<span className="text-brass-500">.</span>
          </>
        }
        lede="Streams, 2026 fee structure, eligibility and admission desks — as published on the official admission pages."
      />
      <Crumbs items={["Admissions"]} />

      <section aria-label="Streams" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Streams"
          title={
            <>
              FIND YOUR PROGRAMME<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Programme categories">
              {(Object.keys(detail) as Array<"B.Tech" | "M.Tech" | "MBA" | "MCA">).map((p) => (
                <button
                  key={p}
                  role="tab"
                  aria-selected={prog === p}
                  onClick={() => setProg(p)}
                  className={`px-5 py-3 font-display font-bold text-sm min-h-[48px] border-2 ${
                    prog === p
                      ? "bg-navy-950 text-cream-50 border-navy-950"
                      : "border-navy-950/30 hover:border-navy-950"
                  }`}
                >
                  {p.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="mt-4 font-medium leading-relaxed text-navy-900/85" aria-live="polite">
              {detail[prog]}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {admissions.eligibility.map((e) => (
                <li key={e} className="flex gap-2 border-t hairline pt-2 text-navy-900/80">
                  <BadgeCheck size={16} className="mt-0.5 shrink-0 text-brass-600" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-medium text-navy-900/60">{admissions.ctaNote}</p>
          </div>
          <div id="admissions-fee" className="bg-navy-950 text-cream-50 p-6 md:p-8 scroll-mt-24 h-fit">
            <h3 className="font-display font-bold text-lg flex items-center gap-2">
              <GraduationCap size={20} aria-hidden="true" /> B.Tech fee structure — Admission Year 2026 (total payable)
            </h3>
            <dl className="mt-4 divide-y divide-cream-50/10">
              {admissions.btechFee2026.map((f) => (
                <div key={f.cat} className="py-2.5 flex justify-between gap-4 text-sm">
                  <dt className="text-cream-50/70">{f.cat}</dt>
                  <dd className="font-display font-bold">{f.total}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[11px] text-cream-50/50 mt-3">
              Fee may change per Govt/University orders. NRI / OCI Rs. 2,80,986 • Management Rs. 2,09,223 • FBOAES
              Rs. 1,40,276 • State Merit / EWS Rs. 1,39,776 • TFW Rs. 69,421 • SC / ST / OEC Rs. 25,045.
            </p>
            <h4 className="kicker text-brass-400 mt-6">Admission desks</h4>
            <ul className="mt-2 space-y-1.5 text-sm">
              {admissions.contacts.map((c) => (
                <li key={c.label} className="flex gap-2">
                  <span className="font-bold w-24 shrink-0">{c.label}</span>
                  <span className="text-cream-50/75">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="How to apply" className="bg-cream-100/60 border-y hairline">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
          <SectionHead
            no="02"
            kicker="How to apply"
            title={
              <>
                THREE STEPS<span className="text-brass-600">.</span>
            </>
            }
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["01", "Submit the application", "Applications are submitted online. Keep your qualifying marks, entrance score card, Aadhaar and photographs ready."],
              ["02", "Counselling & rank list", "B.Tech Govt quota follows the official counselling schedule; the FISAT rank list is published on the notice board."],
              ["03", "Confirm & join", "Pay fees (card / UPI / bank transfer to the FISAT Federal Bank Hormis Nagar account), submit hostel application if needed, and join."],
            ].map(([n, h, b], i) => (
              <Reveal key={h} delay={i * 0.07} className="border hairline bg-cream-50 p-6">
                <p className="font-display font-light text-brass-600">{n}</p>
                <h3 className="font-display font-extrabold text-xl text-navy-900 mt-2">{h}</h3>
                <p className="text-sm text-navy-900/70 mt-2 leading-relaxed">{b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${institution.email}?subject=Admission%20application%20—%20FISAT`}
              className="inline-flex items-center gap-2 bg-navy-950 text-cream-50 font-display font-bold px-7 py-4 text-sm min-h-[52px] hover:bg-navy-900"
            >
              EMAIL ADMISSIONS DESK
            </a>
          </Reveal>
        </div>
      </section>

      <ApplyCta />
    </>
  );
}
