import { Link } from "react-router-dom";
import { Reveal, SectionHead } from "../components/ui";
import { founder, institution, visionMission } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

const governance = [
  { role: "Founder Chairman (late)", name: "Adv. P. V. Mathew", note: "1953–2017 • Founder's Day 27 September" },
  { role: "Principal", name: "Dr. Jacob Thomas V", note: "Principal & Professor (ECE)" },
  { role: "Vice Principal", name: "Dr. Mini P R", note: "Vice Principal (ECE)" },
  { role: "Dean & Controller of Examinations", name: "Dr. Jyothish K John", note: "CSE" },
  { role: "Dean (DQA)", name: "Dr. Jose Cherian", note: "Mechanical Engineering" },
  { role: "Dean (DOST)", name: "Dr. Sumanlal M R", note: "Mechanical Engineering" },
  { role: "Dean (Planning & Development / R&D)", name: "Dr. Unni Kartha G", note: "Civil Engineering" },
  { role: "Director, FISAT Business School", name: "Dr. Elizabeth George", note: "Business Administration" },
];

export default function About() {
  return (
    <>
      <PageHero
        kicker="About FISAT"
        title={
          <>
            A CENTRE OF EXCELLENCE<span className="text-brass-500">.</span>
          </>
        }
        lede="Federal Institute of Science and Technology — promoted by the Federal Bank Officers' Association Educational Society (FBOAES), at Hormis Nagar, Mookkannoor, Angamaly."
      />
      <Crumbs items={["About"]} />

      <section aria-label="The institution" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="The institution"
          title={
            <>
              FOCUS ON EXCELLENCE<span className="text-brass-600">.</span>
            </>
          }
          lede="With the motto 'Focus on Excellence', FISAT has been designed and developed to become a Centre of Excellence in professional education."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="border hairline bg-white/60 p-6 md:p-10">
            <p className="kicker text-brass-600">Profile</p>
            <ul className="mt-4 space-y-3 text-navy-900/80 leading-relaxed">
              <li>
                <strong>Established 2002</strong> at Hormis Nagar, Mookkannoor — birthplace of late K. P. Hormis,
                founder of The Federal Bank Ltd., after whom the campus is named.
              </li>
              <li>
                A private self-financing engineering college & business school run by the{" "}
                <strong>Federal Bank Officers' Association Educational Society (FBOAES)</strong>, an initiative of
                the Federal Bank Officers' Association.
              </li>
              <li>
                <strong>40-acre campus</strong> on the outskirts of Angamaly town — 4 km from NH-544, 7 km from
                Angamaly railway station, 11 km from Kochi International Airport.
              </li>
              <li>{institution.approvals}.</li>
              <li>{institution.accreditation}.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="border hairline bg-white/60 p-6 md:p-10">
            <p className="kicker text-brass-600">How to reach</p>
            <ul className="mt-4 space-y-3 text-navy-900/80 leading-relaxed">
              <li>Well connected by road to Angamaly, with frequent private and KSRTC buses to Mookkannoor.</li>
              <li>Mookkannoor lies on the Angamaly – Athirappilly bus route, on the south bank of the Chalakudy river.</li>
              <li>Also connected by bus to Kalady via Thuravoor and to Chalakudy via Azhakom.</li>
              <li>
                Nearby: Kalady (birthplace of Adi Sankara), Malayattoor, and the Athirappilly waterfalls are all in
                the vicinity.
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-navy-900 text-cream-50 font-display font-bold text-sm px-6 py-3 min-h-[48px] hover:bg-navy-800"
            >
              CONTACT & LOCATION
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Vision and mission" className="bg-navy-900 text-cream-50 border-y border-navy-950">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-6">
          <Reveal className="border hairline-light p-6 md:p-10">
            <p className="kicker text-brass-400">Our vision</p>
            <blockquote className="font-serif-i text-xl md:text-2xl leading-snug mt-3">
              “{visionMission.vision}”
            </blockquote>
            <div className="mt-6 space-y-4">
              {visionMission.mission.map((m, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-cream-50/80 leading-relaxed border-l-2 border-brass-500 pl-4"
                >
                  <span className="kicker text-cream-50/50 block mb-1">Mission {i + 1}</span>
                  {m}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="bg-cream-50 text-navy-900 p-6 md:p-10">
            <p className="kicker text-brass-600">Core values — INSPIRE</p>
            <ul className="mt-4 divide-y divide-[rgba(10,25,49,.14)]">
              {visionMission.coreValues.map((v, i) => (
                <li key={v} className="py-3 flex items-baseline gap-4">
                  <span className="font-display font-light text-brass-600 text-sm">0{i + 1}</span>
                  <span className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label="Governance" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="02"
          kicker="Governance"
          title={
            <>
              PEOPLE BEHIND FISAT<span className="text-brass-600">.</span>
            </>
          }
          lede="Leadership as published on the official site — meet the full directory on the Faculty page."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {governance.map((g, i) => (
            <Reveal key={g.name} delay={Math.min(i * 0.05, 0.3)} className="border hairline bg-white/60 p-5">
              <p className="kicker text-brass-600 text-[10px]">{g.role}</p>
              <p className="font-display font-bold text-lg text-navy-900 mt-2">{g.name}</p>
              <p className="text-sm text-navy-900/60 mt-1">{g.note}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <Link
            to="/faculty"
            className="inline-flex items-center gap-2 border-2 border-navy-900 font-display font-bold text-sm px-6 py-3 min-h-[48px] hover:bg-navy-900 hover:text-cream-50"
          >
            FULL FACULTY DIRECTORY
          </Link>
        </Reveal>
      </section>

      <section aria-label="Founder" className="mx-auto max-w-[1400px] px-5 md:px-10 pb-12 md:pb-20">
        <SectionHead
          no="03"
          kicker="Founder Chairman"
          title={
            <>
              ADV. P. V. MATHEW<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="space-y-4 text-navy-900/80 leading-relaxed max-w-4xl">
          {founder.story.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={i === 0 ? "font-serif-i italic text-xl md:text-2xl text-navy-900 leading-snug" : ""}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ApplyCta />
    </>
  );
}
