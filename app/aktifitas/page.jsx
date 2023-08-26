"use client";


import HeroAktifitas from "@components/page/aktifitas/HeroAktifitas";
import PreloaderAktifitas from "@components/utils/Preloader/PreloaderAktifitas";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Aktifitas() {
  const [isLoading, setIsLoading] = useState(true);

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
    <main className="flex flex-col min-h-[200vh]">
      <AnimatePresence mode="wait">
        {isLoading && <PreloaderAktifitas />}
      </AnimatePresence>

      <section>
        <HeroAktifitas />
      </section>
    </main>
  );
}
