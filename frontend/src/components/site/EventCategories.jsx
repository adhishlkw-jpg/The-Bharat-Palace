import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EVENT_CATEGORIES } from "@/data/content";

const scrollToContact = () => {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const EventCategories = () => {
  return (
    <section
      id="events"
      className="relative py-24 md:py-36 bg-[#0e0e0e]"
      data-testid="events-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="chip mb-6">Occasions</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
              Curated for every{" "}
              <span className="font-accent italic text-[#c9a96e]">celebration</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base">
            From intimate family gatherings to 800-guest weddings — every event
            at The Bharat Palace is planned with detail and heart.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] md:auto-rows-[300px] gap-4">
          {EVENT_CATEGORIES.map((c, i) => {
            const span =
              c.size === "large" ? "sm:col-span-2 sm:row-span-2" : "";
            return (
              <motion.button
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                onClick={scrollToContact}
                data-testid={`event-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group relative overflow-hidden ${span} text-left`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#c9a96e]/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#c9a96e] mb-2">
                      Event
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                      {c.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0e0e0e]" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
