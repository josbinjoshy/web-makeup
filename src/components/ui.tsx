import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "", y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ no, kicker, title, lede, dark = false }: { no: string; kicker: string; title: ReactNode; lede?: string; dark?: boolean }) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <div className={`flex items-center gap-4 ${dark ? "text-cream-50/70" : "text-navy-900/60"}`}>
          <span className="editorial-num">{no}</span>
          <span className="h-px w-12 bg-current opacity-40" aria-hidden="true" />
          <span className="kicker">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={`font-display font-800 font-extrabold tracking-tight leading-[0.95] mt-4 text-4xl md:text-6xl ${dark ? "text-cream-50" : "text-navy-900"}`}>
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${dark ? "text-cream-50/70" : "text-navy-900/70"}`}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Counter({ to, decimals = 0, prefix = "", suffix = "", className = "" }: { to: number; decimals?: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(to); return; }
    const dur = 1400; const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {prefix}{val.toLocaleString("en-IN", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}
    </span>
  );
}

export function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 }); const sy = useSpring(y, { stiffness: 200, damping: 18 });
  return (
    <motion.span
      className="inline-block"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.12);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.12);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.span>
  );
}
