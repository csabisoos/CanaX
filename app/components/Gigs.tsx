"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const gigs = [
  {
    id: 1,
    date: "MAR 08",
    venue: "Tresor",
    city: "Berlin, DE",
    event: "SUBZERO — Room 2",
    tickets: "#",
    featured: true,
  },
  {
    id: 2,
    date: "MAR 15",
    venue: "Fabric",
    city: "London, UK",
    event: "fabric:underground vol. 12",
    tickets: "#",
    featured: false,
  },
  {
    id: 3,
    date: "MAR 22",
    venue: "Robert Johnson",
    city: "Offenbach, DE",
    event: "Sunday Session",
    tickets: "#",
    featured: false,
  },
  {
    id: 4,
    date: "APR 05",
    venue: "Concrete",
    city: "Paris, FR",
    event: "NUIT BLANCHE",
    tickets: "#",
    featured: false,
  },
  {
    id: 5,
    date: "APR 12",
    venue: "De School",
    city: "Amsterdam, NL",
    event: "Night Shift",
    tickets: "#",
    featured: false,
  },
  {
    id: 6,
    date: "APR 19",
    venue: "Nitsa Club",
    city: "Barcelona, ES",
    event: "Techno Ritual",
    tickets: "#",
    featured: false,
  },
  {
    id: 7,
    date: "MAY 03",
    venue: "Säule",
    city: "Berlin, DE",
    event: "Berghain — All Night Long",
    tickets: "#",
    featured: true,
  },
  {
    id: 8,
    date: "MAY 17",
    venue: "DC-10",
    city: "Ibiza, ES",
    event: "Circoloco",
    tickets: "#",
    featured: false,
  },
];

export default function Gigs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gigs" ref={ref} className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00d4ff]">
            03 — Gigs
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight sticky top-24">
              Tour
              <br />
              <span className="text-[#00d4ff] glow-blue">Dates</span>
              <br />
              2025.
            </h2>
          </motion.div>

          {/* Right: Gig list */}
          <div className="lg:col-span-2">
            <div className="border-t border-white/[0.06]">
              {gigs.map((gig, i) => (
                <motion.a
                  key={gig.id}
                  href={gig.tickets}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="group relative flex items-center justify-between py-5 border-b border-white/[0.06] hover:border-[#00d4ff]/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-center gap-6 md:gap-10 relative z-10">
                    {/* Date */}
                    <div className="min-w-[60px]">
                      <span className="text-xs font-black tracking-widest text-[#00d4ff] uppercase">
                        {gig.date}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-8 bg-white/10" />

                    {/* Event info */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm md:text-base font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                          {gig.venue}
                        </span>
                        {gig.featured && (
                          <span className="px-2 py-0.5 text-[9px] font-black tracking-widest uppercase bg-[#ff003c] text-white">
                            HEADLINE
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-white/30">{gig.city}</span>
                        <span className="text-white/15">·</span>
                        <span className="text-xs text-white/25">{gig.event}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tickets CTA */}
                  <div className="relative z-10 flex items-center gap-2 shrink-0 ml-4">
                    <span className="hidden sm:block text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 group-hover:text-[#00d4ff] transition-colors duration-300">
                      Tickets
                    </span>
                    <span className="text-white/20 group-hover:text-[#00d4ff] transition-colors duration-300 text-sm">
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Past dates link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <a
                href="#"
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 hover:text-white/50 transition-colors duration-300"
              >
                View all past performances →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
