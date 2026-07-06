# The Bharat Palace — Landing Page PRD

## Original Problem Statement
Luxury single-page marketing website for **The Bharat Palace**, a premium banquet hall in Arya Nagar, Sitapur (UP 261001). Conversion goal: generate WhatsApp enquiries for weddings, receptions, corporate events, birthdays, engagements, anniversaries and family gatherings. Reference aesthetic: Regent Hill (black + ivory + gold, editorial layout, cinematic imagery, premium micro-animations).

## User Choices
- Enquiry flow: **WhatsApp only** (no backend persistence)
- Gallery imagery: **Owner-provided venue photos** (5) + supplementary luxury stock
- Design: **Designer freedom** on hero/layout

## Personas
- Primary: Families in Sitapur / nearby districts planning weddings, receptions, engagements
- Secondary: Corporate event planners; parents planning birthdays / baby showers
- Tertiary: Anniversary and family-gathering hosts

## Core Requirements (Static)
1. Sticky nav (transparent → dark on scroll) + Book Your Event CTA
2. Cinematic hero slider (auto-rotate, 3 slides, indicators)
3. Floating WhatsApp / Call / Maps FAB (fixed bottom-right)
4. About editorial split with 7 highlights
5. Why Choose Us — 8 facility cards
6. Event Categories masonry — 8 categories
7. Animated statistics counters — 146+ / 24/7 / 400+ / 100+
8. Filterable gallery + lightbox with keyboard nav (Esc, ←, →)
9. Virtual Experience CTA
10. Testimonials — 3 named Google reviews + aggregate 3.3/5
11. Booking CTA band
12. Contact — enquiry form (WhatsApp deep-link) + address + hours + embedded Google Map
13. Luxury footer with quick links, social placeholders, contact
14. SEO: title, meta description, OG/Twitter tags, Schema.org EventVenue

## Implementation (Iteration 1 — Dec 2025)
- ✅ React SPA (`/` → LandingPage) using Tailwind + framer-motion + lucide-react
- ✅ Playfair Display + Poppins + Cormorant Garamond via Google Fonts
- ✅ 5 owner images integrated in Hero / About / Events / Gallery / CTA / Virtual sections
- ✅ WhatsApp deep-link enquiry (no backend persistence)
- ✅ Google Maps embed for Bharat Palace, Sitapur
- ✅ Schema.org EventVenue + aggregate rating markup in `index.html`
- ✅ 100% pass on 17-flow frontend test (Playwright, testing_agent_v3 iteration 1)

## Files
- `/app/frontend/src/App.js` — router entry (single `/` route)
- `/app/frontend/src/pages/LandingPage.jsx` — section composition
- `/app/frontend/src/components/site/*.jsx` — 12 section components
- `/app/frontend/src/data/content.js` — all constants (contacts, images, reviews, stats)
- `/app/frontend/src/index.css` — design tokens + utility classes
- `/app/frontend/public/index.html` — SEO meta + fonts + Schema.org

## Backlog / Next Actions
### P1
- [ ] Replace stock imagery with additional owner photos as they become available
- [ ] Wire real Instagram / Facebook / YouTube URLs (currently placeholder `href="#"`)
- [ ] Add a lightweight "Enquiry received" toast after WhatsApp popup opens

### P2
- [ ] Video hero background option (short 6s loop) alongside slider fallback
- [ ] Optional: capture enquiries to MongoDB in addition to WhatsApp (would require adding a `/api/enquiries` endpoint and a small backend model)
- [ ] Multilingual toggle (Hindi/English) for local reach

### P3
- [ ] Blog / stories module for SEO (real weddings, testimonials with photos)
- [ ] Pricing/quote calculator for guest count and event type

