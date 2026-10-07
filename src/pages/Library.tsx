import { BookOpen, Clock } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";
import { libraryData } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

export default function Library() {
  return (
    <>
      <PageHero
        kicker="Library"
        title={
          <>
            THE QUIET ENGINE<span className="text-brass-500">.</span>
          </>
        }
        lede="Library & Information Centre (LIC) — on its way to becoming an outstanding learning resource centre."
      />
      <Crumbs items={["Library"]} />

      <section aria-label="About the library" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Knowledge"
          title={
            <>
              LIBRARY & INFORMATION CENTRE<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="border hairline bg-white/60 p-6 md:p-10">
            <p className="kicker text-brass-600">About the LIC</p>
            <div className="mt-4 space-y-4 text-navy-900/80 leading-relaxed">
              <p>
                A fully automated modern Library & Information Centre catering to the ever-increasing information and
                intellectual needs of students, faculty and researchers — with hard copy, audio/video, CD-ROM and
                electronic documents.
              </p>
              <p>
                The college has a central library as well as MBA and MCA reference libraries. The Central Library is
                housed in a three-storey structure with separate reference and stack rooms.
              </p>
              <p>
                Online Public Access Catalogue (OPAC) on the FISAT intranet lets members search, reserve or check the
                status of any book from anywhere. Smart cards are used for transactions, and the DSpace digital
                library opens the library's digital archive.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 content-start">
            {[
              [libraryData.volumes, "volumes"],
              [libraryData.titles, "titles"],
              ["155 + 5,000+", "print + e-journals"],
              ["3,000+", "DVDs / CD-ROMs"],
            ].map(([big, small], i) => (
              <Reveal key={small} delay={i * 0.06} className="bg-navy-900 text-cream-50 p-6">
                <p className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
                  {big}
                  <span className="text-brass-400">+</span>
                </p>
                <p className="text-xs md:text-sm text-cream-50/60 mt-1">{small}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="col-span-2 border hairline bg-white/60 p-6">
              <p className="kicker text-brass-600 flex items-center gap-2">
                <Clock size={14} aria-hidden="true" /> Working hours
              </p>
              <p className="mt-2 text-navy-900/80 leading-relaxed">{libraryData.hours}</p>
              <p className="mt-2 text-sm text-navy-900/60">{libraryData.location}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Library services" className="bg-navy-900 text-cream-50 border-y border-navy-950">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
          <SectionHead
            dark
            no="02"
            kicker="Services"
            title={
              <>
                WHAT THE LIBRARY DOES FOR YOU<span className="text-brass-500">.</span>
              </>
            }
          />
          <ul className="grid sm:grid-cols-2 gap-2">
            {libraryData.services.map((s, i) => (
              <Reveal key={s} delay={Math.min(i * 0.04, 0.3)} className="flex gap-3 border-t border-cream-50/15 pt-3 text-cream-50/80">
                <BookOpen size={16} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{s}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8 border hairline-light p-5 max-w-2xl">
            <p className="kicker text-brass-400">Book Bank Scheme</p>
            <p className="mt-2 text-sm text-cream-50/75 leading-relaxed">
              Members are given one standard book in each subject for the duration of the semester — plus a
              reprographic centre for copies and prints.
            </p>
          </Reveal>
          <p className="mt-6 text-sm text-cream-50/60">Help desk: {libraryData.contact}</p>
        </div>
      </section>

      <ApplyCta />
    </>
  );
}
