import React from "react";
import { Instagram, Facebook, Youtube, Phone, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/content";

export const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer
      className="relative bg-[#080808] border-t border-[#c9a96e]/15 pt-20 pb-10"
      data-testid="site-footer"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 flex items-center justify-center">
                <img
                  src="/images/bp-logo.png"
                  alt="The Bharat Palace logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-display text-white text-xl">
                  The Bharat Palace
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#c9a96e]">
                  Sitapur
                </div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-md">
              A premium banquet venue in Sitapur, crafted for weddings,
              receptions, corporate events and celebrations. Open 24 hours with
              hospitality that lingers long after the evening ends.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  data-testid={`footer-social-${i}`}
                  className="w-9 h-9 rounded-full border border-white/12 hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#c9a96e] mb-5">
              Explore
            </div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.href);
                    }}
                    className="text-sm text-white/70 hover:text-[#c9a96e] transition-colors"
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#c9a96e] mb-5">
              Contact
            </div>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a96e] mt-1" />
                {CONTACT.addressFull}
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-3 hover:text-[#c9a96e] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c9a96e] mt-1" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#c9a96e] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#c9a96e] mt-1" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive logotype */}
        <div className="pt-4 pb-4 overflow-hidden">
          <div className="font-display text-white/[0.06] text-[18vw] leading-none tracking-tighter select-none">
            Bharat Palace
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} The Bharat Palace. All rights reserved.</div>
          <div className="uppercase tracking-[0.24em]">Sitapur · Uttar Pradesh</div>
        </div>
      </div>
    </footer>
  );
};
