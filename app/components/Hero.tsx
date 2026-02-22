"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient/video placeholder */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Atmospheric dark gradient mimicking a club stage */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0a0a1a] via-[#030303] to-[#030303]" />
        {/* Neon light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#00d4ff]/20 via-[#00d4ff]/5 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[#ff003c]/15 via-[#ff003c]/5 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#00d4ff]/10 via-transparent to-transparent" />
        {/* Stage floor light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-64 bg-[#00d4ff]/[0.03] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30vw] h-32 bg-[#00d4ff]/[0.06] blur-2xl rounded-full" />
        {/* Haze effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60" />
        {/* Video placeholder label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/[0.03] rounded px-3 py-1.5 text-[10px] tracking-widest text-white/10 uppercase select-none">
          Background video
        </div>
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#00d4ff] mb-6 font-semibold"
        >
          Underground Electronic Music
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(5rem,20vw,18rem)] font-black leading-none tracking-tighter uppercase text-white glow-blue"
        >
          CanaX
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/40 mt-4 font-medium"
        >
          DJ · Producer · Selector
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="#music"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#music")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase bg-[#00d4ff] text-black overflow-hidden transition-all duration-300 hover:glow-box-blue"
          >
            <span className="relative z-10">Listen Now</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          <a
            href="#gigs"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#gigs")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-white/30 text-white/70 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300"
          >
            Upcoming Gigs
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#00d4ff]/60 to-transparent"
        />
      </motion.div>

      {/* Ticker tape */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/[0.04] py-3 bg-[#030303]/80 backdrop-blur-sm">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex shrink-0">
              {[
                "Techno",
                "House",
                "Dark Electro",
                "Industrial",
                "Acid",
                "Minimal",
                "Deep",
                "Raw",
              ].map((genre) => (
                <span
                  key={genre}
                  className="text-[10px] tracking-[0.3em] uppercase text-white/20 px-8"
                >
                  {genre} ✦
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
