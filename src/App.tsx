import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/SectionsC";
import { Nav } from "./components/Chrome";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import Home from "./pages/Home";
import Library from "./pages/Library";
import News from "./pages/News";
import Placements from "./pages/Placements";

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-cream-50 text-navy-950">
        <Cursor />
        <ScrollToTop />
        <Nav />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/library" element={<Library />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
