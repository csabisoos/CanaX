"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "10+", label: "Years in the scene" },
  { value: "200+", label: "Live performances" },
  { value: "50+", label: "Cities worldwide" },
  { value: "1M+", label: "Online listeners" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00d4ff]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00d4ff]">
            01 — About
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/40 to-transparent" />
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-8">
              Born in the
              <br />
              <span className="text-[#00d4ff] glow-blue">darkness</span>
              <br />
              of the night.
            </h2>
            <div className="space-y-5 text-white/50 text-sm md:text-base leading-relaxed">
              <p>
                CanaX is an underground electronic music DJ and producer pushing the
                boundaries of dark, industrial, and hypnotic sounds. Rooted in the
                warehouse and basement club scenes of Eastern Europe, CanaX has spent
                over a decade crafting sonic landscapes that blur the line between
                techno, acid, and experimental electronic music.
              </p>
              <p>
                Known for relentless, high-energy sets and an unwavering commitment
                to the underground ethos, CanaX has performed at renowned venues and
                festivals across Europe, Asia, and beyond — earning a reputation as
                a true selector with a signature sound that's entirely their own.
              </p>
              <p>
                Every set is a journey. Every track a statement. No compromises.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Techno", "Acid House", "Industrial", "Dark Electro", "Minimal"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/10 text-white/40 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: Stats + Image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Image placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#080812] to-[#030303]" />
              {/* Atmospheric DJ silhouette effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-64 bg-[#00d4ff]/[0.06] blur-3xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-48 bg-[#00d4ff]/[0.04] blur-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/10">
                  Press Photo
                </span>
              </div>
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="border border-white/[0.06] p-5 hover:border-[#00d4ff]/30 transition-colors duration-300 group"
                >
                  <div className="text-3xl font-black text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-white/30 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
