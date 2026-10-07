import { Academics, CampusMap } from "../components/SectionsA";
import { CampusLife, Founder, Library, Transport } from "../components/SectionsB";
import { Admissions, NewsFeed, Placements, Vision } from "../components/SectionsC";
import { Hero, StatsStrip } from "../components/Chrome";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CampusMap />
      <Academics />
      <Founder />
      <CampusLife />
      <Transport />
      <Library />
      <Placements />
      <NewsFeed />
      <Vision />
      <Admissions />
    </>
  );
}
