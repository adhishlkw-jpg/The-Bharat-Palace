import React from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/data/content";

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" data-testid="floating-actions">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        data-testid="fab-whatsapp"
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label="Call"
        data-testid="fab-call"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#c9a96e] shadow-[0_10px_30px_-8px_rgba(201,169,110,0.6)] flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#0e0e0e]" />
      </a>
      <a
        href={CONTACT.maps}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Directions"
        data-testid="fab-maps"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#141414] border border-[#c9a96e]/40 flex items-center justify-center hover:border-[#c9a96e] hover:scale-110 transition-all"
      >
        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#c9a96e]" />
      </a>
    </div>
  );
};
