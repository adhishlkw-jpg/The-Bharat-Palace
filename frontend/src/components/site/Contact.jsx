import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock3, Navigation, MessageCircle } from "lucide-react";
import { CONTACT, EVENT_TYPES } from "@/data/content";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  event: "",
  date: "",
  guests: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = useState(initialForm);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = `Hello Bharat Palace,

I would like to enquire about booking your banquet hall.

Name: ${form.name}
Phone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ""}
Event: ${form.event}
Date: ${form.date}
Guests: ${form.guests}${form.message ? `\nMessage: ${form.message}` : ""}`;
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-[#0a0a0a]"
      data-testid="contact-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="chip mb-6">Get In Touch</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] text-balance">
            Enquire about your{" "}
            <span className="font-accent italic text-[#c9a96e]">event</span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg max-w-xl">
            Send us a quick enquiry — we&apos;ll reply on WhatsApp within minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Enquiry form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#141414] border border-white/8 p-6 md:p-10"
            data-testid="enquiry-form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputCls}
                  data-testid="enquiry-name"
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputCls}
                  data-testid="enquiry-phone"
                  placeholder="+91 xxxxx xxxxx"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className={inputCls}
                  data-testid="enquiry-email"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Event Type" required>
                <select
                  required
                  value={form.event}
                  onChange={update("event")}
                  className={`${inputCls} appearance-none pr-8`}
                  data-testid="enquiry-event"
                >
                  <option value="" disabled>
                    Select event
                  </option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Event Date" required>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className={inputCls}
                  data-testid="enquiry-date"
                />
              </Field>
              <Field label="Guest Count" required>
                <input
                  required
                  type="number"
                  min="1"
                  value={form.guests}
                  onChange={update("guests")}
                  className={inputCls}
                  data-testid="enquiry-guests"
                  placeholder="e.g. 250"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputCls} resize-none`}
                    data-testid="enquiry-message"
                    placeholder="Tell us a little about your celebration…"
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold mt-8 w-full sm:w-auto justify-center"
              data-testid="enquiry-submit"
            >
              <MessageCircle className="w-4 h-4" /> Send Enquiry via WhatsApp
            </button>
            <p className="mt-4 text-[11px] text-white/40">
              By submitting, your details will open a pre-filled WhatsApp
              message to our team on {CONTACT.phoneDisplay}.
            </p>
          </motion.form>

          {/* Details + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-[#141414] border border-white/8 p-8">
              <h3 className="font-display text-2xl text-white mb-6">
                Visit Us
              </h3>
              <div className="space-y-5">
                <Info
                  icon={<MapPin className="w-4 h-4" />}
                  label="Address"
                  value={CONTACT.addressFull}
                />
                <Info
                  icon={<Phone className="w-4 h-4" />}
                  label="Phone"
                  value={CONTACT.phoneDisplay}
                  href={`tel:${CONTACT.phone}`}
                />
                <Info
                  icon={<Clock3 className="w-4 h-4" />}
                  label="Hours"
                  value={CONTACT.hours}
                />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CONTACT.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  data-testid="contact-directions"
                >
                  <Navigation className="w-4 h-4" /> Directions
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="btn-ghost"
                  data-testid="contact-call"
                >
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  data-testid="contact-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-white/8">
              <iframe
                title="The Bharat Palace on Google Maps"
                src="https://www.google.com/maps?q=The+Bharat+Palace+Arya+Nagar+Sitapur&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05]"
                data-testid="contact-map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const inputCls =
  "w-full bg-transparent border-b border-white/15 focus:border-[#c9a96e] outline-none py-3 text-white placeholder:text-white/30 text-sm transition-colors";

const Field = ({ label, children, required }) => (
  <label className="block">
    <span className="text-[10px] uppercase tracking-[0.24em] text-[#c9a96e] mb-2 block">
      {label} {required && <span className="text-white/40">*</span>}
    </span>
    {children}
  </label>
);

const Info = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex items-start gap-3">
      <span className="text-[#c9a96e] mt-0.5">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.24em] text-white/40 mb-1">
          {label}
        </div>
        <div className="text-white text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="hover:text-[#c9a96e] transition-colors">
      {content}
    </a>
  ) : (
    content
  );
};
