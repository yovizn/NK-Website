"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ImageComp({ src, className, alt, priority, imageClass }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-b from-transparent via-secondary to-transparent ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
        }}
        className={`object-cover ${imageClass}`}
      />
    </div>
  );
}
