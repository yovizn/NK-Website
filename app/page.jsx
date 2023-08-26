"use client";

import FiturHome from "@components/page/home/FiturHome";
import HomeHero from "@components/page/home/HomeHero";
import ImageCarousel from "@components/page/home/ImageCarousel";
import Prolog from "@components/page/home/Prolog";
import Preloader from "@components/utils/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Home() {
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
    <div className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <HomeHero />

      <ImageCarousel />

      <Prolog />

      <FiturHome />
    </div>
  );
}
