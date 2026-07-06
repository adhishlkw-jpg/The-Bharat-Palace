import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0e0e0e]"
      data-testid="hero-section"
    >
      {/* Preloaded background layer — always visible, prevents black flash */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt={s.caption}
            loading="eager"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === idx ? "opacity-100 kenburns" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pt-32 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="chip mb-6 md:mb-8 self-start"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          Premium Banquet · Sitapur, UP
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="font-display text-white text-balance text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-tight max-w-5xl"
          data-testid="hero-title"
        >
          Celebrate Life&apos;s{" "}
          <span className="font-accent italic text-[#c9a96e]">Grandest</span>{" "}
          Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-5 md:mt-6 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed"
        >
          Premium banquet hall in Sitapur for weddings, receptions, corporate
          events, engagements, birthdays and celebrations — crafted for
          unforgettable evenings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
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
          transition={{ delay: 1.25, duration: 0.9 }}
          className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/15 flex flex-wrap gap-x-10 gap-y-3 text-white/85"
        >
          <MetaItem icon={<Clock3 className="w-4 h-4" />} label={CONTACT.hours} />
          <MetaItem icon={<MapPin className="w-4 h-4" />} label={CONTACT.address} />
          <MetaItem icon={<Users className="w-4 h-4" />} label={CONTACT.capacity} />
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            data-testid={`hero-indicator-${i}`}
            className={`h-[2px] transition-all duration-500 ${
              i === idx ? "w-10 bg-[#c9a96e]" : "w-5 bg-white/40 hover:bg-white/70"
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
    <span className="uppercase tracking-[0.2em] text-[11px] md:text-xs">{label}</span>
  </div>
);

