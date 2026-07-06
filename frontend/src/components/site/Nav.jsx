import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e0e0e]/90 backdrop-blur-xl border-b border-[#c9a96e]/15 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <div className="w-9 h-9 rounded-full border border-[#c9a96e] flex items-center justify-center">
            <span className="font-display text-[#c9a96e] text-sm tracking-tight">BP</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-white text-lg tracking-wide">
              The Bharat Palace
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#c9a96e]">
              Sitapur
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.24em] text-white/80 hover:text-[#c9a96e] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-[#c9a96e] transition-colors"
            data-testid="nav-phone"
          >
            <Phone className="w-3.5 h-3.5" /> {CONTACT.phoneDisplay}
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden sm:inline-flex btn-gold"
            data-testid="nav-book-btn"
          >
            Book Your Event
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0e0e0e]/98 backdrop-blur-xl border-t border-[#c9a96e]/15">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className="text-sm uppercase tracking-[0.24em] text-white/85 hover:text-[#c9a96e]"
                data-testid={`nav-mobile-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-gold w-full justify-center mt-2"
              data-testid="nav-mobile-book"
            >
              Book Your Event
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
