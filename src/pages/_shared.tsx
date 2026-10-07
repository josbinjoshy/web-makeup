import { Link } from "react-router-dom";
import { Reveal } from "../components/ui";

export function PageHero({ kicker, title, lede }: { kicker: string; title: React.ReactNode; lede?: string }) {
  return (
    <section className="relative bg-navy-900 text-cream-50 overflow-hidden">
      <img
        src="/hero-fisat.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25 img-duo"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(6,15,36,.45), rgba(6,15,36,.88))" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16">
        <Reveal>
          <p className="kicker text-brass-400">{kicker}</p>
          <h1 className="font-display font-extrabold tracking-tight leading-[0.92] text-4xl md:text-7xl mt-4 max-w-4xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-2xl text-cream-50/75 text-base md:text-lg leading-relaxed">{lede}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Crumbs({ items }: { items: string[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1400px] px-5 md:px-10 pt-6 text-xs text-navy-900/55">
      <ol className="flex flex-wrap gap-2 items-center">
        <li>
          <Link to="/" className="hover:text-navy-900 underline">
            Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-navy-900">
                {c}
              </span>
            ) : (
              <span>{c}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ApplyCta() {
  return (
    <section aria-label="Apply" className="bg-brass-500 text-navy-950">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-6 justify-between">
        <div>
          <p className="kicker text-navy-950/60">Admissions open</p>
          <p className="font-display font-extrabold tracking-tight text-3xl md:text-5xl mt-2">
            YOUR NEXT CHAPTER STARTS HERE<span className="text-cream-50">.</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 bg-navy-950 text-cream-50 font-display font-bold px-7 py-4 text-sm min-h-[52px] hover:bg-navy-900"
          >
            ADMISSIONS GUIDE
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-navy-950 font-display font-bold px-7 py-4 text-sm min-h-[52px] hover:bg-navy-950 hover:text-cream-50"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
