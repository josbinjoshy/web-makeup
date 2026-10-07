import { useEffect } from "react";
import { Academics, BuiltAtFisat, CampusMap } from "./components/SectionsA";
import { CampusLife, Founder, Library, Transport } from "./components/SectionsB";
import { Admissions, Footer, NewsFeed, Placements, Vision } from "./components/SectionsC";
import { Hero, Nav, StatsStrip } from "./components/Chrome";

function Cursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    dot.style.opacity = "0";
    document.body.appendChild(dot);
    const move = (e: MouseEvent) => {
      dot.style.opacity = "1";
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      const t = e.target as HTMLElement;
      const hot = t.closest("a,button,summary,[role=tab]");
      dot.style.width = hot ? "22px" : "10px";
      dot.style.height = hot ? "22px" : "10px";
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => { window.removeEventListener("mousemove", move); dot.remove(); };
  }, []);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-navy-950">
      <Cursor />
      <Nav />
      <main id="main">
        <Hero />
        <StatsStrip />
        <CampusMap />
        <Academics />
        <BuiltAtFisat />
        <Founder />
        <CampusLife />
        <Transport />
        <Library />
        <Placements />
        <NewsFeed />
        <Vision />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
