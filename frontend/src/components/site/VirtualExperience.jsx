import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { OWNER } from "@/data/content";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const VirtualExperience = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      data-testid="virtual-section"
    >
      <img
        src={OWNER.weddingStage}
        alt="Wedding stage"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      <div className="absolute inset-0 grain opacity-50" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <div className="chip mb-6">Virtual Experience</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
            Step inside a space designed for{" "}
            <span className="font-accent italic text-[#c9a96e]">
              unforgettable evenings
            </span>
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed text-base md:text-lg">
            Experience the elegance of Bharat Palace through beautifully
            designed event spaces — grand chandeliers, sweeping foyers and
            floral stages crafted for every celebration.
          </p>
          <button
            onClick={() => scrollTo("#gallery")}
            className="btn-gold mt-10"
            data-testid="virtual-view-gallery-btn"
          >
            <PlayCircle className="w-4 h-4" /> View Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};
