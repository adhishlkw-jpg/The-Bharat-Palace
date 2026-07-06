import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/data/content";

const Counter = ({ target, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const t0 = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(start + (target - start) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl text-white">
      {val}
      <span className="text-[#c9a96e]">{suffix}</span>
    </span>
  );
};

export const Stats = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-[#0a0a0a] border-y border-white/5 overflow-hidden"
      data-testid="stats-section"
    >
      <div className="absolute inset-0 grain opacity-40" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-center border-r last:border-r-0 border-white/8 lg:px-6"
            data-testid={`stat-${i}`}
          >
            <Counter target={s.value} suffix={s.suffix} />
            <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/60">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
