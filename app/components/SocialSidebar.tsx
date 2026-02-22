"use client";

export default function SocialSidebar() {
  const links = [
    { label: "IG", href: "https://instagram.com" },
    { label: "TT", href: "https://tiktok.com" },
    { label: "SC", href: "https://soundcloud.com" },
    { label: "RA", href: "https://ra.co" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] font-black tracking-[0.15em] uppercase text-white/20 hover:text-[#00d4ff] transition-colors duration-300 writing-mode-vertical"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
        >
          {link.label}
        </a>
      ))}
      <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mt-2" />
    </div>
  );
}
