import {
  useScroll,
  useTransform,
  motion,
  MotionConfig,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import WordAnimation from "@components/utils/WordAnimation";
import WordAnim from "@components/utils/WordAnim";
import { scaleUpAnimation } from "@components/utils/animation/animationEverything";
import Image from "next/image";

import FutsalF from "@public/images/Aktifitas/Olahraga/Futsal.jpg";
import MaratonM from "@public/images/Aktifitas/Olahraga/Maraton.jpg";

export default function HeroAktifitas() {
  const OlahRaga = [
    {
      title: "Futsal",
      src: FutsalF,
      alt: "Foto Futsal HUT RI 2023 Perum. Bekasi Timur Permai",
      desc: "Futsal HUT RI 2023 Perum. Bekasi Timur Permai",
      className: "perspective-left",
    },
    {
      title: "Marathon",
      src: MaratonM,
      alt: "Foto Maraton HUT RI 2023 Perum. Bekasi Timur Permai",
      desc: "Maraton HUT RI 2023 Perum. Bekasi Timur Permai",
      className: "perspective-right",
    },
  ];

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < OlahRaga.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="flex flex-col min-h-[200vh]">
      <div className="relative w-full max-h-[40rem] h-screen" ref={ref}>
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ y }}
        >
          <motion.video
            className="w-full h-full object-cover"
            variants={scaleUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="https://youtu.be/Fx4pTnC14qc" type="video/mp4" />
            <source src="/videos/PawaiObor_Trim.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute top-0 left-0 right-0 -bottom-1 bg-gradient-to-b from-transparent to-background" />
        </motion.div>
      </div>

      <div className="container grid lg:grid-cols-[2fr_1fr] px-4 z-10 mb-[12rem]">
        <h1 className="text-2xl lg:text-5xl mb-4 text-primary">
          Aktifitas & Kreatifitas
        </h1>
        <p className="text-base font-satoshi text-justify">
          Ini adalah aktifitas atau kegiatan yang terjadi di wilayah Bekasi
          Timur Permai, dalam agenda Tahunan dan kalender Event berjalan, Telah
          di dokumentasikan secara administratif sesuai bidang atau struktural
          dalam pengurusan wilayah RT masing-masing.
        </p>
      </div>

      <div className="flex flex-col lg:items-center justify-center z-10 bg-gradient-to-b from-transparent to-secondary pb-10 max-lg:px-4">
        <h3 className="text-2xl md:text-3xl text-primary font-bold">
          <WordAnimation words="Kemeriahan HUT RI" />
        </h3>
        <h5 className="text-base md:text-2xl max-w-4xl font-satoshi">
          <WordAnimation
            words="Sungguh acara memperingati Kemerdekaan bangsa Indonesia yang meriah,
          kami akan merangkum dan menyajikan kepada anda Dokumentasi dan isi
          dari acara sebagai berikut;"
          />
        </h5>
      </div>

      <div className="bg-gradient-to-b from-secondary to-background overflow-x-hidden">
        <div className="flex flex-col items-center justify-center gap-10 md:p-24 lg:min-h-screen container mb-10">
          <MotionConfig
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="relative w-full md:max-w-[1536px] flex items-center">
              <AnimatePresence>
                {isFocus && (
                  // Button
                  <motion.div
                    className="absolute left-2 right-2 flex justify-between z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onHoverStart={() => setIsFocus(true)}
                    onHoverEnd={() => setIsFocus(false)}
                  >
                    <button className="text-text">
                      <ChevronLeftIcon
                        className="h-10 w-10"
                        onClick={onPrevClick}
                      />
                    </button>
                    <button className="text-text">
                      <ChevronRightIcon
                        className="h-10 w-10"
                        onClick={onNextClick}
                      />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="flex gap-4 flex-nowrap"
                animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
                onHoverStart={() => setIsFocus(true)}
                onHoverEnd={() => setIsFocus(false)}
              >
                {OlahRaga.map((l, idx) => {
                  return (
                    <Image
                      key={idx}
                      src={l.src}
                      alt={l.alt}
                      animate={{ opacity: current === idx ? 1 : 0.1 }}
                      className={`object-cover aspect-[16/9] transition-opacity duration-300 ${
                        current === idx ? "opacity-100" : "opacity-25"
                      }`}
                    />
                  );
                })}
              </motion.div>
              <div className="absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex gap-3 py-1 px-1 md:px-2 md:py-2 bg-accent rounded-full opacity-80 group">
                  {OlahRaga.map((_, idx) => {
                    return (
                      <button key={idx} onClick={() => setCurrent(idx)}>
                        <div
                          className={`w-2 h-2 rounded-full opacity-50 duration-300 ease-in-out group-hover:opacity-100 ${
                            idx === current ? "bg-text" : "bg-secondary"
                          }`}
                        ></div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex">
              {OlahRaga.map((l, idx) => {
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center gap-4 md:gap-8 ${
                      current === idx ? "block" : "hidden"
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl text-primary font-bold">
                      <WordAnim words={l.title} />
                    </h3>
                    <h5 className="text-base md:text-2xl max-w-4xl font-satoshi">
                      <WordAnim words={l.desc} />
                    </h5>
                  </div>
                );
              })}
            </div>
          </MotionConfig>
        </div>
      </div>
    </div>
  );
}
