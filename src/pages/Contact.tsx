import { BookOpen, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, SectionHead } from "../components/ui";
import { institution, libraryData, placements } from "../data/institution";
import { ApplyCta, Crumbs, PageHero } from "./_shared";

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            TALK TO FISAT<span className="text-brass-500">.</span>
          </>
        }
        lede="Official contact information — college office, admissions desks, library and placements."
      />
      <Crumbs items={["Contact"]} />

      <section aria-label="Contact details" className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <SectionHead
          no="01"
          kicker="Reach us"
          title={
            <>
              HORMIS NAGAR<span className="text-brass-600">.</span>
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal className="bg-navy-900 text-cream-50 p-6">
            <MapPin size={20} className="text-brass-400" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg mt-3">Address</h3>
            <address className="mt-2 text-sm not-italic text-cream-50/75 leading-relaxed">
              {institution.location}
            </address>
          </Reveal>
          <Reveal delay={0.07} className="border hairline bg-white/60 p-6">
            <Phone size={20} className="text-brass-600" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg mt-3 text-navy-900">Phone</h3>
            <p className="mt-2 text-sm text-navy-900/75">{institution.phone}</p>
            <p className="mt-3 text-sm text-navy-900/75 flex gap-2">
              <Clock size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
              College office: 8:00 AM – 4:30 PM
            </p>
          </Reveal>
          <Reveal delay={0.14} className="border hairline bg-white/60 p-6">
            <Mail size={20} className="text-brass-600" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg mt-3 text-navy-900">Email</h3>
            <a
              href={`mailto:${institution.email}`}
              className="mt-2 inline-block text-sm text-navy-900/80 underline break-all hover:text-navy-900"
            >
              {institution.email}
            </a>
            <p className="mt-3 text-xs text-navy-900/55">Admissions, MCA & MBA desks on the Admissions page.</p>
          </Reveal>
          <Reveal delay={0.21} className="border hairline bg-white/60 p-6">
            <BookOpen size={20} className="text-brass-600" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg mt-3 text-navy-900">Library & Placements</h3>
            <p className="mt-2 text-sm text-navy-900/75">{libraryData.contact}</p>
            <p className="mt-2 text-sm text-navy-900/75">{placements.cell}</p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Location" className="bg-cream-100/60 border-y hairline">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
          <SectionHead
            no="02"
            kicker="Location"
            title={
              <>
                FIND HORMIS NAGAR<span className="text-brass-600">.</span>
              </>
            }
          />
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal className="border hairline bg-cream-50 p-6 md:p-8">
              <ul className="space-y-3 text-navy-900/80 leading-relaxed">
                <li>4 km from NH-544, 7 km from Angamaly railway station, 11 km from Kochi International Airport.</li>
                <li>Frequent private and KSRTC buses from Angamaly to Mookkannoor and beyond.</li>
                <li>Mookkannoor is on the Angamaly – Athirappilly bus route, south bank of the Chalakudy river.</li>
                <li>Use the Transport finder on the Campus Life page to plan your boarding point.</li>
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="bg-navy-900 text-cream-50 p-6 md:p-8">
              <p className="kicker text-brass-400">College bus network</p>
              <p className="mt-3 text-cream-50/80 leading-relaxed">
                Multi-route buses connect Aluva, Ernakulam / Kalamassery, Angamaly town, Chalakudy, Perumbavoor and
                Thrissur to Hormis Nagar. Timings follow the semester schedule — confirm with the transport desk
                before travelling.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ApplyCta />
    </>
  );
}
