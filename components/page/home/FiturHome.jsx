import WordAnimation from "@components/utils/WordAnimation";
import { fadeInCard } from "@components/utils/animation/animationEverything";
import { motion } from "framer-motion";
import {
  PhotoIcon,
  HomeModernIcon,
  NewspaperIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { FitureContent } from "@constants";
import { useState } from "react";

export default function FiturHome() {
  const FitureCard = [
    {
      title: "Informasi",
      description:
        "Informasi menarik seputar Kegiatan, Fun Fact dan Event lainnya.",
      icon: <NewspaperIcon className="w-6 h-6" />,
    },
    {
      title: "Dokumentasi Foto & Video",
      description: "Foto dan Video hingga Keseruan yang pernah tercipta.",
      icon: <PhotoIcon className="w-6 h-6" />,
    },
    {
      title: "Fasilitas",
      description: "Wadah Kreasi melalui ide ide menarik yang ada.",
      icon: <HomeModernIcon className="w-6 h-6" />,
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }
    setSelected(idx);
  };

  return (
    <div className="container flex flex-col gap-y-10 mb-10 bg-gradient-to-b">
      <div className="mb-10 md:mb-24 overflow-hidden flex justify-center text-justify md:text-center">
        <div className="text-4xl md:text-6xl max-w-[40rem] leading-[90%] mb-4 tracking-[-2px]">
          <WordAnimation words="Ketahui lebih banyak tentang Nakula Kresna?" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
        {FitureCard.map((l, idx) => {
          return (
            <motion.div
              custom={idx}
              variants={fadeInCard}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={idx}
              className="flex flex-col gap-2 border p-4 rounded-md"
            >
              <h1 className="text-xl text-start">
                {l.icon} {l.title}
              </h1>
              <p>{l.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="flex-col flex rounded-md border overflow-hidden">
        {FitureContent.map((l, idx) => {
          return (
            <motion.div
              variants={fadeInCard}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={idx}
              className="odd:bg-secondary odd:text-primary even:bg-primary even:text-background"
            >
              <div
                className="px-4 py-4 flex justify-between items-center even:border-t even:border-b cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <h4 className="text-lg md:text-2xl font-semibold">{l.title}</h4>
                {selected === idx ? (
                  <MinusIcon className="w-6 h-6" />
                ) : (
                  <PlusIcon className="w-6 h-6" />
                )}
              </div>
              <div
                className={`${
                  selected === idx
                    ? "px-4 pb-2 max-h-full"
                    : "px-4 pb-0 max-h-0"
                }`}
              >
                <div className="font-satoshi flex flex-col">{l.description}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
