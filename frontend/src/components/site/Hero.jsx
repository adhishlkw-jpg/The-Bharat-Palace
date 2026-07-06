import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Clock3, MapPin, Users } from "lucide-react";
import { HERO_SLIDES, CONTACT } from "@/data/content";

export const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-[100svh] w-full overflow-hidden bg-[#0e0e0e]"
      data-testid="hero-section"
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={HERO_SLIDES[idx].image}
            alt={HERO_SLIDES[idx].caption}
            className="w-full h-full object-cover kenburns"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="chip mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          Premium Banquet · Sitapur, UP
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="font-display text-white text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.95] max-w-5xl"
          data-testid="hero-title"
        >
          Celebrate Life&apos;s
          <br />
          <span className="font-accent italic text-[#c9a96e]">Grandest</span>{" "}
          Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="mt-6 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
        >
          Premium banquet hall in Sitapur for weddings, receptions, corporate
          events, engagements, birthdays and celebrations — crafted for
          unforgettable evenings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold"
            data-testid="hero-book-btn"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn-ghost"
            data-testid="hero-call-btn"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </motion.div>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-4 text-white/75"
        >
          <MetaItem icon={<Clock3 className="w-4 h-4" />} label={CONTACT.hours} />
          <MetaItem icon={<MapPin className="w-4 h-4" />} label={CONTACT.address} />
          <MetaItem icon={<Users className="w-4 h-4" />} label={CONTACT.capacity} />
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            data-testid={`hero-indicator-${i}`}
            className={`h-[2px] transition-all duration-500 ${
              i === idx ? "w-10 bg-[#c9a96e]" : "w-5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const MetaItem = ({ icon, label }) => (
  <div className="flex items-center gap-2.5 text-sm">
    <span className="text-[#c9a96e]">{icon}</span>
    <span className="uppercase tracking-[0.2em] text-xs">{label}</span>
  </div>
);
