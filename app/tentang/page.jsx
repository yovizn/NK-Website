"use client";

import { useEffect, useState } from "react";


import Preloader from "@components/utils/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import Intro from "@components/About/Intro";
import Description from "@components/About/Description";
import History from "@components/About/History";

export default function Tentang() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    <main className="flex flex-col gap-5 max-md:overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <Description />
      <History />
      
      <div className="sm:hidden h-[6vh]"></div>
    </main>
  );
}
