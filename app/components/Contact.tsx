"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.73a4.85 4.85 0 01-1-.04z" />
      </svg>
    ),
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.175 12.225c-.017 0-.032.001-.047.003v-.003a.474.474 0 00-.467.477c0 .263.21.476.47.476a.475.475 0 00.476-.476.475.475 0 00-.432-.477zm2.021-.714a.743.743 0 00-.744.743v4.27a.742.742 0 00.744.741.742.742 0 00.744-.741v-4.27a.743.743 0 00-.744-.743zm2.061-.528a.889.889 0 00-.889.888v5.427a.888.888 0 00.889.888.889.889 0 00.889-.888V11.87a.889.889 0 00-.889-.888zm2.06.29a.97.97 0 00-.969.968v5.137a.97.97 0 00.969.969.97.97 0 00.969-.969v-5.137a.97.97 0 00-.969-.968zm2.144.263a1.044 1.044 0 00-1.043 1.043v4.61a1.044 1.044 0 001.043 1.044 1.044 1.044 0 001.044-1.043v-4.61a1.044 1.044 0 00-1.044-1.044zm2.144-.286a1.094 1.094 0 00-1.093 1.093v5.182a1.094 1.094 0 001.093 1.093 1.094 1.094 0 001.094-1.093V12.33a1.094 1.094 0 00-1.094-1.08zm4.245-.524c-.18 0-.36.017-.534.05a5.78 5.78 0 00-5.612-4.405 5.78 5.78 0 00-5.78 5.78 5.78 5.78 0 005.78 5.78h5.886a3.62 3.62 0 003.62-3.62 3.62 3.62 0 00-3.36-3.585z" />
      </svg>
    ),
  },
  {
    label: "Resident Advisor",
    href: "https://ra.co",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.01 4.5h3.523c2.547 0 3.487 1.253 3.487 2.813 0 1.387-.773 2.32-2.04 2.613l2.4 5.574H17.4l-2.174-5.24H13.49v5.24h-1.5V4.5zm1.5 1.373v3.027h1.68c1.267 0 1.867-.587 1.867-1.52 0-.92-.6-1.507-1.867-1.507H13.49zm-7.24-.373h1.5v5.58l3.653-5.58h1.8l-3.48 5.16 3.72 5.84h-1.84L7.75 10.867V16.5h-1.5V5.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "booking",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden bg-[#050508]"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[#00d4ff]/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00d4ff]">
            04 — Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-3">
              Book
              <br />
              <span className="text-[#00d4ff] glow-blue">CanaX</span>
            </h2>
            <p className="text-white/40 text-sm mb-10">
              For bookings, press inquiries, or collaborations — reach out below.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-[#00d4ff]/30 p-8 text-center"
              >
                <div className="text-[#00d4ff] text-3xl mb-3">✓</div>
                <p className="text-white font-bold tracking-widest uppercase text-sm mb-1">
                  Message received
                </p>
                <p className="text-white/40 text-xs">
                  We&apos;ll get back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00d4ff]/60 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00d4ff]/60 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-2">
                    Inquiry type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#030303] border border-white/10 px-4 py-3 text-sm text-white/70 focus:border-[#00d4ff]/60 transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="booking">Booking Inquiry</option>
                    <option value="press">Press / Media</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00d4ff]/60 transition-colors duration-300 resize-none"
                    placeholder="Tell us about the event, date, and location..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 text-xs font-black tracking-[0.25em] uppercase bg-[#00d4ff] text-black hover:bg-white transition-colors duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Info + Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-10"
          >
            {/* Booking agency */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-5">
                Booking Agency
              </h3>
              <div className="border border-white/[0.06] p-6">
                <p className="font-bold text-white text-sm mb-1">VOID Management</p>
                <p className="text-white/40 text-xs mb-1">Global Bookings</p>
                <a
                  href="mailto:bookings@void-mgmt.com"
                  className="text-[#00d4ff] text-xs hover:text-white transition-colors duration-300"
                >
                  bookings@void-mgmt.com
                </a>
              </div>
            </div>

            {/* Press */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-5">
                Press & Media
              </h3>
              <div className="border border-white/[0.06] p-6">
                <p className="font-bold text-white text-sm mb-1">Press Office</p>
                <a
                  href="mailto:press@canax.com"
                  className="text-[#00d4ff] text-xs hover:text-white transition-colors duration-300"
                >
                  press@canax.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-5">
                Follow
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-3 px-4 py-3 border border-white/[0.06] text-white/40 hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
