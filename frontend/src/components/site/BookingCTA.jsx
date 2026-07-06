import React from "react";
import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { CONTACT, OWNER } from "@/data/content";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const BookingCTA = () => {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="booking-cta"
    >
      <img
        src={OWNER.engagement}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#0e0e0e]/85 to-[#0e0e0e]/95" />
      <div className="absolute inset-0 grain opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-[1400px] mx-auto px-6 md:px-10 text-center"
      >
        <div className="chip mb-6 mx-auto">Let's Begin</div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-white text-balance leading-[1.05] max-w-4xl mx-auto">
          Let&apos;s plan your{" "}
          <span className="font-accent italic text-[#c9a96e]">celebration</span>
        </h2>
        <p className="mt-6 text-white/70 max-w-xl mx-auto text-base md:text-lg">
          Book The Bharat Palace today and make your next occasion truly
          unforgettable.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold"
            data-testid="cta-book-event"
          >
            <CalendarCheck className="w-4 h-4" /> Book Event
          </button>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn-ghost"
            data-testid="cta-call-now"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};
