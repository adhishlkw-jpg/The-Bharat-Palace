import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { OWNER } from "@/data/content";

const highlights = [
  "Spacious Banquet Hall",
  "Wedding Venue",
  "Birthday Celebrations",
  "Corporate Events",
  "Reception Functions",
  "Rooms Available",
  "Open 24 Hours",
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-[#0e0e0e] overflow-hidden"
      data-testid="about-section"
    >
      <div className="absolute inset-0 grain opacity-40" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left images stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={OWNER.lobby}
              alt="Grand foyer at The Bharat Palace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#c9a96e]/20" />
          </div>
          <div className="hidden md:block absolute -bottom-14 -right-6 w-2/3 aspect-[4/3] overflow-hidden border-8 border-[#0e0e0e] shadow-2xl">
            <img
              src={OWNER.weddingStage}
              alt="Wedding stage decoration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-4 -left-4 hidden md:flex flex-col items-start gap-1 bg-[#0e0e0e] border border-[#c9a96e]/30 px-5 py-4">
            <span className="font-display text-[#c9a96e] text-3xl leading-none">08+</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Event Types
            </span>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <div className="chip mb-6">About The Palace</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white text-balance">
            Elegant Celebrations{" "}
            <span className="font-accent italic text-[#c9a96e]">Begin Here</span>
          </h2>
          <p className="mt-8 text-white/75 leading-relaxed text-base md:text-lg max-w-xl">
            The Bharat Palace is one of Sitapur&apos;s most sought-after banquet
            venues — offering spacious event spaces, elegant interiors,
            comfortable guest facilities and warm hospitality. From intimate
            gatherings to grand weddings of 400 guests, our team crafts every
            detail with quiet precision.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 text-white/85">
                <span className="w-6 h-6 rounded-full border border-[#c9a96e]/50 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#c9a96e]" />
                </span>
                <span className="text-sm">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
