import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { FACILITIES } from "@/data/content";

export const WhyChooseUs = () => {
  return (
    <section
      id="facilities"
      className="relative py-24 md:py-36 bg-[#0a0a0a] border-y border-white/5"
      data-testid="why-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="chip mb-6">Why Choose Us</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
            Everything you need for a{" "}
            <span className="font-accent italic text-[#c9a96e]">memorable</span>{" "}
            occasion
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
          {FACILITIES.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.Star;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group bg-[#0e0e0e] p-8 md:p-10 hover:bg-[#141414] transition-colors relative"
                data-testid={`facility-${i}`}
              >
                <div className="w-12 h-12 rounded-full border border-[#c9a96e]/40 flex items-center justify-center mb-6 group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/5 transition-all">
                  <Icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-xl text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                <div className="absolute top-8 right-8 font-display text-xs text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
