import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyramid — 3D Scan Marketplace for Historical Sites",
  description: "Buy and sell high-quality 3D scans of historical monuments and sites. Built for museums, educators, VR developers, and researchers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ffbcedb7-c0f8-4917-8425-c6314fff9254"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
