import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { REVIEWS, CONTACT } from "@/data/content";

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative py-24 md:py-36 bg-[#0e0e0e]"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="chip mb-6">Guest Reviews</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
              Loved by families across{" "}
              <span className="font-accent italic text-[#c9a96e]">Sitapur</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= 3
                        ? "fill-[#c9a96e] text-[#c9a96e]"
                        : "text-[#c9a96e]/40"
                    }`}
                  />
                ))}
              </div>
              <div className="font-display text-3xl text-white">3.3 / 5</div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                146+ Google Reviews
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative bg-[#141414] border border-white/8 hover:border-[#c9a96e]/40 p-8 transition-colors"
              data-testid={`review-${i}`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#c9a96e]/15" />
              <div className="flex items-center gap-1 mb-5">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>
              <p className="font-accent text-[19px] leading-relaxed text-white/85 mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="pt-5 border-t border-white/8 flex items-center justify-between">
                <div>
                  <div className="font-display text-white text-lg">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/40 mt-1">
                    Google · {r.age}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={CONTACT.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            data-testid="read-more-reviews-btn"
          >
            Read More Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
