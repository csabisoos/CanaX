"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="text-lg font-black tracking-widest uppercase text-white/80">
            CANAX
          </span>
          <span className="text-white/10">|</span>
          <span className="text-xs text-white/20 tracking-wider">
            © {year} All rights reserved
          </span>
        </div>

        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Press Kit"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[10px] tracking-[0.25em] uppercase text-white/20 hover:text-white/50 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-white/20 hover:text-[#00d4ff] transition-colors duration-300"
        >
          Back to top ↑
        </motion.a>
      </div>
    </footer>
  );
}
