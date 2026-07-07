import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/content";

export const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index or null

  const items = GALLERY_ITEMS;

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, next, prev]);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 bg-[#0a0a0a]"
      data-testid="gallery-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="chip mb-6">Gallery</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance max-w-2xl">
              Moments made{" "}
              <span className="font-accent italic text-[#c9a96e]">timeless</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((g, i) => (
            <motion.button
              key={`${g.src}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => setLightbox(i)}
              data-testid={`gallery-item-${i}`}
              className={`group relative overflow-hidden ${
                i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.24em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {g.category}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            data-testid="gallery-lightbox"
          >
            <button
              onClick={close}
              aria-label="Close"
              data-testid="lightbox-close"
              className="absolute top-6 right-6 text-white/80 hover:text-[#c9a96e] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={prev}
              aria-label="Previous"
              data-testid="lightbox-prev"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/25 hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={items[lightbox].src}
              alt={`Lightbox ${lightbox + 1}`}
              className="max-h-full max-w-full object-contain shadow-2xl"
            />
            <button
              onClick={next}
              aria-label="Next"
              data-testid="lightbox-next"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/25 hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-white/70">
              {lightbox + 1} / {items.length} · {items[lightbox].category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
