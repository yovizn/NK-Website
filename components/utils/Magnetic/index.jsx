"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magenetic({ children }) {
  const refs = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = refs.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={refs}
      animate={{ x, y }}
      transition={{type: "spring", stiffness: 160, damping: 15, mass: 0.3}}
    >
      {children}
    </motion.div>
  );
}
