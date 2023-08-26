"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Description() {
  const phrases = [
    "Nakula Kresna berdasarkan nama Jalan",
    "Terima Kasih sudah berkunjung",
    "Kami berusaha untuk memberikan yang terbaik",
    "Work Hard, Pray Hard",
    "Love doing funny thing",
    "Hope you like it?!",
  ];

  return (
    <div className="mt-[120vw] ml-4 md:ml-10 text-whiteness lg:mt-[30vw] font-clashDisplay relative text-xl md:text-4xl z-[1]">
      {phrases.map((phrases, index) => {
        return <AnimatedText key={index}>{phrases}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
        markers: false,
      },
      left: "-200px",
      opacity: 0,
      duration: 1,
      scrollBehavior: "smooth",
      ease: "power4.inOut",
    });
  }, []);

  return (
    <p className="relative m-0" ref={text}>
      {children}
    </p>
  );
}
