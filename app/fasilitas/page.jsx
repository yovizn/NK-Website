"use client";

import HeroFasilitas from "@components/page/fasilitas/HeroFasilitas";
import Keagamaan from "@components/page/fasilitas/Keagamaan";
import Keamanan from "@components/page/fasilitas/Keamanan";
import Lingkungan from "@components/page/fasilitas/Lingkungan";
import SeniOlahraga from "@components/page/fasilitas/SeniOlahraga";
import PreloaderFasilitas from "@components/utils/Preloader/PreloaderFasilitas";

import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Fasilitas() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  return (
    <div className="scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <PreloaderFasilitas />}
      </AnimatePresence>

      <HeroFasilitas />

      <Keagamaan />

      <Keamanan />

      <Lingkungan />

      <SeniOlahraga />
    </div>
  );
}
