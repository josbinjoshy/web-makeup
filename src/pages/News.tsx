import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHead } from "../components/ui";
import { news, type NewsItem } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

export default function News() {
  const [kind, setKind] = useState<"All" | NewsItem["kind"]>("All");
  const items = kind === "All" ? news : news.filter((n) => n.kind === kind);
  return (
    <>
      <PageHero
        kicker="News & events"
        title={
          <>
            NEWS / EVENTS / WINS<span className="text-brass-500">.</span>
          </>
        }
        lede="Announcements, workshops, conferences and achievements from the official FISAT news desk."
      />
      <Crumbs items={["News"]} />
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Editorial feed"
          title={
            <>
              HAPPENING AT FISAT<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="flex gap-2 mb-8" role="tablist" aria-label="Filter news">
          {(["All", "News", "Events", "Achievements"] as const).map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={kind === k}
              onClick={() => setKind(k)}
              className={`px-5 py-2.5 font-display text-sm font-bold border min-h-[44px] ${
                kind === k ? "bg-navy-900 text-cream-50 border-navy-900" : "hairline bg-white/50 hover:border-navy-900"
              }`}
            >
              {k.toUpperCase()}
            </button>
          ))}
        </div>
        <motion.ul layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((n) => (
              <motion.li
                key={n.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <article className="border hairline bg-cream-50 p-5 md:p-6 h-full flex flex-col hover:border-navy-900 transition-colors min-h-[190px]">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-display text-[11px] font-bold tracking-[0.2em] px-2.5 py-1 ${
                        n.kind === "Achievements"
                          ? "bg-brass-500 text-navy-950"
                          : n.kind === "Events"
                            ? "bg-navy-900 text-cream-50"
                            : "border hairline text-navy-900/70"
                      }`}
                    >
                      {n.kind.toUpperCase()}
                    </span>
                    <span className="text-xs text-navy-900/50">{n.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-snug text-navy-900 mt-3 flex-1">{n.title}</h3>
                  <p className="mt-3 text-xs font-display tracking-[0.18em] text-navy-900/50">
                    {n.dept.toUpperCase()}
                  </p>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>
      <ApplyCta />
    </>
  );
}
