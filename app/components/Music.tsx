"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const mixes = [
  {
    id: 1,
    title: "CANAX — Fabric Mix 001",
    platform: "soundcloud",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1959735967&color=%2300d4ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
  },
  {
    id: 2,
    title: "CANAX — Boiler Room Berlin",
    platform: "soundcloud",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1959735967&color=%2300d4ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
  },
];

const spotifyUri = "https://open.spotify.com/embed/artist/4Z8W4fKeB5YxbusRsdQVPb?utm_source=generator&theme=0";

export default function Music() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" ref={ref} className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden bg-[#050508]">
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#ff003c]/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d4ff]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ff003c]">
            02 — Music
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff003c]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: SoundCloud mixes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-10">
              Latest
              <br />
              <span className="text-[#ff003c] glow-red">Mixes</span>
            </h2>

            <div className="space-y-6">
              {mixes.map((mix, i) => (
                <motion.div
                  key={mix.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="border border-white/[0.06] overflow-hidden hover:border-[#ff003c]/30 transition-colors duration-300"
                >
                  <div className="px-4 py-3 border-b border-white/[0.04] flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff003c]" />
                    <span className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                      {mix.title}
                    </span>
                  </div>
                  <iframe
                    title={mix.title}
                    width="100%"
                    height="166"
                    scrolling="no"
                    allow="autoplay"
                    src={mix.embedUrl}
                    className="block"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Spotify */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-10">
              On
              <br />
              <span className="text-[#00d4ff] glow-blue">Spotify</span>
            </h2>

            <div className="border border-white/[0.06] overflow-hidden hover:border-[#00d4ff]/30 transition-colors duration-300">
              <div className="px-4 py-3 border-b border-white/[0.04] flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1db954]" />
                <span className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                  CanaX on Spotify
                </span>
              </div>
              <iframe
                title="CanaX on Spotify"
                src={spotifyUri}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block"
              />
            </div>

            {/* Streaming links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Beatport", href: "#" },
                { label: "Bandcamp", href: "#" },
                { label: "Resident Advisor", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/10 text-white/40 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-300"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
