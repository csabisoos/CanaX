import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CanaX — Underground Electronic Music",
  description:
    "Official website of CanaX — underground electronic music DJ & producer. Explore mixes, tour dates, and bookings.",
  keywords: ["CanaX", "DJ", "electronic music", "underground", "techno", "house"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#030303] text-white">
        {children}
      </body>
    </html>
  );
}


