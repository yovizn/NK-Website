"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/header";
import "@styles/globals.css";

export const metadata = {
  title: "Nakula Kresna",
  description: "Informasi, dan berita tentang Nakula Kresna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="box-border">
        <main className="bg-background text-text font-baiJamjuree select-none">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
