import { useMemo, useState } from "react";
import { Mail, Search } from "lucide-react";
import { Reveal } from "../components/ui";
import { faculty, facultyDepts } from "../data/faculty";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

export default function Faculty() {
  const [dept, setDept] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      faculty.filter(
        (f) =>
          (dept === "All" || f.dept === dept) &&
          (q === "" ||
            f.name.toLowerCase().includes(q.toLowerCase()) ||
            f.designation.toLowerCase().includes(q.toLowerCase()))
      ),
    [dept, q]
  );
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    faculty.forEach((f) => m.set(f.dept, (m.get(f.dept) ?? 0) + 1));
    return m;
  }, []);
  return (
    <>
      <PageHero
        kicker="Faculty"
        title={
          <>
            GUIDED BY THE BEST<span className="text-brass-500">.</span>
          </>
        }
        lede="The complete FISAT faculty directory — names, departments, designations and official email, as published officially."
      />
      <Crumbs items={["Faculty"]} />
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <label htmlFor="fq" className="kicker text-navy-900/50 flex items-center gap-2 shrink-0">
            <Search size={14} aria-hidden="true" /> Search
          </label>
          <input
            id="fq"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Name or designation…"
            className="w-full md:max-w-sm border hairline bg-white px-4 py-3 text-navy-900 placeholder:text-navy-900/35 min-h-[48px]"
          />
          <p className="md:ml-auto editorial-num text-navy-900/50" aria-live="polite">
            SHOWING {list.length} OF {faculty.length}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4" role="tablist" aria-label="Filter by department">
          {facultyDepts.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={dept === d}
              onClick={() => setDept(d)}
              className={`px-4 py-2.5 text-sm font-display font-bold border min-h-[44px] ${
                dept === d
                  ? "bg-navy-900 text-cream-50 border-navy-900"
                  : "hairline bg-white/50 hover:border-navy-900"
              }`}
            >
              {d === "All" ? "ALL" : `${d} • ${counts.get(d) ?? 0}`}
            </button>
          ))}
        </div>
        {list.length === 0 && (
          <p className="text-navy-900/60 mt-8">No matches — try another name or department.</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {list.map((f, i) => (
            <Reveal key={f.name} delay={Math.min((i % 9) * 0.04, 0.3)} className="border hairline bg-white/60 p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-[11px] font-bold tracking-[0.2em] bg-navy-900 text-cream-50 px-2.5 py-1">
                  {f.dept}
                </span>
                {f.phone && <span className="text-xs text-navy-900/55">{f.phone}</span>}
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mt-3">{f.name}</h3>
              <p className="text-sm text-brass-600 font-medium mt-1">{f.designation || "Faculty"}</p>
              {f.email ? (
                <a
                  href={`mailto:${f.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm text-navy-900/75 hover:text-navy-900 underline break-all"
                >
                  <Mail size={14} className="shrink-0" aria-hidden="true" />
                  {f.email}
                </a>
              ) : (
                <p className="mt-3 text-xs text-navy-900/45">Email via college office</p>
              )}
            </Reveal>
          ))}
        </div>
      </section>
      <ApplyCta />
    </>
  );
}
