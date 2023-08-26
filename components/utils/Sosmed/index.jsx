import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Magenetic from "../Magnetic";
import WordAnimation from "../WordAnimation";
import { iconAnimation } from "../animation/animationEverything";
import facebook from "@public/images/Sosmed/facebook.png";
import gmail from "@public/images/Sosmed/gmail.png";
import youtube from "@public/images/Sosmed/youtube.png";
import instagram from "@public/images/Sosmed/instagram.png";

export default function Sosmed() {
  const Sosmeds = [
    {
      icon: facebook,
      href: "https://web.facebook.com/people/Nakula-Kresna/pfbid05yXLVKXepDefPdVTqjgDMEZcT8vBfi25dDtUGXxQpxwaKSBNjCg2foGA6336pYRYl/?mibextid=ZbWKwL",
    },
    {
      icon: gmail,
      href: "https://kresnanakula@gmail.com",
    },
    {
      icon: youtube,
      href: "https://www.youtube.com",
    },
    {
      icon: instagram,
      href: "https://instagram.com/nakulakresna0123?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto my-8 z-10">
      <h1 className="font-medium text-center font-satoshi text-xl md:text-3xl my-8 uppercase">
        <WordAnimation words="Kunjungi juga akun Sosial Media kami." />
      </h1>
      <div className="flex items-center justify-between lg:justify-evenly mb-10">
        {Sosmeds.map((i, idx) => {
          return (
            <Link href={i.href} key={idx}>
              <motion.div
                custom={idx}
                variants={iconAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Magenetic>
                  <div className="relative h-10 w-10 md:w-12 md:h-12">
                    <Image
                      src={i.icon}
                      alt={i.icon}
                      fill
                      sizes="50%"
                      className="object-cover"
                    />
                  </div>
                </Magenetic>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
