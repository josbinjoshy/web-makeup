import { Reveal, SectionHead } from "../components/ui";
import { CampusMap } from "../components/SectionsA";
import { CampusLife as CampusLifeSection, Transport } from "../components/SectionsB";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

const facilities = [
  { name: "Central Computing Facility", text: "High-speed campus network and central computing backbone for all departments." },
  { name: "Language Lab", text: "Dedicated lab for communication skills and employability training." },
  { name: "Robotics Lab & IDEA Lab", text: "Build spaces behind student creations like the Agrobot 'DAWN' — patents filed." },
  { name: "Hostels", text: "Separate hostels for boys and girls on campus; apply with admission." },
  { name: "Sports & Games", text: "Football / cricket grounds, indoor games and an annual arts & sports calendar." },
  { name: "Fitness Centre", text: "Gym and fitness training as part of the sports ecosystem." },
  { name: "Cafeteria", text: "Central dining and the campus social condenser through the day." },
  { name: "Bank & ATM", text: "Federal Bank branch services and ATM on campus." },
  { name: "ICT-enabled Classrooms", text: "ICT-enabled classrooms and seminar halls across all nine departments." },
];

export default function CampusLife() {
  return (
    <>
      <PageHero
        kicker="Campus"
        title={
          <>
            LIFE AT HORMIS NAGAR<span className="text-brass-500">.</span>
          </>
        }
        lede="Hostels, library, cafeteria, sports, fitness, clubs and fests — the official FISAT experience on 40 acres at Mookkannoor."
      />
      <Crumbs items={["Campus Life"]} />

      <section aria-label="Facilities" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Facilities & resources"
          title={
            <>
              EVERYTHING WITHIN REACH<span className="text-brass-600">.</span>
            </>
          }
          lede="Facilities verified from the official facility pages."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((f, i) => (
            <Reveal key={f.name} delay={Math.min(i * 0.05, 0.3)} className="border hairline bg-white/60 p-6">
              <p className="font-display font-light text-brass-600 text-sm">0{i + 1}</p>
              <h3 className="font-display font-extrabold text-xl text-navy-900 mt-2">{f.name}</h3>
              <p className="text-sm text-navy-900/70 mt-2 leading-relaxed">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CampusMap />
      <CampusLifeSection />
      <Transport />

      <ApplyCta />
    </>
  );
}
